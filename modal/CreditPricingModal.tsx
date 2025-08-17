"use client";

import { Upload } from "lucide-react";
import Modal from "./Modal";

export default function CreditPricingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-6 rounded-md shadow-md w-full min-w-md text-black">
        <form className="space-y-4 mt-6">
          {/* Headline */}
          <div>
            <label className="block  mb-1">Purpose</label>
            <input
              type="text"
              placeholder="Type..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
            />
          </div>

          {/* Sub Headline */}
          <div>
            <label className="block  mb-1">Credit</label>
            <input
              type="text"
              placeholder="Type..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
            />
          </div>
          <div>
            <label className="block  mb-1">Purpose</label>
            <input
              type="text"
              placeholder="Type..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
            />
          </div>

          {/* Sub Headline */}
          <div>
            <label className="block  mb-1">Credit</label>
            <input
              type="text"
              placeholder="Type..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
            />
          </div>

          {/* Publish Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400  text-black  py-3 rounded-md cursor-pointer"
          >
            Publish
          </button>
        </form>
      </div>
    </Modal>
  );
}
