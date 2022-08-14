import "./CommentForm.css";

export default function CommentForm({
  onSubmit,
  onChangeEmail,
  onChangeComment,
  title,
  isEdit = false,
  emailValue = "",
  commentValue = "",
}) {
  return (
    <div className="create-comment-form">
      <h2>{title}</h2>
      <form className="form-content" onSubmit={onSubmit}>
        <label>Email</label>
        <input
          className="form-input"
          type="email"
          onChange={onChangeEmail}
          value={emailValue}
          required
        />
        <label>Comentario</label>
        <textarea
          className="form-input"
          type="text"
          onChange={onChangeComment}
          value={commentValue}
          required
        />
        <button className="comment-button" type="submit">
          {isEdit ? "Editar" : "Comentar"}
        </button>
      </form>
    </div>
  );
}
