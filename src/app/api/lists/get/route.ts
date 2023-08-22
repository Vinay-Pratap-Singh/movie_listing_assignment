import axiosInstance from "@/helper/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

// for getting the list data
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { listID } = reqBody;
    const res: any = await axiosInstance.get(`/list/${listID}`);
    return NextResponse.json(
      {
        success: true,
        message: "Data fetched successfully",
        data: res?.data,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch data",
        error: error?.response,
      },
      { status: 400 }
    );
  }
}
