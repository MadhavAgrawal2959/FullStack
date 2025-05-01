import React, { useState, useEffect } from "react";

const initialState = {
  companyName: "",
  jobTitle: "",
  applicationDate: "",
  status: "",
  jobLink: "",
  notes: "",
};

function JobForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(initialState);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 space-y-5 bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        {initialData ? "Edit Job" : "Add New Job"}
      </h2>
      <input
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="date"
        name="applicationDate"
        value={formData.applicationDate}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="status"
        placeholder="Status (e.g. Applied, Interview)"
        value={formData.status}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="jobLink"
        placeholder="Job Link"
        value={formData.jobLink}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
        rows={4}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-200"
      >
        {initialData ? "Update Job" : "Add Job"}
      </button>
    </form>
  );
}

export default JobForm;
