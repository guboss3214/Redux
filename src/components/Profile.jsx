import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { userName, role, country, image } = useSelector((state) => state);
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="font-semibold text-3xl text-gray-700 mb-4">
        Your Profile
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-semibold text-indigo-600 mb-4">
          Hello, {userName}
        </h1>
        <div className="flex justify-center mb-4">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="w-64 h-64 object-cover rounded-full mb-4"
            />
          ) : (
            <Skeleton variant="circular" width={200} height={200} />
          )}
        </div>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-medium">
            Role: <span className="text-red-600">{role}</span>
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-medium">
            Location: <span className="text-red-600">{country}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
