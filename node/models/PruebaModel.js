import db from "../database/db.js";
import { DataTypes } from "sequelize";

const PruebaModel = db.define("pruebas", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default PruebaModel;
