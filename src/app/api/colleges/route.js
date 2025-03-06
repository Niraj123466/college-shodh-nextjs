import connectDB from "@/config/mongodb";
import Colleges from "@/models/college.model";
import { expandSearchQuery } from "@/utils/searchQueryExpander";
import { NextResponse } from "next/server";


const allowedOrigins = [
  "https://www.collegeshodh.in/"
];

export async function OPTIONS(req) {
  const origin = req.headers.get("origin");

  if (allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  return new NextResponse(null, { status: 403 }); // Forbidden if origin is not allowed
}

export async function GET() {
  await connectDB();
  try {
    const colleges = await Colleges.find().skip(0).limit(10);
    const totalCount = await Colleges.countDocuments();

    return new NextResponse(
      JSON.stringify({
        colleges,
        pagination: {
          total: totalCount,
          page: 1,
          limit: 10,
          totalPages: Math.ceil(totalCount / 10),
        },
      }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow all origins for GET requests
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return new NextResponse(
      JSON.stringify({ error: "Error fetching colleges" }),
      { status: 500 }
    );
  }
}


export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const { course, city, state, naacRanking, nba, page = 1, limit = 10, search } = body;

    const query = {};

    // ✅ Handle search functionality
    if (search) {
      const expandedTerms = expandSearchQuery(search);
      query.$or = expandedTerms.map(term => ({
        college_name: { $regex: new RegExp(term, "i") }
      }));
    }

    if (city || state) {
      query.$and = [];
      if (city) query.$and.push({ address: { $regex: new RegExp(city, "i") } });
      if (state) query.$and.push({ address: { $regex: new RegExp(state, "i") } });
    }

    if (course) query.dept = { $regex: new RegExp(course, "i") };
    if (naacRanking) query.naac = { $eq: naacRanking };
    if (nba) query.nba = nba === "Accredited";

    const skip = (page - 1) * limit;
    const totalCount = await Colleges.countDocuments(query);
    const results = await Colleges.find(query).skip(skip).limit(limit);

    return new NextResponse(
      JSON.stringify({
        colleges: results,
        selectedCourse: course,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit),
        },
      }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow all origins for GET requests
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return new NextResponse(
      JSON.stringify({ error: "Error fetching colleges" }),
      { status: 500 }
    );
  }
}
