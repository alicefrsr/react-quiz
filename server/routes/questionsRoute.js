import express from 'express';
const router = express.Router();

import { getQuestions } from '../controllers/questionsController.js';

// @ /api/v1/questions/
// GET Get all questions
// access Public
router.get('/', getQuestions);

export default router;
