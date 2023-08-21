import axiosInstance from "@/helper/axiosInstance";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axiosInstance.get("/trending/movie/day?language=en-US");
    return NextResponse.json(
      {
        success: true,
        message: "Popular movies fetched successfully",
        data: res?.data,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Popular movies fetching failed",
        error: error?.response,
      },
      { status: 400 }
    );
  }
}
