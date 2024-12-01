import { getHotel } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const parameter = await params;

  try {
    const apiKey = request.headers?.get("x-api-key");
    if (!apiKey || apiKey !== process.env.API_KEY) return Response.json({ message: "Unauthorized" }, { status: 401 });

    const hotel = await getHotel(parameter.hotelId, true);
    if (!hotel || hotel.length === 0) return Response.json({ message: "Hotel not found", data: [] }, { status: 404 });
    return Response.json({ message: "Success", data: hotel });
  } catch (error) {
    console.log("Error : ", error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
