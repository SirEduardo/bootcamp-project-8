const { deleteFile } = require("../../utils/deleteFile");
const Videogame = require("../models/videogames");

const getVideogames = async (req, res, next) => {
  try {
    const games = await Videogame.find();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(404).json("videojuego no encontrado");
  }
};

const postVideogame = async (req, res, next) => {
  try {
    const newGame = new Videogame(req.body);

    if (req.file) {
      newGame.img = req.file.path;
    }
    const videogameSaved = await newGame.save();
    return res.status(201).json(videogameSaved);
  } catch (error) {}
};

const deleteVideogame = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedVideogame = await Videogame.findByIdAndDelete(id);
    deleteFile(deletedVideogame.img);
    return res.status(200).json(deletedVideogame);
  } catch (error) {
    return res.status(400).json("Error al eliminar el juego");
  }
};

const updateVideogame = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oldVideogame = await Videogame.findById(id);

    const updatedData = { ...req.body };

    if (req.file) {
      updatedData.img = req.file.path;
      if (oldVideogame) {
        deleteFile(oldVideogame.img);
      }
    }

    if (req.body.platforms) {
      updatedData.platforms = [
        ...new Set([...oldVideogame.platforms, ...req.body.platforms]),
      ];
    }
    const videogameUpdated = await Videogame.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
    return res.status(200).json(videogameUpdated);
  } catch (error) {
    return res.status(400).json("No se pudo actualizar el juego");
  }
};

module.exports = {
  getVideogames,
  postVideogame,
  deleteVideogame,
  updateVideogame,
};
