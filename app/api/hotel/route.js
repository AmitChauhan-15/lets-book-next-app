import { getHotels } from "@/app/_lib/data-service";

export async function GET(request) {
  try {
    const apiKey = request.headers?.get("x-api-key");
    if (!apiKey || apiKey !== process.env.API_KEY) return Response.json({ message: "Unauthorized" }, { status: 401 });

    const hotels = await getHotels();
    if (!hotels) return Response.json({ message: "Hotels not found", data: [] }, { status: 404 });
    return Response.json({ message: "Success", data: hotels });
  } catch (error) {
    console.log("Error : ", error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
