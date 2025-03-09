import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, text } = body;

    // Check if all required fields are present
    if (!name || !email || !text) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please fill in all the fields (name, email, message).",
        }),
        { status: 400 } // Bad request status
      );
    }

    // Send the email via Resend API
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${text}`,
    });

    console.log("Email Response:", emailResponse);

    // Check if the email was sent successfully
    if (!emailResponse.error) {
      // If email is sent successfully, return success with status 200
      return new Response(
        JSON.stringify({
          success: true,
          message: "Message sent successfully.",
        }),
        { status: 200 }
      );
    } else {
      // If there is an error in the response, return the error message
      const errorMessage =
        emailResponse.error.message || "Failed to send message.";
      return new Response(
        JSON.stringify({
          success: false,
          error: errorMessage,
        }),
        { status: 500 } // Internal server error
      );
    }
  } catch (error) {
    console.error("Email Error:", error);

    // Catch and handle unexpected errors
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "An unexpected error occurred.",
      }),
      { status: 500 } // Return a 500 status for unexpected errors
    );
  }
}
