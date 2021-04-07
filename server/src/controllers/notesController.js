import asyncHandler from "express-async-handler";
import NotesModel from "../models/NotesModel.js";

/**
 * @route GET /
 * @desc get all notes
 * @access public
 */

const getNotes = asyncHandler(async (req, res) => {
  const notes = await NotesModel.find({});
  return res.status(200).json(notes);
});

/**
 * @route GET /:id
 * @desc get note by id
 * @access public
 */
const getNoteById = asyncHandler(async (req, res) => {
  const note = await NotesModel.findById(req.params.id);
  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

/**
 * @route POST /
 * @desc create a new note
 * @access public
 */
const createNote = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const note = await NotesModel.create({ title, description });
  if (note) {
    res.status(201).json({
      _id: note.id,
      title: note.title,
      description: note.description,
    });
  } else {
    res.status(400);
    throw new Error("Invalid note data");
  }
});

/**
 * @route DELETE /:id
 * @desc delete a note
 * @access public
 */
const deleteNote = asyncHandler(async (req, res) => {
  const note = await NotesModel.findById(req.params.id);
  if (note) {
    await note.delete();
    res.status(200).json({ message: "Note has been deleted" });
  } else {
    res.status(400);
    throw new Error("Invalid delete id");
  }
});

/**
 * @route PUT /:id
 * @desc update a note
 * @access public
 */
const updateNote = asyncHandler(async (req, res) => {
  const note = await NotesModel.findById(req.params.id);
  if (note) {
    note.title = req.body.title || note.title;
    note.description = req.body.description || note.description;
    const updatedNote = await note.save();
    res.status(200).json({
      _id: updatedNote._id,
      title: updatedNote.title,
      description: updatedNote.description,
    });
  } else {
    res.status(400);
    throw new Error("Note not found");
  }
});

export { getNotes, createNote, getNoteById, updateNote, deleteNote };
