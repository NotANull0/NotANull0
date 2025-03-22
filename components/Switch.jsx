"use client";

import { PiDotsNineThin } from "react-icons/pi";
import "@/css/switch.scss";

export default function Switch({ children, id, state, setState, ...props }) {
  return (
    <div className="switch-wrapper">
      <div>
        <label
          htmlFor={id}
          className="switch-label"
        >
          {children}
        </label>
      </div>
      <label
        className="switch"
      >
        <input
          id={id}
          type="checkbox"
          checked={state}
          onChange={() => setState(!state)}
          className="switch-input"
          {...props}
        />
        <div className="switch-track">
          <div className="switch-knob">
            <PiDotsNineThin className="switch-knob-icon" />
          </div>
        </div>
      </label>
    </div>
  )
}