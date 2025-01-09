import { useState } from 'react';
import { useUser } from '../context/context';
import toast from 'react-hot-toast';

const Signin = () => {
  const [inputName, setInputName] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputCountry, setInputCountry] = useState('');
  const { setUserName, setSignedIn, setRole, setCountry, setImage } = useUser();

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setInputRole(e.target.value);
  };

  const handleCountryChange = (e) => {
    setInputCountry(e.target.value);
  };

  const handleSignedIn = () => {
    if (inputName === '' || inputRole === '' || inputCountry === '')
      return toast.error('Enter all the fields');
    setUserName(inputName);
    setRole(inputRole);
    setCountry(inputCountry);
    setSignedIn(true);
    toast.success('Successfully sign in!');
  };

  function onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      const img = document.getElementById('uploadedImage');
      img.src = event.target.result;
      img.classList.remove('hidden');
      document.getElementById('fileContent').classList.add('hidden');
    };

    reader.readAsDataURL(file);
    setImage(event.target.files[0]);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="font-semibold text-3xl text-gray-700 mb-4">Sign In</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="mb-2 text-xl text-gray-700">Upload Profile Image:</h2>
        <div
          id="fileContent"
          className="flex items-center justify-center w-full mb-4"
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">not necessarily</span>
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={onChange}
            />
          </label>
        </div>
        <div className="flex justify-center">
          <img
            id="uploadedImage"
            alt="Uploaded"
            className="w-64 h-64 object-cover rounded-full mb-4 hidden"
          />
        </div>
        <input
          type="text"
          placeholder="Enter your name*"
          value={inputName}
          onChange={handleNameChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />
        <input
          type="text"
          placeholder="Enter your role: Front end or Back end*"
          value={inputRole}
          onChange={handleRoleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />
        <div className="block w-full mb-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-600 w-full"
          >
            Your location
          </label>
          <select
            id="countries"
            value={inputCountry}
            onChange={handleCountryChange}
            className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
          >
            <option selected>Choose a country*</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="UA">Ukraine</option>
          </select>
        </div>
        <button
          onClick={handleSignedIn}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signin;
