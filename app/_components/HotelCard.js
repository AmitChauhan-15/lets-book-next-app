import Image from "next/image";
import Link from "next/link";
import React from "react";

function HotelCard({ hotel }) {
  return (
    <div className="col-span-3 p-5 flex flex-col gap-6 bg-white shadow-lg rounded-lg">
      <div>
        <h4 className="font-bold text-sm">{hotel.name}</h4>
        <span className="text-gray-400 text-xs">{hotel.location?.city || ""}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-xs">Rating</span>
        <span className="font-medium text-xl">{hotel.rating} / 5</span>
      </div>
      <div className="h-[150px] relative rounded-lg overflow-hidden">
        <Image src={hotel.images[0]} fill className="object-cover" alt={hotel.description} />
      </div>
      <p className="text-sm text-gray-500 line-clamp-3">{hotel.description}</p>
      <div className="flex flex-1 justify-between items-end">
        <div className="flex flex-col">
          <span className="text-gray-400 text-xs">Price per Night</span>
          <span className="font-semibold text-lg">₹ {hotel.pricePerNight}</span>
        </div>
        <Link
          href={`/hotels/${hotel.hotelId}`}
          className="h-fit px-4 py-3 text-sm border-2 border-gray-400 rounded-lg leading-none hover:border-transparent hover:bg-gray-900 hover:text-white transition-all"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
