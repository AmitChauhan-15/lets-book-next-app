import React from "react";
import { getHotels } from "../_lib/data-service";
import HotelCard from "./HotelCard";

async function HotelList({ filter }) {
  const hotels = await getHotels();
  if ((hotels || []).length === 0) return <div className="w-full flex justify-center items-center my-auto">No Hotel Found!</div>;

  return (
    <div className="grid grid-cols-12 gap-6 h-fit overflow-auto">
      {hotels
        .filter(({ location }) => filter === "all" || location.city?.toLowerCase() === filter)
        .map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} />
        ))}
    </div>
  );
}

export default HotelList;
