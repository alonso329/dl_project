import PruebaModel from "../models/PruebaModel.js";

export const getAllPruebas = async (req, res) => {
  try {
    const pruebas = await PruebaModel.findAll();
    res.json(pruebas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPrueba = async (req, res) => {
  try {
    const prueba = await PruebaModel.findAll({
      where: { id: req.params.id },
    });
    res.json(prueba[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPrueba = async (req, res) => {
  try {
    await PruebaModel.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updatePrueba = async (req, res) => {
  try {
    await PruebaModel.update(req.body, {
      where: { id: req.params.id },
    });

    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePrueba = async (req, res) => {
  try {
    await PruebaModel.destroy({
      where: { id: req.params.id },
    });

    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
