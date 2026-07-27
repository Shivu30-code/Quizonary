import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        attemptID: {
            type: String,
            required: true,
            unique: true,
        },

        score: {
            type: Number,
            default: 0,
        },

        correct: {
            type: Number,
            default: 0,
        },

        wrong: {
            type: Number,
            default: 0,
        },

        timeTaken: {
            type: Number,
            default: 0,
        },

        rank: {
            type: String,
            default: "PENDING",
        },

        reward: {
            type: String,
            default: "PENDING",
        },

        submittedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const QuizAttempt = mongoose.model(
    "QuizAttempt",
    quizAttemptSchema
);

export default QuizAttempt;