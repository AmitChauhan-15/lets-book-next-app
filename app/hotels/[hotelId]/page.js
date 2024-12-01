import BookingSummary from "@/app/_components/BookingSummary";
import Button from "@/app/_components/Button";
import { getHotel } from "@/app/_lib/data-service";
import Image from "next/image";
import React from "react";

async function BookHotel({ params }) {
  const parameter = await params;

  const hotel = await getHotel(parameter?.hotelId);
  const [hotelDetail] = hotel;
  const { city, state } = hotelDetail.location;

  const priceSummary = () => {
    const price = hotelDetail.pricePerNight;
    const tax = Math.floor(price * 2 * 0.18);
    const total = price * 2 + Math.floor(price * 2 * 0.18);

    return [
      { name: "Room Price x 2", value: `₹ ${price * 2}` },
      { name: "Tax", value: `₹ ${tax}` },
      { name: "Total", value: `₹ ${total}` },
    ];
  };

  if (!hotel) return <div className="flex h-full justify-center items-center">Hotel&apos;s detail not found!</div>;
  return (
    <section className="grid grid-cols-12 gap-6 h-full">
      <div className="col-span-8 flex flex-col gap-2">
        <div className="flex-1 rounded-lg bg-gray-950 relative overflow-hidden">
          <Image src={hotelDetail.images?.[0] || ""} fill className="object-cover" alt="hotel image" />
        </div>
        <div className=" bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-xl font-bold">{hotelDetail.name}</h2>
              <span className="text-gray-400">{`${city}, ${state} `}</span>
            </div>
            <span className="text-xl font-bold">{hotelDetail.rating} / 5</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
            <p className="text-sm text-gray-600">{hotelDetail?.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Amenities</h3>
            <p className="text-sm text-gray-600">{hotelDetail?.amenities.map((amenity, index, arr) => (arr.length === index + 1 ? amenity : `${amenity} | `))}</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">{hotelDetail.name}</h2>
          <BookingSummary />

          <div>
            <h5 className="mb-1 text-gray-400">Price Summary</h5>
            <div className="flex flex-col gap-3 bg-gray-100 rounded-md py-3 px-6">
              {priceSummary().map((item, index) => (
                <div key={index} className="w-full flex justify-between">
                  <h6 className="font-medium text-gray-600">{item.name}</h6>
                  <h6 className="font-medium text-gray-600">{item.value}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button> Book Now </Button>
      </div>
    </section>
  );
}

export default BookHotel;
