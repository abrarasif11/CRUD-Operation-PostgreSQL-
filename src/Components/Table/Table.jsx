import React, { useState } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";
import axios from "axios";

const Table = ({ handleOpen, tableData, setTableData, searchTerm }) => {
  const [error, setError] = useState(null);

  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setTableData((prevData) =>
          prevData.filter((client) => client.id !== id)
        );
      } catch (err) {
        setError(err.message);
      }
    }
  };
  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}
      <div className="mt-10 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="hover">
            {filteredData.map((client) => (
              <tr key={client.id}>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>

                <td>
                  <button
                    className={`btn flex items-center justify-center gap-2 rounded-full w-24 ${
                      client.isActive
                        ? "btn-primary"
                        : "btn-outline btn-primary"
                    }`}
                  >
                    {client.isActive ? (
                      <>
                        Active <Check size={16} />
                      </>
                    ) : (
                      <>
                        Inactive <X size={16} />
                      </>
                    )}
                  </button>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpen("edit", client)}
                      className="btn btn-sm btn-outline btn-info flex items-center gap-1 rounded-full"
                    >
                      <Pencil size={16} />
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(client.id)}
                      className="btn btn-sm btn-outline btn-error flex items-center gap-1 rounded-full"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
