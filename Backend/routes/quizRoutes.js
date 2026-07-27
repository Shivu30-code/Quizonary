import express from "express";

import {
    submitQuiz,
    getLeaderboard,
    getQuizHistory,
} from "../controllers/quizController.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Quiz Routes Working");
});

// Submit Quiz
router.post("/submit", submitQuiz);

// Leaderboard
router.get("/leaderboard", getLeaderboard);

// Quiz History
router.get("/history/:userId", getQuizHistory);

router.get("/test", (req, res) => {
    res.send("Quiz Routes Working");
});

export default router;