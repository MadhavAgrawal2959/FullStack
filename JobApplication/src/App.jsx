import React, { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: uuidv4() }]);
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setEditingJob(null);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Job Application Tracker</h1>
      <JobForm
        onSubmit={editingJob ? updateJob : addJob}
        initialData={editingJob}
      />
      <JobList jobs={jobs} onEdit={setEditingJob} onDelete={deleteJob} />
    </div>
  );
}

export default App;
