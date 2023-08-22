import axiosInstance from "@/helper/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

// for creating a list
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const data = {
      name: reqBody.name,
      description: reqBody.description,
      language: reqBody.language,
    };
    console.log(data);
    const res: any = await axiosInstance.post(`/list`, { data: { ...data } });
    return NextResponse.json(
      {
        success: true,
        message: "List created successfully",
        data: res?.data,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create list",
        error: error?.response,
      },
      { status: 400 }
    );
  }
}
