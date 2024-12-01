import { Suspense } from "react";
import DateOfToday from "../_components/DateOfToday";
import HotelList from "../_components/HotelList";
import Spinner from "../_components/Spinner";
import SearchBar from "../_components/SearchBar";

async function Hotels({ searchParams }) {
  const params = await searchParams;
  const filter = params?.location ?? "all";
  return (
    <section className="flex flex-col gap-4 h-full">
      {/* Search */}
      <div className="flex justify-between bg-gray-50 items-center mb-2">
        <DateOfToday />
        <SearchBar />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <HotelList filter={filter} />
      </Suspense>
    </section>
  );
}

export default Hotels;
