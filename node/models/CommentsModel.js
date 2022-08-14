import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CommentsModel = db.define("comments", {
  email: { type: DataTypes.STRING },
  comment: { type: DataTypes.STRING },
});

export default CommentsModel;
