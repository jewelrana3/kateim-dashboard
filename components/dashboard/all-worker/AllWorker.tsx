"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Eye, Link, Lock, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import UserDetails from "@/modal/EmployeDetails";
import { useRouter } from "next/navigation";

const employers = [
  {
    id: 2,
    name: "Katiem",
    email: "Admin@instantlabour.Com",
    contact: "01333327633",
    location: "Dhaka Bangladesh",
    status: "Active",
    avatar: "/avatar.jpg", // Replace with your actual path
  },
  {
    id: 3,
    name: "Katiem",
    email: "Admin@instantlabour.Com",
    contact: "01333327633",
    location: "Dhaka Bangladesh",
    status: "Active",
    avatar: "/avatar.jpg", // Replace with your actual path
  },
  {
    id: 4,
    name: "Katiem",
    email: "Admin@instantlabour.Com",
    contact: "01333327633",
    location: "Dhaka Bangladesh",
    status: "Active",
    avatar: "/avatar.jpg", // Replace with your actual path
  },
  {
    id: 5,
    name: "Katiem",
    email: "Admin@instantlabour.Com",
    contact: "01333327633",
    location: "Dhaka Bangladesh",
    status: "Active",
    avatar: "/avatar.jpg", // Replace with your actual path
  },
  {
    id: 6,
    name: "Katiem",
    email: "Admin@instantlabour.Com",
    contact: "01333327633",
    location: "Dhaka Bangladesh",
    status: "Active",
    avatar: "/avatar.jpg", // Replace with your actual path
  },
  {
    id: 7,
    name: "Katiem",
    email: "Admin@instantlabour.Com",
    contact: "01333327633",
    location: "Dhaka Bangladesh",
    status: "Active",
    avatar: "/avatar.jpg", // Replace with your actual path
  },
];

export default function AllWorker() {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div className="bg-[#f9f9f9] p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Worker</h2>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select item" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="block">Block</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-600">
              <TableHead>Serial No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="pl-8">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employers.map((employer, index) => (
              <TableRow key={employer.id}>
                <TableCell className="font-medium">0{index + 1}</TableCell>

                <TableCell className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={employer.avatar} alt={employer.name} />
                    <AvatarFallback>{employer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {employer.name}
                </TableCell>

                <TableCell>{employer.email}</TableCell>
                <TableCell>{employer.contact}</TableCell>
                <TableCell>{employer.location}</TableCell>
                <TableCell>
                  <Badge className="bg-green-500 text-white">
                    {employer.status}
                  </Badge>
                </TableCell>
                <TableCell className="flex gap-2">
                  <span
                    className="bg-blue-600 p-1 rounded cursor-pointer"
                    onClick={() => router.push("/worker-details")}
                  >
                    <Eye className=" text-white" />
                  </span>

                  <span className="bg-[#E6E6E6] p-1 rounded cursor-pointer">
                    <Lock size={24} className=" text-red-600" />
                  </span>

                  <span className="bg-red-600 p-1 rounded cursor-pointer">
                    <Trash2 className=" text-white" />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
