import React from "react";

const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">
          {mode === "edit" ? "Edit Client" : "Add New Client"}
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Client Name"
            className="input input-bordered w-full mb-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-3"
          />
          <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered w-full mb-3"
          />
          <input
            type="number"
            placeholder="Rate"
            className="input input-bordered w-full mb-3"
          />
          <select
            className="select select-bordered w-full mb-3"
            defaultValue=""
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
