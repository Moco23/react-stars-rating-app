import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRAting";
import Style from "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      className="starContainerStyle"
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
  </React.StrictMode>
);
