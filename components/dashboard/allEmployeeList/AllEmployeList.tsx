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
import { Eye, Lock, LockOpen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserDetails from "@/modal/EmployeDetails";
import Image from "next/image";
import { useState } from "react";
import { useGetAllUser, useUpdateUserStatus } from "@/lib/query/hooks";
import { USER_ROLES, USER_STATUS } from "@/types/users";
import { getImageUrl } from "@/utils/image";
import Pagination from "@/components/ui/pagination";


export default function AllEmployeList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const limit = 10;

  // Fetch employers with pagination and status filter
  const { data: response, isLoading } = useGetAllUser({
    role: USER_ROLES.EMPLOYER,
    page: currentPage,
    limit,
    ...(statusFilter !== "all" && { status: statusFilter }),
  });

  const employers = response?.data || [];
  const meta = response?.meta;


  // Update user status mutation
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateUserStatus("");


  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleStatusToggle = (employerId: string) => {
    updateStatus(employerId);
  };

  if (isLoading) {
    return (
      <div className="bg-[#f9f9f9] p-6 rounded-lg">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f9f9f9] p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Employer</h2>
          <div>
            <Select value={statusFilter} onValueChange={handleStatusFilterChange}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value={USER_STATUS.RESTRICTED}>Block</SelectItem>
                  <SelectItem value={USER_STATUS.ACTIVE}>Active</SelectItem>
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
            {employers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  No employers found
                </TableCell>
              </TableRow>
            ) : (
              employers.map((employer, index) => (
                <TableRow key={employer._id}>
                  <TableCell className="font-medium">
                    {(currentPage - 1) * limit + index + 1}
                  </TableCell>

                  <TableCell className="flex items-center gap-2">
                    <Image
                      src={getImageUrl(employer.profile)}
                      alt="name"
                      width={30}
                      height={30}
                      className=" rounded-full object-cover"
                    />
                    {employer.name}
                  </TableCell>

                  <TableCell>{employer.email}</TableCell>
                  <TableCell>{employer.phone}</TableCell>
                  <TableCell>{employer.address as string}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${employer.status === USER_STATUS.ACTIVE
                        ? "bg-green-500 "
                        : "bg-[#E02121]"
                        } w-20 text-white`}
                    >
                      {employer.status === USER_STATUS.ACTIVE ? "Active" : "Block"}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-2 ml-2">
                    <UserDetails
                      user={employer}
                      trigger={
                        <span className="bg-blue-600 p-1 rounded cursor-pointer">
                          <Eye className=" text-white" />
                        </span>
                      }
                    />

                    <span
                      className={`bg-[#E6E6E6] p-1 rounded ${isUpdating ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                        }`}
                      onClick={() => !isUpdating && handleStatusToggle(employer._id)}
                    >
                      {employer.status === USER_STATUS.ACTIVE ? (
                        <LockOpen size={24} className=" text-green-600" />
                      ) : (
                        <Lock size={24} className=" text-red-600" />
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {meta && meta.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={meta.totalPages}
            onPageChange={setCurrentPage}
            total={meta.total}
            limit={limit}
          />
        )}
      </div>
    </>
  );
}
