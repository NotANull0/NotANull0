import "@/css/collapse.scss";

export default function Collapse({ title, content }) {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
  const id = `collapse-${slug}`;

  return (
    <div className="collapse collapse-arrow">
      <input type="checkbox" id={id} />
      <label className="collapse-title" htmlFor={id}>
        {title}
      </label>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  )
}