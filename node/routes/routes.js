import express from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getComment,
  updateComment,
} from "../controllers/CommentsController.js";

const router = express.Router();

router.get("/", getAllComments);
router.get("/:id", getComment);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
