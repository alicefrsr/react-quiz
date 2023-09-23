import express from 'express';
const router = express.Router();

import { getQuestions } from '../controllers/questionsController.js';

// @ /api/v1/users/
// GET Get all Users
// Public
router.get('/', getQuestions);

export default router;
