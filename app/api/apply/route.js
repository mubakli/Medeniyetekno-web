import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(req) {
  try {
    const { name, email, phone, school, faculty, grade, more } =
      await req.json();

    if (!name || !email || !phone || !school || !faculty || !grade || !more) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Check if a subscriber with the same email or phone already exists
    const existingSubscriber = await Subscriber.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { error: "Email or phone already exists" },
        { status: 409 }
      );
    }

    const newSubscriber = new Subscriber({
      name,
      email,
      phone,
      school,
      faculty,
      grade,
      more,
    });
    await newSubscriber.save();

    return NextResponse.json(
      { message: "Subscriber added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
