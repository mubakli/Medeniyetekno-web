import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, text } = await req.json();

    if (!name | !email | !text) {
      return new Response(JSON.stringify({ error: "All fields required" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailContent = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${text}`,
    };

    const info = await transporter.sendMail(mailContent);

    return new Response(JSON.stringify({ success: true, info }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
