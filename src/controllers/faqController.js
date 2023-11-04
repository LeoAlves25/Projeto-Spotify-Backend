import Faq from "../models/faq.js";

const faqController = {};

faqController.getAllFaqs = (req, res) => {
  Faq.getAllFaqs((err, faqs) => {
    if (err) {
      console.error("Erro ao buscar as FAQs:", err);
      res.status(500).json({ error: "Erro no servidor" });
    } else {
      res.json(faqs);
    }
  });
};

export default faqController;
