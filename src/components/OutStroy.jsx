import axios from "axios";
import React, { useEffect, useState } from "react";

const OutStroy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setData(response.data.ourStory);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-5 pt-5 text-center">
      <h6 className="mt-5 mb-2">আমাদের গল্প</h6>

      {data.map((item, id) => {
        return (
          <>
            <h1 className="pt-2" key={id}>
              {item["title"]}
            </h1>
            <p className="pt-3" key={id}>
              {item["description"]}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default OutStroy;
