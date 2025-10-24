import React, { useState } from "react";

const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState(true);

  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, job, rate, isActive: status });
    onClose();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">
          {mode === "edit" ? "Edit Client" : "Add New Client"}
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Client Name"
            className="input input-bordered w-full mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered w-full mb-3"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rate"
            className="input input-bordered w-full mb-3"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />

          {/* Status Dropdown */}
          <select
            className="select select-bordered w-full mb-3"
            value={status ? "true" : "false"}
            onChange={(e) => setStatus(e.target.value === "true")}
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="true">Active</option>
            <option value="false">Not Active</option>
          </select>

          <div className="modal-action">
            <button type="button" onClick={onClose} className="btn">
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
