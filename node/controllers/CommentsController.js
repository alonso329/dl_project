import CommentsModel from "../models/CommentsModel.js";

export const getAllComments = async (req, res) => {
  try {
    const comments = await CommentsModel.findAll();
    res.json(comments);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getComment = async (req, res) => {
  try {
    const comment = await CommentsModel.findAll({
      where: { id: req.params.id },
    });
    res.json(comment[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createComment = async (req, res) => {
  try {
    await CommentsModel.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    await CommentsModel.update(req.body, {
      where: { id: req.params.id },
    });

    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    await CommentsModel.destroy({
      where: { id: req.params.id },
    });

    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
