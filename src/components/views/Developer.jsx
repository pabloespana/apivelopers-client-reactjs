import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Developer = () => {
  const { id } = useParams();
  const [developer, setDeveloper] = useState({});

  useEffect(() => {
    fetch(`https://apivelopers.com/api/developers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDeveloper(data.result);
      });
  }, [id]);

  return (
    <>
      <h1 className="title">Developer info</h1>
      <div className="card">
        <div className="card-header">
          <h2 className="subtitle">{developer.name}</h2>
        </div>
        <div className="card-body">
          <p>
            <b>Country:</b> {developer.country}
          </p>
          <p>
            <b>Age:</b> {developer.age}
          </p>
          <ul className="list-group list-group-flush">
            <p>
              <b>Skills:</b>
            </p>
            {developer.skills &&
              developer.skills.map((skill, index) => (
                <li key={index} className="list-group-item">
                  {skill.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
