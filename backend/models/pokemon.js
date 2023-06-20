import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  moves: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
  },
  attack: {
    type: Number,
  },
  defense: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Pokemon = mongoose.model("Pokemon", schema);
