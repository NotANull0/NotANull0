"use client";

import { IoClose } from "react-icons/io5";
import { useState, useEffect, useCallback, useRef } from "react";
import Btn from "@/components/Btn";
import "@/css/popup.scss";

export default function Popup({ id, msg, status, removePopup }) {
  const durationInSeconds = 5;
  const animationDurationInSeconds = 0.5;
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const isHovered = useRef(false);

  const removePopupWithDelay = useCallback((id) => {
    setTimeout(() => removePopup(id), animationDurationInSeconds * 1000)
  }, [removePopup]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered.current) {
        setTimeLeft((prev) => Math.max(prev - 0.1, 0));
      }

      if (timeLeft == 0) {
        setIsVisible(false);
        removePopupWithDelay(id);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, [id, removePopup, removePopupWithDelay, timeLeft]);

  const closePopup = () => {
    setIsVisible(false);
    removePopupWithDelay(id);
  }

  return (
    <div
      className={`popup popup-${status} ${isVisible ? "slide-in" : "slide-out"}`}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <span>{msg}</span>
      <Btn
        type="button"
        onClick={() => closePopup()}
        title="Close"
        aria-label="Close"
      >
        <IoClose />
      </Btn>
      <div className="popup-progress">
        <div
          className="popup-progress-bar"
          style={{
            width: `${(timeLeft / durationInSeconds) * 100}%`
          }}
        >
        </div>
      </div>
    </div>
  )
}