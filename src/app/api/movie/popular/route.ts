import axiosInstance from "@/helper/axiosInstance";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axiosInstance.get(
      "https://api.themoviedb.org/3/person/popular"
    );
    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
    });
  }
}
