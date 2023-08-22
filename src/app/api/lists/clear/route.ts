import axiosInstance from "@/helper/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

// for clearing list data
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { listID } = reqBody;
    const res: any = await axiosInstance.post(`/list/${listID}/clear`);
    return NextResponse.json(
      {
        success: true,
        message: "List cleared successfully",
        data: res?.data,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to clear list",
        error: error?.response,
      },
      { status: 400 }
    );
  }
}
