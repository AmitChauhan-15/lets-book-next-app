"use client";
import { format, add } from "date-fns";
import { useEffect, useState } from "react";

function BookingSummary() {
  const [bookingSummary, setBookingSummary] = useState([]);

  useEffect(() => {
    setBookingSummary([{ name: "Check-In", date: format(new Date(), "dd MMM, yy") }, null, { name: "Check-Out", date: format(add(new Date(), { days: 2 }), "dd MMM, yy") }]);
  }, []);

  return (
    <div>
      <h5 className="mb-1 text-gray-400">Booking Summary</h5>
      <div className="flex justify-between bg-gray-100 rounded-md py-3 px-6">
        {bookingSummary.map((item, index) =>
          item ? (
            <div key={index}>
              <h6 className="text-sm text-gray-600 mb-2">{item.name}</h6>
              <span className="text-lg font-semibold">{item.date}</span>
            </div>
          ) : (
            <span key={index} className="flex-1 max-w-px bg-gray-400"></span>
          )
        )}
      </div>
    </div>
  );
}

export default BookingSummary;
