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
  console.log("Toggle Uerification working")
  console.log({modalUser: user});

  return (
    <Dialog >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-full max-h-[700px] h-full overflow-y-auto">
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
                <strong>ID</strong> : {user._id}
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
                <strong>Role Sec.</strong> : <span className="capitalize">{user.role}</span>
              </p>
            </div>
          </div>

          {/* NID Image Section */}
          <p>NID (front and back)</p>
          <div className="mt-6 flex justify-center gap-3.5">
            <Image
              src={getImageUrl(user.nidFront)} // Replace with actual ID image path
              alt="ID Front"
              width={1000}
              height={900}
              className="rounded-md shadow w-[270px] h-[160px] object-contain"
            />
            <Image
              src={getImageUrl(user.nidBack)} // Replace with actual ID image path
              alt="ID Back"
              width={1000}
              height={900}
              className="rounded-md shadow w-[270px] h-[160px] object-contain"
            />
          </div>

          {user?.role == "employer" && (
            <div>
              <div className="mt-4">
                <div className="grid grid-cols-[200px_20px_auto]">
                  <h1>Employer Type</h1> <span>:</span>{" "}
                  <h1 className="text-[#545454]">{user?.employerType}</h1>
                </div>
                <div className="grid grid-cols-[200px_20px_auto]">
                  <h1>Business Name</h1> <span>:</span>{" "}
                  <h1 className="text-[#545454]">{user?.businessName}</h1>
                </div>
                <div className="grid grid-cols-[200px_20px_auto]">
                  <h1 className="">Company Number</h1>
                  <span>:</span>
                  <h1 className="text-[#545454]">
                    {user?.companyNumber || "N/A"}
                  </h1>
                </div>
                <div className="grid grid-cols-[200px_20px_auto]">
                  <h1 className="">Reg. Address</h1>
                  <span>:</span>
                  <h1 className="text-[#545454]">{user?.registeredAddress || "N/A"}</h1>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            {user.isAccountVerified ? <button
              onClick={() => toggleVerification(user._id)}
              className={`bg-white border border-red-500 text-red-500 px-5 py-2 rounded-md hover:bg-red-50 `}
            >
              Decline
            </button> :
              <button
                onClick={() => toggleVerification(user._id)}
                className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500"
              >
                Approve
              </button>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
