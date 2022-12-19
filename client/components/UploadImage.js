import React from 'react';
import { useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../backend/firebase/firebase';
const UploadImage = ({ setUrl }) => {
  //State properties
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const imgExtension = ['image/jpeg', 'image/jpg', 'image/png', 'image/jfif'];
  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && imgExtension.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file');
    }
  };

  //for image file
  const selectedFile = (e) => {
    e.preventDefault();
    if (!file) return;
    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
        });
      }
    );
  };
  return (
    <div>
      <div>
       
        <h1 className="text-red-600 mb-1">{error}</h1>
        <input
          id="image"
          name="image"
          type="file"
          className=" mb-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
          onChange={handleChange}
        />
        {file && (
          <button
            type="submit"
            className="group relative flex w-48 justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            onClick={selectedFile}
          >
            {' '}
            Upload Image
          </button>
        )}
        {file && <h2>Uploading done {progress}%</h2>}
      </div>
    </div>
  );
};

export default UploadImage;
