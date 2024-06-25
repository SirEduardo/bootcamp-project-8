const { deleteFile } = require("../../utils/deleteFile");
const Platform = require("../models/platforms");

const getPlatform = async (req, res, next) => {
  try {
    const platform = await Platform.find();
    return res.status(200).json(platform);
  } catch (error) {
    return res.status(404).json("Platforma no encontrada");
  }
};

const postPlatform = async (req, res, next) => {
  try {
    const newPlatform = new Platform(req.body);

    if (req.file){
      newPlatform.img = req.file.path
    }

    const platformSaved = await newPlatform.save();
    return res.status(201).json(platformSaved);
  } catch (error) {
    return res.status(400).json("Error subiendo nueva plataforma");
  }
};

const deletePlatform = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPlatform = await Platform.findByIdAndDelete(id);
    deleteFile(deletedPlatform.img)
    return res.status(200).json(deletedPlatform);
  } catch (error) {
    return res.status(400).json("Error al eliminar la plataforma");
  }
};

const updatePlatform = async (req, res, next) => {
  const { id } = req.params;
  try {
    const oldPlatform = await Platform.findById(id);

    const updatedData = { ...req.body };

    if (req.file){
      updatedData.img = req.file.path
      if (oldPlatform){
        deleteFile(oldPlatform.img)
      }
    }

    if (req.body.videogames) {
      updatedData.videogames = [
        ...new Set([...oldPlatform.videogames, ...req.body.videogames]),
      ];
    }

    const updatedPlatforms = await Platform.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return res.status(200).json(updatedPlatforms);
  } catch (error) {
    return res.status(400).json("No se pudo actualizar la plataforma");
  }
};

module.exports = { getPlatform, postPlatform, deletePlatform, updatePlatform };
