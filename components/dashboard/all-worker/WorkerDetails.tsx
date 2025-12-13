'use client'
import { BadgeCheck, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button"; // If you're using ShadCN
import Image from "next/image";
import Link from "next/link";
import { useGetUserDetail } from "@/lib/query/hooks/dashboard/users";
import { getImageUrl } from "@/utils/image";


export default function WorkerDetails({ id }: { id: string }) {

  const { data: worker, isLoading, error } = useGetUserDetail(id);

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <Link href="/all-worker">
        <div className="flex items-center gap-2 font-medium">
          <ArrowLeft className="w-4 h-4" />
          View Details
        </div>
      </Link>

      {/* Card */}
      <div className="bg-white p-6 shadow rounded-md">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <Image
            src={getImageUrl(worker?.profile)}
            alt="Worker Avatar"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />

          {/* Info */}
          <div className=" space-y-2">
            <div>
              <p>
                <span className="font-semibold">Name</span> : {worker?.name}
              </p>
              <p>
                <span className="font-semibold">Email</span> : {worker?.email}
              </p>
              <p>
                <span className="font-semibold">Contact</span> :{" "}
                {worker?.phone}
              </p>
              <p>
                <span className="font-semibold">Location</span> :{" "}
                {worker?.address}
              </p>
              <p>
                <span className="font-semibold">Role Sec.</span> : {worker?.role}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
            <BadgeCheck className="w-4 h-4" /> Verified
          </div>
          <div>
            <h2 className="text-xl font-semibold capitalize">{worker?.name}</h2>
            <p className="text-sm text-gray-600">
              {/* {worker?.title} / {worker?.experience} Of Experience */}
            </p>
            {/* <p className="text-lg font-semibold text-gray-800">{worker?.}</p> */}
          </div>
        </div>

        {/* About */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">About</h3>
          <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
            {worker?.about}
          </p>
        </div>

        {/* Core Skills */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">Core Skill:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            {worker?.coreSkills && worker?.coreSkills.map((skill, idx) => (
              <li key={idx} className="flex items-start gap-1">
                <CheckCircle className="text-green-500 w-4 h-4 mt-1" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">
            Portfolio / Work Experience
          </h3>
          {/* <ul className="space-y-3 text-sm text-gray-700">
            {worker?. && worker?.portfolio.map((item, idx) => (
              <li key={idx}>
                <p className="font-medium">{item.title}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul> */}
        </div>

        {/* Action Buttons */}
      </div>
      <section className="flex justify-between items-center bg-white shadow-md rouned-md p-2">
        <p>
          If you feel the user is fake in any way, you can block or delete the
          user from here.
        </p>
        <div className=" flex justify-end gap-3 ">
          <Button
            variant="outline"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Block
          </Button>
          {/* <Button variant="destructive">Delete</Button> */}
        </div>
      </section>
    </div>
  );
}
