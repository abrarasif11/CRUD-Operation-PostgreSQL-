import React from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";

const Table = ({ clients, handleOpen }) => {
  return (
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
          {clients.map((client) => (
            <tr key={client.id}>
              <th>{client.id}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>

              <td>
                <button
                  className={`btn flex items-center justify-center gap-2 rounded-full w-24 ${
                    client.isActive ? "btn-primary" : "btn-outline-primary"
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
                    onClick={() => handleOpen("edit")}
                    className="btn btn-sm btn-outline btn-info flex items-center gap-1 rounded-full"
                  >
                    <Pencil size={16} />
                    Update
                  </button>

                  <button className="btn btn-sm btn-outline btn-error flex items-center gap-1 rounded-full">
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
  );
};

export default Table;
