import { IoMdInformationCircleOutline } from "react-icons/io";
import "@/css/tooltip.scss";

export default function Tooltip({ children, position = "top" }) {
  const className = "tooltip-content " + position;

  return (
    <div
      className="tooltip-wrapper"
    >
      <IoMdInformationCircleOutline className="tooltip-icon" />
      <div className={className}>
        {children}
      </div>
    </div>
  );
}