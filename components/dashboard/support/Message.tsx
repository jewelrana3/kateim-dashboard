import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { IContact } from "@/types/others";
import { useUpdateSupportMessage } from "@/lib/query/hooks/dashboard/public";

export function DialogDemo({ message }: { message: IContact }) {
  const [reply, setReply] = useState("");
  const { mutate: sendReplyMutation, isPending } = useUpdateSupportMessage(
    message._id!
  );


  const handleSendReply = () => {
    if (!reply.trim()) return;
    sendReplyMutation({ feedback: reply });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="bg-blue-600 p-1 rounded cursor-pointer">
          <Eye className="text-white" />
        </span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg w-full bg-gray-100 rounded-lg p-6 shadow-lg">
        <DialogTitle className="text-lg font-semibold mb-4">
          Support Request Details
        </DialogTitle>

        <DialogDescription>
          {/* Message Details */}
          <div className="grid grid-cols-2 gap-x-6 mb-4">
            <div className="flex items-center gap-5">
              <p className="text-sm font-medium text-gray-700">From :</p>
              <p className="text-gray-900">{message.name}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-sm font-medium text-gray-700">Date :</p>
              <p className="text-gray-900">
                {message?.createdAt
                  ? new Date(message.createdAt).toLocaleDateString()
                  : "—"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 mb-4">
            <p className="text-sm font-medium text-gray-700">Status :</p>
            <p
              className={
                message.isSolved
                  ? "font-semibold text-green-600"
                  : "font-semibold text-red-600"
              }
            >
              {message.isSolved ? "Solved" : "Unresolved"}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Message :</p>
            <textarea
              readOnly
              value={message.message}
              className="w-full h-20 p-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded resize-none"
            />
          </div>

          {/* Reply Section */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Your Reply :</p>
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type Your Response Here."
              className="w-full h-20 p-2 mt-1 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded font-semibold cursor-pointer">
                Cancel
              </button>
            </DialogClose>
            <button
              onClick={handleSendReply}
              disabled={isPending}
              className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded cursor-pointer"
            >
              {isPending ? "Sending..." : "Send Reply"}
            </button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
