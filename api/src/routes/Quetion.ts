import { Schema, model } from "mongoose";

const questionShema = new Schema(
  {
    category: {
      type: "string",
      required: true,
      trim: true,
    },
    difficulty: {
      type: "string",
      required: true,
      trim: true,
    },
    question: {
      type: "string",
      required: true,
      trim: true,
      unique: true,
    },
    correct_answer:{
      type: "boolean",
      required: true,
    },
    incorrect_answers:{
      type: "boolean",
      required: true,
    },
    answers: {
      type: "boolean",
      required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Question", questionShema);
