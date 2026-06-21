import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const requests = await prisma.helpRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        requester: {
          select: {
            id: true,
            name: true,
            karmaPoints: true,
          },
        },
        helper: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(requests, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch requests" },
      { status: 500 }
    );
  }
}
