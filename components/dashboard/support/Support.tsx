"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DialogDemo } from "./Message";
import Swal from "sweetalert2";
import {
  useDeleteSupportMessage,
  useGetSupportMessage,
} from "@/lib/query/hooks/dashboard/public";
import { IContact } from "@/types/others";
import { useState } from "react";
import { USER_ROLES } from "@/types/users";

export default function Support() {
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 10;

  const { data: supportMessages } = useGetSupportMessage({
    role: roleFilter === "all" ? undefined : roleFilter,
    page: currentPage,
    limit,
  });

  console.log("supportMessages", supportMessages);

  const { mutate: deleteMessageMutation } = useDeleteSupportMessage();

  const handleClick = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMessageMutation(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleStatusFilterChange = (value: string) => {
    setRoleFilter(value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <>
      <div className="bg-[#f9f9f9] p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Support</h2>
          {/* <div>
            <Select value={roleFilter} onValueChange={handleStatusFilterChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select item" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value={USER_ROLES.WORKER}>Worker</SelectItem>
                  <SelectItem value={USER_ROLES.EMPLOYER}>Employer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-600">
              <TableHead>Serial No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact</TableHead>
              {/* <TableHead>Location</TableHead> */}
              <TableHead>Status</TableHead>
              <TableHead className="pl-8">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supportMessages &&
              supportMessages?.length > 0 &&
              supportMessages?.map((message: IContact, index: number) => (
                <TableRow key={message._id}>
                  <TableCell className="font-medium">0{index + 1}</TableCell>

                  <TableCell className="flex items-center gap-2">
                    {message.name}
                  </TableCell>

                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.phone}</TableCell>
                  {/* <TableCell>{message.location}</TableCell> */}
                  <TableCell>
                    <Badge
                      className={
                        message.isSolved
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }
                    >
                      {message.isSolved ? "Solved" : "Unresolved"}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <DialogDemo message={message} />
                    <span
                      className="bg-red-600 p-1 rounded cursor-pointer"
                      onClick={() => handleClick(message._id!)}
                    >
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
