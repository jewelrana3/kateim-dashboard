// "use client";
// import Button from "@/components/settings/Button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { useUpdateUserStatus } from "@/lib/query/hooks";
// import { useDeleteUser } from "@/lib/query/hooks/dashboard/users";

// import { IUser } from "@/types/users";
// import { getImageUrl } from "@/utils/image";
// import Image from "next/image";
// import React from "react";
// import Swal from "sweetalert2";

// export default function EmployeDetails({
//   user,
//   trigger,
// }: {
//   user: IUser;
//   trigger: React.ReactNode;
// }) {
//   // Update user status mutation
//   const { mutate: updateStatus, isPending: isUpdating } =
//     useUpdateUserStatus("");
//   const { mutate: deleteUser } = useDeleteUser();

//   const handleStatusToggle = (employerId: string) => {
//     updateStatus(employerId);
//   };
//   const handleDelete = (id: string) => {
//     console.log("click", id);

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You want to be delete this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deleteUser(
//           { _id: id },
//           {
//             onSuccess: () => {
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success",
//               });
//             },
//           },
//         );
//       }
//     });
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>{trigger}</DialogTrigger>
//       <DialogContent className="sm:max-w-[900px]">
//         <div className="">
//           {/* Header */}
//           {/* <div className="flex items-center gap-2 mb-4 text-black">
//             <ArrowLeft className="w-5 h-5" />
//             <h2 className="text-lg font-semibold">View Details</h2>
//           </div> */}

//           {/* Card */}
//           <div className="bg-white p-5 flex flex-col md:flex-row gap-6 items-start">
//             {/* Avatar */}
//             <Image
//               src={getImageUrl(user.profile!)}
//               alt={user.name! || ""}
//               width={200}
//               height={200}
//               className=" rounded-full object-cover"
//             />

//             {/* Info */}
//             <div className="flex-1 space-y-2 text-gray-800">
//               <p>
//                 <span className="font-semibold">Name</span> : {user.name}
//               </p>
//               <p>
//                 <span className="font-semibold">Email</span> : {user.email}
//               </p>
//               <p>
//                 <span className="font-semibold">Contact</span> : {user.phone}
//               </p>
//               <p>
//                 <span className="font-semibold">Location</span> : {user.address}
//               </p>
//               <p>
//                 <span className="font-semibold">Role Sec.</span> : {user.role}
//               </p>

//               {/* Warning note */}

//               {/* Action buttons */}
//             </div>
//           </div>

//           <div className="mt-2 flex justify-between gap-3">
//             <p className="text-sm text-gray-500 w-[50%] mt-2 capitalize">
//               If you feel the user is fake in any way, you can block or delete
//               the user from here.
//             </p>
//             <div className="flex">
//               <Button
//                 onClick={() => !isUpdating && handleStatusToggle(user?._id)}
//                 className={`bg-blue-600 hover:bg-blue-700 text-white mr-4`}
//               >
//                 {user?.status === "active" ? "Block" : "Active"}
//               </Button>
//               <Button
//                 onClick={() => handleDelete(user?._id)}
//                 className="bg-red-600 hover:bg-red-700 text-white"
//               >
//                 Delete
//               </Button>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";
import Button from "@/components/settings/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUpdateUserStatus } from "@/lib/query/hooks";
import { useDeleteUser } from "@/lib/query/hooks/dashboard/users";
import { IUser } from "@/types/users";
import { getImageUrl } from "@/utils/image";
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function EmployeDetails({
  user,
  trigger,
}: {
  user: IUser;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false); // ← control dialog manually

  const { mutate: updateStatus, isPending: isUpdating } =
    useUpdateUserStatus("");
  const { mutate: deleteUser } = useDeleteUser();

  const handleStatusToggle = (employerId: string) => {
    updateStatus(employerId);
  };

  const handleDelete = (id: string) => {
    setOpen(false); // ← close Dialog FIRST

    // Small timeout lets Radix fully unmount before SweetAlert opens
    setTimeout(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteUser(
            { _id: id },
            {
              onSuccess: () => {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              },
            },
          );
        }
      });
    }, 200); // ← wait for dialog close animation
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {" "}
      {/* ← controlled */}
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <div className="bg-white p-5 flex flex-col md:flex-row gap-6 items-start">
          {" "}
          {/* Avatar */}
          <Image
            src={getImageUrl(user.profile!)}
            alt={user.name! || ""}
            width={200}
            height={200}
            className=" rounded-full object-cover"
          />
          {/* Info */}
          <div className="flex-1 space-y-2 text-gray-800">
            <p>
              <span className="font-semibold">Name</span> : {user.name}
            </p>
            <p>
              <span className="font-semibold">Email</span> : {user.email}
            </p>
            <p>
              <span className="font-semibold">Contact</span> : {user.phone}
            </p>
            <p>
              <span className="font-semibold">Location</span> : {user.address}
            </p>
            <p>
              <span className="font-semibold">Role Sec.</span> : {user.role}
            </p>

            {/* Warning note */}

            {/* Action buttons */}
          </div>
        </div>
        {/* ... rest unchanged ... */}
        <div className="mt-2 flex justify-between gap-3">
          <p className="text-sm text-gray-500 w-[50%] mt-2 capitalize">
            If you feel the user is fake in any way, you can block or delete the
            user from here.
          </p>
          <div className="flex">
            <Button
              onClick={() => !isUpdating && handleStatusToggle(user?._id)}
              className="bg-blue-600 hover:bg-blue-700 text-white mr-4"
            >
              {user?.status === "active" ? "Block" : "Active"}
            </Button>
            <Button
              onClick={() => handleDelete(user?._id)}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
