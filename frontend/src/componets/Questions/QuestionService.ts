import axios from "axios";

export const getQuestion = async () => {
  return await axios.get(
    // "http://localhost:4000/question"
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
};
