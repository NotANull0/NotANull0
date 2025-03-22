import "@/css/modal.scss";

export default function Modal({ id, content }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        {content}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button
          type="button"
          title="Close Modal"
          aria-label="Close Modal"
        >
          Close Modal
        </button>
      </form>
    </dialog>
  )
}