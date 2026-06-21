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

    // Check request exists
    const request = await prisma.helpRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      return NextResponse.json(
        { error: "Request not found" },
        { status: 404 }
      );
    }

    if (request.status !== "IN_PROGRESS") {
      return NextResponse.json(
        { error: "Request is not in progress" },
        { status: 400 }
      );
    }

    // Update request status to COMPLETED
    const updatedRequest = await prisma.helpRequest.update({
      where: { id: requestId },
      data: {
        status: "COMPLETED",
      },
    });

    // Give karma to helper
    await prisma.user.update({
      where: { id: helperId },
      data: {
        karmaPoints: {
          increment: request.karmaReward,
        },
      },
    });

    return NextResponse.json(
      {
        message: "Request completed successfully",
        request: updatedRequest,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to complete request" },
      { status: 500 }
    );
  }
}
