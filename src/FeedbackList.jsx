import React from "react";
import Feedbackitem from "./Feedbackitem";

function FeedbackList({ feedback, handleDelete }) {
  //   console.log(feedback);
  if (!feedback && feedback !== 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem keys={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;
