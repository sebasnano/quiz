import { RequestHandler } from "express";
import Question from "./Quetion";

export const createQuetion: RequestHandler = async (req, res) => {
  const questionFound = await Question.findOne({question: req.body.question})
  if (questionFound) {
    return res.status(301).json({ message: 'The Question already exists'})
  }
  const question = new Question(req.body);
  const savedQuestion = await question.save();
  console.log(savedQuestion);
  res.json("question saved");
};

export const getQuetions: RequestHandler = async (req, res) => {
  try {
    const questions = await Question.find();
  return res.json(questions);
  } catch (error) {
    res.json(error)
  }
};

export const getQuetion: RequestHandler = async (req, res) => {
  const questionFound = await Question.findById(req.params.id);  
  if (!questionFound) return res.status(204).json();
  return res.json(questionFound);
};

export const updateQuetion: RequestHandler = async (req, res) => {
  const questionUpdate = await Question.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if (!questionUpdate) return res.status(204).json();
  res.json(questionUpdate);
};

export const deleteQuetion: RequestHandler = async (req, res) => {
  const questionFound = await Question.findByIdAndDelete(req.params.id);  
  if (!questionFound) return res.status(204).json();
  return res.json(questionFound);
};
