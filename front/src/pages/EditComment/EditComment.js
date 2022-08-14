import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./EditComment.css";

const URI = "http://localhost:8000/comments/";

export default function EditComment() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getComment();
  }, []);

  const getComment = async () => {
    const res = await axios.get(URI + id);
    setEmail(res.data.email);
    setComment(res.data.comment);
  };

  const editComment = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, { email, comment });
    navigate("/");
  };

  return (
    <div className="main-edit-comment">
      <CommentForm
        title="Editar Comentario"
        onSubmit={editComment}
        emailValue={email}
        commentValue={comment}
        onChangeEmail={(e) => setEmail(e.target.value)}
        onChangeComment={(e) => setComment(e.target.value)}
        isEdit
      />
    </div>
  );
}
