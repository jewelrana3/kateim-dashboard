"use client";

import { Upload } from "lucide-react";
import Modal from "./Modal";

export default function ContactUsForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-6 rounded-md shadow-md w-full min-w-md text-black">
        <form className="space-y-4 mt-6">
          {/* Headline */}
          <div>
            <label className="block  mb-1">Headline</label>
            <input
              type="text"
              placeholder="Type..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
            />
          </div>

          {/* Sub Headline */}
          <div>
            <label className="block  mb-1">Sub Headline</label>
            <input
              type="text"
              placeholder="Type..."
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none "
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block  mb-1">Upload Image</label>
            <div className="w-full border border-gray-300 px-3 py-4 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-100">
              <Upload className="w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Publish Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400  text-black  py-3 rounded-md cursor-pointer"
          >
            Publish
          </button>
        </form>
      </div>
    </Modal>
  );
}
