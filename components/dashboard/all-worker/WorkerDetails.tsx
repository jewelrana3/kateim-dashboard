'use client'
import { BadgeCheck, ArrowLeft, CheckCircle, Briefcase, MapPin, Phone, Mail, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useGetUserDetail, useUpdateUserStatus } from "@/lib/query/hooks/dashboard/users";
import { getImageUrl } from "@/utils/image";
import { USER_STATUS } from "@/types/users";
import { Badge } from "@/components/ui/badge";


export default function WorkerDetails({ id }: { id: string }) {

  const { data: worker, isLoading, error } = useGetUserDetail(id);
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateUserStatus("");

  const handleBlockToggle = () => {
    if (worker?._id) {
      updateStatus(worker._id);
    }
  };

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error || !worker) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
          Failed to load worker details. Please try again.
        </div>
      </div>
    );
  }

  const isBlocked = worker.status === USER_STATUS.RESTRICTED;

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <Link href="/all-worker">
        <div className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to All Workers
        </div>
      </Link>

      {/* Main Card */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 pb-6 border-b">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Image
              src={getImageUrl(worker?.profile)}
              alt={worker?.name || "Worker Avatar"}
              width={150}
              height={150}
              className="rounded-full object-cover border-4 border-blue-100"
            />
          </div>

          {/* Basic Info */}
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-gray-800 capitalize">{worker?.name}</h1>
                  {worker?.verified && (
                    <div className="flex items-center gap-1 text-green-600 font-medium text-sm bg-green-50 px-2 py-1 rounded-full">
                      <BadgeCheck className="w-4 h-4" /> Verified
                    </div>
                  )}
                </div>
                <p className="text-lg text-gray-600 font-medium">{worker?.category} - {worker?.subCategory}</p>
                {worker?.yearsOfExperience && (
                  <p className="text-sm text-gray-500">{worker.yearsOfExperience} years of experience</p>
                )}
              </div>
              <Badge className={`${isBlocked ? "bg-red-500" : "bg-green-500"} text-white`}>
                {isBlocked ? "Blocked" : "Active"}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{worker?.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{worker?.phone || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{worker?.address || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <span className="text-sm">
                  {worker?.salary ? `${worker.salary} / ${worker.salaryType}` : "N/A"}
                </span>
              </div>
            </div>

            {/* Availability */}
            {worker?.availability && worker.availability.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-700 mb-1">Availability:</p>
                <div className="flex flex-wrap gap-2">
                  {worker.availability.map((avail, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {avail}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* About Section */}
        {worker?.about && (
          <div className="mt-6 pb-6 border-b">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">About</h3>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {worker.about}
            </p>
          </div>
        )}

        {/* Work Overview */}
        {worker?.workOverview && (
          <div className="mt-6 pb-6 border-b">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">Work Overview</h3>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {worker.workOverview}
            </p>
          </div>
        )}

        {/* Core Skills */}
        {worker?.coreSkills && worker.coreSkills.length > 0 && (
          <div className="mt-6 pb-6 border-b">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">Core Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {worker.coreSkills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Work Experience */}
        {worker?.workExperiences && worker.workExperiences.length > 0 && (
          <div className="mt-6 pb-6 border-b">
            <h3 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Work Experience
            </h3>
            <div className="space-y-4">
              {worker.workExperiences.map((exp, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                  {exp.company && (
                    <p className="text-sm text-gray-600 mt-1">{exp.company}</p>
                  )}
                  {(exp.startDate || exp.endDate) && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.startDate && new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
                    </p>
                  )}
                  <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rating */}
        {worker?.rating !== undefined && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Rating</h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-500">★ {worker.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-600">({worker.totalReview || 0} reviews)</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Section */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-md rounded-md p-4 gap-4">
        <p className="text-sm text-gray-600">
          If you feel the user is fake in any way, you can block or unblock the user from here.
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className={`${isBlocked
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            onClick={handleBlockToggle}
            disabled={isUpdating}
          >
            {isUpdating ? "Processing..." : isBlocked ? "Unblock" : "Block"}
          </Button>
        </div>
      </section>
    </div>
  );
}
