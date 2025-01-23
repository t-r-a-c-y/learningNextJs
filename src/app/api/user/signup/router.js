import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connect(); // Ensure the database is connected

  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // Validate input fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "The email is already used" },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create and save the user
    const newUser = new User({
      userName: username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return NextResponse.json(
      { message: "User has been created successfully", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during user signup:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
