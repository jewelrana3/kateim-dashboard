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
import {  Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/navigation";
import { DialogDemo } from "./Message";
import Swal from "sweetalert2";
import { useDeleteSupportMessage, useGetSupportMessage } from "@/lib/query/hooks/dashboard/public";
import { IContact } from "@/types/others";


export default function Support() {


  const {data: supportMessages} = useGetSupportMessage();

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

  return (
    <>
      <div className="bg-[#f9f9f9] p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Support</h2>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select item" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="block">Worker</SelectItem>
                  <SelectItem value="Solved">Employer</SelectItem>
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
              {/* <TableHead>Location</TableHead> */}
              <TableHead>Status</TableHead>
              <TableHead className="pl-8">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supportMessages && supportMessages.length > 0 && supportMessages.map((message: IContact, index:number) => (
              <TableRow key={message._id}>
                <TableCell className="font-medium">0{index + 1}</TableCell>

                <TableCell className="flex items-center gap-2">
                  {message.name}
                </TableCell>

                <TableCell>{message.email}</TableCell>
                <TableCell>{message.phone}</TableCell>
                {/* <TableCell>{message.location}</TableCell> */}
                <TableCell>
                  <Badge className={message.isSolved ? "bg-green-500 text-white" : "bg-red-500 text-white"}>
                    {message.isSolved ? "Solved" : "Unresolved"}
                  </Badge>
                </TableCell>
                <TableCell className="flex gap-2">
                  {/* <Message
                    trigger={
                      <span className="bg-blue-600 p-1 rounded cursor-pointer">
                        <Eye className=" text-white" />
                      </span>
                    }
                  /> */}
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
