import React from "react";
const clients = [
  {
    id: 1,
    name: "Ariana Rahman",
    email: "ariana.rahman@example.com",
    job: "UI/UX Designer",
    isActive: true,
    rate: 4.8,
  },
  {
    id: 2,
    name: "Sabbir Hasan",
    email: "sabbir.hasan@example.com",
    job: "Full Stack Developer",
    isActive: false,
    rate: 4.2,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat.jahan@example.com",
    job: "Digital Marketing Specialist",
    isActive: true,
    rate: 4.6,
  },
  {
    id: 4,
    name: "Tahmid Chowdhury",
    email: "tahmid.chowdhury@example.com",
    job: "Project Manager",
    isActive: true,
    rate: 4.9,
  },
  {
    id: 5,
    name: "Mehedi Alam",
    email: "mehedi.alam@example.com",
    job: "Data Analyst",
    isActive: false,
    rate: 3.9,
  },
];

const Table = () => {
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody className="hover">
          {/* row 1 */}
          {clients.map((client) => (
            <tr>
              <th>{client.id}</th>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.job}</td>
              <td>{client.rate}</td>
              <td>
                <button
                  className={`btn rounded-full w-20 ${
                    client.isActive ? `btn-primary` : `btn-outline-primary`
                  }`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
