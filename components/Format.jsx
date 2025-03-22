import parseFormatting from "@/utils/formatting";
import "@/css/format.scss";

export default function Format({ children }) {
  return (
    <span dangerouslySetInnerHTML={{ __html: parseFormatting(children || '') }}></span>
  )
}