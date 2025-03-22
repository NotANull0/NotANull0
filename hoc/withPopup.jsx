"use client";

import { useState } from "react";
import Popup from "@/components/Popup";
import "@/css/popup.scss";

const withPopup = (WrappedComponent) => {
  const PopupComponent = (props) => {
    const [popups, setPopups] = useState([]);

    const addPopup = (message, status) => {
      const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      setPopups((prev) => [...prev, { id, message, status }]);
    };

    const removePopup = (id) => {
      setPopups((prev) => prev.filter((popup) => popup.id !== id));
    };

    return (
      <div>
        <WrappedComponent {...props} addPopup={addPopup} />
        <div className="popup-wrapper">
          {popups.map((popup) => (
            <Popup
              id={popup.id}
              key={popup.id}
              msg={popup.message}
              status={popup.status}
              removePopup={removePopup}
            />
          ))}
        </div>
      </div>
    );
  };

  PopupComponent.displayName = `WithPopup(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return PopupComponent;
};

export default withPopup;
