import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, description, category, requesterId } = body;

    if (!title || !description || !category || !requesterId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newRequest = await prisma.helpRequest.create({
      data: {
        title,
        description,
        category,
        requesterId,
      },
    });

    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create request" },
      { status: 500 }
    );
  }
}
