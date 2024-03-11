import { Request, Response } from 'express';
import { sendEmail } from '../service/emailService';

export const sendMail = async (req: Request, res: Response) => {
  const { subject, text } = req.body;

  try {
    if (!subject || !text) {
      return res.status(400).send('Les champs "Objet" et "Corps du mail" sont obligatoires.');
    }

    await sendEmail({ subject, text });
    res.status(200).json({ message: 'E-mail envoyé avec succès' });
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    res.status(400).json({ error: error.message });
  }
};