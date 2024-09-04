import { RootState } from "@/Store/store";
import React from "react";
import { useSelector } from "react-redux";


interface UserInfoPageProps {
  id: string;
}

const UserInfoPage: React.FC<UserInfoPageProps> = ({ id }) => {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Information for User ID: {id}</h1>
      
      {/* Display user information */}
      <p><strong>Name:</strong> {userInfo.name}</p>
      <p><strong>Weight:</strong> {userInfo.weight}</p>
      <p><strong>Height:</strong> {userInfo.height}</p>
      <p><strong>Age:</strong> {userInfo.age}</p>
      <p><strong>Allergy History:</strong> {userInfo.allergyHistory}</p>
      <p><strong>Purpose:</strong> {userInfo.purpose}</p>
      <p><strong>Description:</strong> {userInfo.description}</p>
      
      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Orders
      </button>
    </div>
  );
};

export default UserInfoPage;
