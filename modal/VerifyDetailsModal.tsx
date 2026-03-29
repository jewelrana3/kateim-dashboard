import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IUser } from "@/types/users";
import { getImageUrl } from "@/utils/image";
import { useToggleUserVerification } from "@/lib/query/hooks/dashboard/users";

export default function VerifyDetailsModal({
  trigger,
  user,
}: {
  trigger: React.ReactNode;
  user: IUser;
}) {
  const { mutate: toggleVerification } = useToggleUserVerification(user?._id);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className="bg-white my-9">
          <div className="flex  mb-5 gap-6 ">
            {/* Profile Picture */}
            <div className="">
              <Image
                src={getImageUrl(user.profile)} // Replace with actual profile image path
                alt="Profile"
                width={10}
                height={10}
                className="w-40 h-40 rounded-full object-cover border"
                sizes="100vh"
              />
            </div>

            {/* Info Text */}
            <div className="space-y-2 text-sm text-gray-800">
              <p>
                <strong>Name</strong> : {user.name}
              </p>
              <p>
                <strong>Email</strong> : {user.email}
              </p>
              <p>
                <strong>Contact</strong> : {user.phone}
              </p>
              <p>
                <strong>Location</strong> : {user.address}
              </p>
              <p>
                <strong>Role Sec.</strong> : {user.role}
              </p>
            </div>
          </div>

          <h1 className=" text-[#0057DC]">
            {user.role !== "employer"
              ? "British Nationals"
              : "Non British Nationals"}
          </h1>
          <p>NID</p>

          {/* ID Image Section */}
          <div className="mt-6 flex justify-center gap-3.5">
            <Image
              src={getImageUrl(user.nidFront)} // Replace with actual ID image path
              alt="ID Front"
              width={270}
              height={200}
              className="rounded-md shadow"
            />
            <Image
              src={getImageUrl(user.nidBack)} // Replace with actual ID image path
              alt="ID Back"
              width={270}
              height={200}
              className="rounded-md shadow"
            />
          </div>

          {user?.role !== "employer" ? (
            <>
              {user?.isBritish === true ? (
                <div>
                  <h1 className="text-lg font-semibold text-[#333333] mt-4">
                    National Insurance Number
                  </h1>
                  <p className="text-gray-700">{user?.insuranceNumber}</p>
                </div>
              ) : (
                <div className="mt-4">
                  <div className="grid grid-cols-2">
                    <h1>Code(right to work)</h1>
                    <h1>{user?.dateOfBirth?.slice(0, 10) || "N/A"}</h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1 className="text-[#545454]">Share Code</h1>
                    <h1 className="text-[#545454]">
                      {user?.shareCode || "N/A"}
                    </h1>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div>
              <div className="mt-4">
                <div className="grid grid-cols-[200px_20px_auto]">
                  <h1>Employer Type</h1> <span>:</span>{" "}
                  <h1 className="text-[#545454]">{user?.employerType}</h1>
                </div>
                <div className="grid grid-cols-[200px_20px_auto]">
                  <h1 className="">Company Number</h1>
                  <span>:</span>
                  <h1 className="text-[#545454]">
                    {user?.companyNumber || "N/A"}
                  </h1>
                </div>
                <div className="grid grid-cols-[200px_20px_auto]">
                  <h1 className="">Address</h1>
                  <span>:</span>
                  <h1 className="text-[#545454]">{user?.address || "N/A"}</h1>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => toggleVerification(user._id)}
              className={`bg-white border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-50 `}
            >
              Decline
            </button>
            <button
              onClick={() => toggleVerification(user._id)}
              className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500"
            >
              Approve
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
