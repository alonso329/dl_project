import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./ShowComment.css";

const URI = "http://localhost:8000/comments/";

export default function ShowComment() {
  const [comments, setComments] = useState([]);
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const res = await axios.get(URI);
    setComments(res.data);
  };

  const createComment = async () => {
    await axios.post(URI, { email, comment });
  };

  const deleteComment = async (id) => {
    let newComments = comments.filter((comment) => comment.id !== id);
    await axios.delete(URI + id);
    setComments(newComments);
  };

  return (
    <div className="main-show-comment">
      <CommentForm
        title="Comentarios"
        onSubmit={createComment}
        onChangeEmail={(e) => setEmail(e.target.value)}
        onChangeComment={(e) => setComment(e.target.value)}
        emailValue={email}
        commentValue={comment}
      />
      <div className="comment-list">
        <h2>Listado de comentarios</h2>
        {comments.length === 0 ? (
          <h2>No hay comentarios por el momento</h2>
        ) : (
          comments.map((comment) => (
            <div key={comment.id}>
              <p style={{ fontWeight: "bold" }}>{comment.email}</p>
              <p>{comment.comment}</p>
              <div>
                <button
                  className="delete-button"
                  onClick={() => deleteComment(comment.id)}
                >
                  Eliminar
                </button>
                <Link to={`/edit/${comment.id}`}>
                  <button className="edit-button">Editar</button>
                </Link>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
