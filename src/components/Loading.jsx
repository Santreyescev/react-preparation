import "../styles/Loading.css";

export default function Loading({
  text = "Loading...",
  size = "medium",
}) {
  return (
    <div className="loading-container">
      <div className={`spinner ${size}`}></div>
      <p className="loading-text">{text}</p>
    </div>
  );
}