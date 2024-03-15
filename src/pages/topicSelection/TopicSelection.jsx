import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "./TopicSelection.css";

const TopicSelection = () => {
  const { data, error, isLoading } = useFetch("/api/topics");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log(data);

  return (
    <div className="topic-selection py-4">
      {data
        ? data.topics.map((topic) => {
            return (
              <div key={topic._id}>
                <img src={topic.image} alt="" />
                <p>{topic.name}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TopicSelection;
