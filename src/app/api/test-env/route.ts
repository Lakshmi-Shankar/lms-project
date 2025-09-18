import { NextResponse } from "next/server";

export async function GET() {
    console.log("Started....");
    console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Loaded":"Failed to load");

    return NextResponse.json({
        Message: "Server working..."
    })
}