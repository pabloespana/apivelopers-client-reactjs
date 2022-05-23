import React, { useEffect, useState } from "react";

export const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch("https://apivelopers.com/api/developers")
      .then((response) => response.json())
      .then((data) => setDevelopers(data.result));
  }, []);

  return (
    <>
      <h1 className="title">All developers</h1>
      <table className="table">
        <caption>Simple list of developers</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Age</th>
            <th scope="col">More</th>
          </tr>
        </thead>
        <tbody>
          {developers.map((developer, index) => {
            return (
              <tr key={developer._id}>
                <th scope="row">{index + 1}</th>
                <td>{developer.name}</td>
                <td>{developer.country}</td>
                <td>{developer.age}</td>
                <td>
                  <a
                    className="btn btn-primary"
                    href={`/developers/${developer._id}`}
                  >See all info</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
