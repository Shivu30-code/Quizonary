import QuizAttempt from "../models/QuizAttempt.js";

// Submit Quiz
export const submitQuiz = async (req, res) => {
    try {
        const {
            userId,
            attemptID,
            score,
            correct,
            wrong,
            timeTaken,
        } = req.body;

        const quizAttempt = await QuizAttempt.create({
            userId,
            attemptID,
            score,
            correct,
            wrong,
            timeTaken,
        });

        res.status(201).json({
            success: true,
            message: "Quiz Submitted Successfully",
            data: quizAttempt,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Leaderboard
export const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await QuizAttempt.find()
            .populate("userId", "fullName")
            .sort({
                correct: -1,
                timeTaken: 1,
            });

        res.status(200).json({
            success: true,
            data: leaderboard,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Quiz History
export const getQuizHistory = async (req, res) => {
    try {
        const { userId } = req.params;

        const history = await QuizAttempt.find({
            userId,
        }).sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            data: history,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};