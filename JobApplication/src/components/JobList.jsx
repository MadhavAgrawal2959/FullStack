import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs, onEdit, onDelete }) {
  if (jobs.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-8 text-lg">
        No job applications found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onEdit={() => onEdit(job)}
          onDelete={() => onDelete(job.id)}
        />
      ))}
    </div>
  );
}

export default JobList;
