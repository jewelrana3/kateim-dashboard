"use client";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useApplyGlobalCoupon } from "@/lib/query/hooks/dashboard/package";

export default function OfferModal({
  title,
  trigger,
}: {
  title?: string;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    percent_off: 0,
    description: "",
  });

  const applyGlobalCoupon = useApplyGlobalCoupon();

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await applyGlobalCoupon.mutateAsync(formData);
      // Only close modal and reset form on success
      setOpen(false);
      setFormData({
        percent_off: 0,
        description: "",
      });
    } catch (error) {
      // Error is already handled by the mutation's onError callback
      // Modal stays open so user can see the error and try again
      console.error("Failed to apply coupon:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-gray-700 mb-4">
            {title ? "Edit Offer" : "Add Offer"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="percent_off">Discount Percentage *</Label>
            <Input
              id="percent_off"
              type="number"
              min="0"
              max="100"
              placeholder="0"
              value={formData.percent_off}
              onChange={(e) => handleInputChange("percent_off", parseInt(e.target.value) || 0)}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Coupon description"
              rows={3}
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FFC823] hover:bg-[#e6b51f] text-black text-lg font-semibold rounded-md py-6"
            disabled={applyGlobalCoupon.isPending}
          >
            {applyGlobalCoupon.isPending ? "Applying..." : "Apply Coupon"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
