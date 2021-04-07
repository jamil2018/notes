import express from "express";
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").get(getNoteById).delete(deleteNote).put(updateNote);

export default router;
