import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2 className="card-text">
        {data.type === "amount" && "$"}
        {data.value}
      </h2>
      <p className="card-title">
        {data.title}{" "}
        {data.icon && (
          <FontAwesomeIcon
            icon={faQuestionCircle}
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              fontSize: "20px",
              color: "blue",
            }}
          />
        )}{" "}
      </p>
    </div>
  );
};

export default Card;
