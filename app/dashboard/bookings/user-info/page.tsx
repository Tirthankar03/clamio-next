'use client'
import { DialogUploaderDemo } from "@/components/shared/uploader/DialogUploader";
import { RootState } from "@/Store/store";
import React from "react";
import { useSelector } from "react-redux";

interface UserInfoPageProps {
  id: string;
}

const UserInfoPage: React.FC<UserInfoPageProps> = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const userFilledInfo = userInfo.name && userInfo.weight && userInfo.height && userInfo.age;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Information</h2>

        <form className="w-full space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg border-gray-300 bg-gray-100"
                value={userInfo.name || ""}
                disabled
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Your Gender</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input type="radio" checked={userInfo.gender === "Male"} disabled className="mr-2" />
                <span className="text-gray-600">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" checked={userInfo.gender === "Female"} disabled className="mr-2" />
                <span className="text-gray-600">Female</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg border-gray-300 bg-gray-100"
              placeholder="dummyemail@example.com"
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Mobile Number</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg border-gray-300 bg-gray-100"
              placeholder="7967646364"
              disabled
            />
          </div>
        </form>
      </div>

      {/* User Status Section */}
      <div className="mt-6">
        {userFilledInfo ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-yellow-700">Status: Processing</h3>
            <p className="text-yellow-600">Your information is being processed.</p>
            <div className="mt-6 space-y-4">
              <p><strong className="text-gray-700">Name:</strong> {userInfo.name}</p>
              <p><strong className="text-gray-700">Weight:</strong> {userInfo.weight}</p>
              <p><strong className="text-gray-700">Height:</strong> {userInfo.height}</p>
              <p><strong className="text-gray-700">Age:</strong> {userInfo.age}</p>
              <p><strong className="text-gray-700">Allergy History:</strong> {userInfo.allergyHistory}</p>
              <p><strong className="text-gray-700">Purpose:</strong> {userInfo.purpose}</p>
              <p><strong className="text-gray-700">Description:</strong> {userInfo.description}</p>
            </div>
            <div className="mt-6">
              <DialogUploaderDemo />
            </div>
          </div>
        ) : (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-700">Status: Pending</h3>
            <p className="text-red-600">User did not fill info yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfoPage;
