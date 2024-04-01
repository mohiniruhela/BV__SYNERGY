import React from "react";

const Response = ({ userInput }) => {
  let responseMessage;

  switch (userInput.toLowerCase()) {
    case "job":
    case "jobs":
      responseMessage = "Go to the jobs section for further details.";
      break;
    case "internships":
    case "internship":
      responseMessage = "Go to the internships section for further details.";
      break;
    default:
      responseMessage = "I'm sorry, I don't have information on that topic.";
  }

  return (
    <div>
      <p>{responseMessage}</p>
    </div>
  );
};

export default Response;
