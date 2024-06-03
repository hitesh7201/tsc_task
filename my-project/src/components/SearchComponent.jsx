import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";

const SearchComponent = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("https://v9lnnt8bqxsy.share.zrok.io/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleTitleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationSearch = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const filteredData = jobs.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <div>
      <Header
        handleTitleSearch={handleTitleSearch}
        handleLocationSearch={handleLocationSearch}
        handleCheckboxChange={handleCheckboxChange}
      />
      <div className="flex flex-wrap justify-center">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            position={item.position}
            title={item.title}
            company={item.company}
            location={item.location}
            type={item.type}
            posted_ago={item.posted_ago}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
