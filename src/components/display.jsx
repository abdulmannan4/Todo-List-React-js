import React from 'react';
import { MdDelete } from "react-icons/md";

const Display = ({ textvalue, setDisplayText }) => {
  const handleDelete = (index) => {
    console.log('Item to delete:', index); // Log the index of the item to delete
    // Filter out the item based on the index
    const filtered = textvalue.filter((_current, id) => id !== index);
    // Update the parent component state with the filtered array
    setDisplayText(filtered);
  };

  return (
    <div className="relative bg-black h-screen">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <table className="border border-2 border-zinc-100">
          <thead>
            <tr>
              <th className='p-8 text-lg'>Index</th>
              <th className='p-8 text-lg'>Title</th>
              <th className='p-8 text-lg'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {textvalue.map((item, index) => (
              <tr key={index}>
                <td className='p-8 text-lg'>{index + 1}</td> {/* Display 1-based index */}
                <td className='p-8 text-lg'>{item}</td>
                <td className='p-8'>
                  <button onClick={() => handleDelete(index)} className='bg-red-900'>
                    <MdDelete size={30} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
