// import * as React from "react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "@radix-ui/react-dialog";
// import { Eye } from "lucide-react";

// export default function Message({ trigger }: { trigger: React.ReactNode }) {
//   return (
//     <>
//       {/* Button to open dialog */}
//       <Dialog>
//         <DialogTrigger asChild>{trigger}</DialogTrigger>

//         <DialogContent className="sm:max-w-lg w-full bg-gray-100 rounded-lg p-6 shadow-lg">
//           <DialogTitle className="text-lg font-semibold mb-4">
//             Support Request Details
//           </DialogTitle>
//           <DialogDescription>
//             <div className="grid grid-cols-2 gap-x-6 mb-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-700">From :</p>
//                 <p className="mt-1 text-gray-900">Ebrahim</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Date :</p>
//                 <p className="mt-1 text-gray-900">2024-01-15</p>
//               </div>
//             </div>

//             <div className="mb-4">
//               <p className="text-sm font-medium text-gray-700">Status :</p>
//               <p className="mt-1 font-semibold text-red-600">Pending</p>
//             </div>

//             <div className="mb-4">
//               <p className="text-sm font-medium text-gray-700">Message :</p>
//               <textarea
//                 readOnly
//                 value="Im Having Issue With The Log In System.It Keeps Showing An Error."
//                 className="w-full h-20 p-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded resize-none"
//               />
//             </div>

//             <div className="mb-4">
//               <p className="text-sm font-medium text-gray-700">Your Reply :</p>
//               <textarea
//                 placeholder="Type Your Response Here."
//                 className="w-full h-20 p-2 mt-1 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             <div className="flex justify-end gap-3">
//               <DialogClose asChild>
//                 <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100 transition">
//                   Cancel
//                 </button>
//               </DialogClose>
//               <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">
//                 Send Reply
//               </button>
//             </div>
//           </DialogDescription>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="bg-blue-600 p-1 rounded cursor-pointer">
          <Eye className=" text-white" />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg w-full bg-gray-100 rounded-lg p-6 shadow-lg">
        <DialogTitle className="text-lg font-semibold mb-4">
          Support Request Details
        </DialogTitle>
        <DialogDescription>
          <div className="grid grid-cols-2 gap-x-6 mb-4">
            <div className="flex items-center gap-5">
              <p className="text-sm font-medium text-gray-700">From :</p>
              <p className=" text-gray-900">Ebrahim</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-sm font-medium text-gray-700">Date :</p>
              <p className=" text-gray-900">2024-01-15</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-sm font-medium text-gray-700">Status :</p>
            <p className="font-semibold text-red-600">Pending</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Message :</p>
            <textarea
              readOnly
              value="Im Having Issue With The Log In System.It Keeps Showing An Error."
              className="w-full h-20 p-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded resize-none"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Your Reply :</p>
            <textarea
              placeholder="Type Your Response Here."
              className="w-full h-20 p-2 mt-1 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded font-semibold  cursor-pointer">
                Cancel
              </button>
            </DialogClose>
            <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded  cursor-pointer">
              Send Reply
            </button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
