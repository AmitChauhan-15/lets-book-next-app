"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";

function DateOfToday() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div className="flex gap-3 items-center">
      <h4 className="text-4xl"> {date ? format(date, "dd") : ""}</h4>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{date ? format(date, "EEEE") : ""}</span>
        <span className="text-xs text-gray-400">{date ? format(date, "MMMM yyyy") : ""}</span>
      </div>
    </div>
  );
}

export default DateOfToday;
