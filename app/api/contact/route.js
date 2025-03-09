import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "Please fill in all the fields (name, email, message).",
        },
        { status: 400 } // Bad request status
      );
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email Response:", data);

    // If email is sent successfully, return success
    if (data && data.statusCode === 200) {
      return Response.json({ success: true, data });
    }

    // If something went wrong with Resend (like Missing 'to' field)
    return Response.json(
      {
        success: false,
        error: data?.error?.message || "Failed to send message.",
      },
      { status: 422 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    // Catch any other errors and return them
    return Response.json(
      {
        success: false,
        error: error.message || "Unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}
