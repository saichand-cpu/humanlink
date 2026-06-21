import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { requestId, helperId } = body;

    if (!requestId || !helperId) {
      return NextResponse.json(
        { error: "Missing requestId or helperId" },
        { status: 400 }
      );
    }

    // Check if request exists
    const existingRequest = await prisma.helpRequest.findUnique({
      where: { id: requestId },
    });

    if (!existingRequest) {
      return NextResponse.json(
        { error: "Request not found" },
        { status: 404 }
      );
    }

    if (existingRequest.status !== "OPEN") {
      return NextResponse.json(
        { error: "Request is not available" },
        { status: 400 }
      );
    }

    // Update request with helper
    const updatedRequest = await prisma.helpRequest.update({
      where: { id: requestId },
      data: {
        helperId,
        status: "IN_PROGRESS",
      },
    });

    return NextResponse.json(updatedRequest, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to accept request" },
      { status: 500 }
    );
  }
}
