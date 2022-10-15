import React from "react";

export default function Pagination({
  notesPerPage,
  totalNotes,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-2 mt-4'>
      <div>
        <p className='text-sm text-white'>
          Showing
          <span className='font-medium'>
            {" "}
            {currentPage * notesPerPage -6 }{" "}
          </span>
          to
          <span className='font-medium'> {currentPage * notesPerPage} </span>
          of
          <span className='font-medium'> {totalNotes} </span>
          results
        </p>
      </div>
      <nav className='block mt-4'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <button
                onClick={() => {
                  paginate(number);
                }}
                className={
                  currentPage === number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}