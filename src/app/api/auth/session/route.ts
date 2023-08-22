import axiosInstance from "@/helper/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axiosInstance.get(`/authentication/guest_session/new`);
    return NextResponse.json(
      {
        success: true,
        message: "Session created successfully",
        data: res?.data,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create session",
        error: error?.response,
      },
      { status: 400 }
    );
  }
}
