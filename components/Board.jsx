"use client";

import { MdOutlineWarningAmber } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import "@/css/board.scss";

const boardIcons = {
  "info": <IoMdInformationCircleOutline />,
  "warn": <MdOutlineWarningAmber />,
  "error": <MdOutlineReportGmailerrorred />,
  "success": <MdOutlineCheckCircleOutline />,
}

export default function Board({ children, type }) {
  return (
    <div className={`board board-${type} container-xs`}>
      <div className="board-icon">
        {boardIcons[type] || "No type found"}
      </div>
      <div className="board-content">
        {children}
      </div>
    </div>
  )
}