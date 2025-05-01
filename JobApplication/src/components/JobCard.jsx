import React from "react";

function JobCard({ job, onEdit, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h2 className="text-xl font-semibold">
        {job.jobTitle} at {job.companyName}
      </h2>
      <p className="text-gray-600">Applied on: {job.applicationDate}</p>
      <p className="text-gray-700">Status: {job.status}</p>
      {job.jobLink && (
        <a
          href={job.jobLink}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Job Link
        </a>
      )}
      {job.notes && (
        <p className="mt-2 text-sm text-gray-500">Notes: {job.notes}</p>
      )}
      <div className="mt-3 flex gap-2">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
