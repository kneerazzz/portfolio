import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await sendEmail({
      subject: "New message from portfolio",
      name,
      email,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
