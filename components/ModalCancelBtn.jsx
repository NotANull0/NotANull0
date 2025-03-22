import { FaTimes } from "react-icons/fa";
import "@/css/modal.scss";

export default function ModalCancelBtn() {
  return (
    <form method="dialog">
      <button title="Cancel">
        <FaTimes className="mr-1" />
        Cancel
      </button>
    </form>
  )
}