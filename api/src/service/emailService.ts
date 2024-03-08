import nodemailer from 'nodemailer';

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

interface ISendMail {
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async ({ to, subject, text }: ISendMail) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER as string,
      pass: process.env.GMAIL_PASS as string,
    },
  });

  const mailOptions: MailOptions = {
    from: process.env.GMAIL_USER as string,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé avec succès :', info.response);
  } catch (error) {
    console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
  }
};