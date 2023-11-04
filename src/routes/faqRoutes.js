import express from 'express';
const router = express.Router();

import faqController from '../controllers/faqController.js';

// Rota para pegar todas as FAQs
router.get('/', faqController.getAllFaqs);

export default router;
