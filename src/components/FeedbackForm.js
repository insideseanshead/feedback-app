import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

export const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState("true");
  const [message, setSetMessage] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service?</h2>
        {/* TODO: rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" >Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
