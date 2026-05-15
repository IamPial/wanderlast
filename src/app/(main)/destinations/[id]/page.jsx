import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoMdArrowForward, IoMdCheckmark } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { Button } from "@heroui/react";
import Link from "next/link";
import { format } from "date-fns";

// category: "Mountain";
// country: "Newzeland";
// departureDate: "2026-10-08";
// description: "The sea is one of Earth's most breathtaking and powerful forces of nature. Stretching endlessly to the horizon, its surface shifts constantly — now a calm, glassy mirror reflecting the sky, now a churning mass of white-capped waves rolling in rhythmic succession toward the shore.The ocean's color changes with the light and depth — deep sapphire blue in open waters, turquoise and emerald near shallow coasts, and silver-grey beneath stormy skies. Sunlight dances across the surface in thousands of glittering fragments, while beneath the waves, a whole silent world moves in filtered blue light.The ShoreWhere the sea meets the land, waves break with a thunderous crash, dissolving into white foam that hisses and retreats over wet sand or smooth pebbles. The air here is thick with salt, cool and fresh, filling the lungs with every breath.At sunrise and sunset, the sea becomes a canvas — blazing oranges, deep purples, and warm golds reflected perfectly on the water's surface. The horizon is infinite, where sky and sea blur into one seamless line.The sea is never silent. Waves rise, curl, and crash in a steady, ancient rhythm. Seagulls cry overhead. The wind hums across the water. Together they create a timeless soundtrack — calming, wild, and deeply alive.Beneath the surface, coral reefs burst with color, fish dart in silver schools, and sea plants sway gently with the current. Dolphins leap near the bow of boats, and whales breach in the open deep, reminding us how vast and alive the ocean truly is.";
// destinationName: "Sea Nature";
// duration: "7 Days / 6 Night";
// imageUrl: "https://cdn.pixabay.com/photo/2021/12/15/20/21/sea-6873335_1280.jpg";
// price: "1000";
// _id: "6a059e934deac92ae81be11a";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const details = await res.json();
  const {
    departureDate,
    destinationName,
    imageUrl,
    duration,
    price,
    description,
    country,
  } = details;

  return (
    <div className="container mx-auto px-2 md:px-0 pt-4">
      <Image
        src={imageUrl}
        alt="Plane"
        width={600}
        height={600}
        className=" h-100 md:h-screen w-full pb-12"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-10 pb-12 ">
        <div className="col-span-1 lg:col-span-8 xl:col-span-9 space-y-7">
          <div>
            <p className="flex gap-2 items-center  text-gray-600 mb-3">
              <LuMapPin /> <span>{country}</span>
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-4xl  text-slate-900">{destinationName}</h2>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <p className="flex items-center gap-2">
                <FaStar className="text-green-500" /> 4.9{" "}
                <span className="text-gray-500 text-xs">(234 reviews)</span>
              </p>
              <p className="flex items-center gap-2 font-semibold text-slate-800">
                <BsCalendar2Date className="text-gray-600" />
                {duration}
              </p>
            </div>
          </div>
          <div className="space-y-3 mt-5">
            <h2 className="text-3xl">Overview</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
          <div>
            <h2 className="text-3xl">Highlights</h2>
            <p className="mt-5 text-lg text-gray-600">{description}</p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <ul className="space-y-3 text-[#6C696D]">
                <li className="flex items-center gap-2">
                  <IoMdCheckmark className="text-green-500" /> Luxury beachfront
                  accommodation
                </li>
                <li className="flex items-center gap-2">
                  <IoMdCheckmark className="text-green-500" /> Traditional
                  Balinese spa treatment
                </li>
                <li className="flex items-center gap-2">
                  <IoMdCheckmark className="text-green-500" /> Sunrise trek to
                  Mount Batur
                </li>
              </ul>
              <ul className="space-y-3 text-[#6C696D]">
                <li className="flex items-center gap-2">
                  <IoMdCheckmark className="text-green-500" /> Visit Uluwatu
                  Temple at sunset
                </li>
                <li className="flex items-center gap-2">
                  <IoMdCheckmark className="text-green-500" /> Private beach
                  dinner experience
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4 xl:col-span-3  border border-gray-200 p-5 space-y-10 shadow-md h-[70vh]">
          <div className="flex flex-col ">
            <span className="text-gray-500">Starting from</span>
            <span className="text-4xl text-sky-500">${price}</span>
            <span className="text-gray-500">per person</span>
          </div>
          <div className="border p-4">
            <span className="">
              {format(new Date(departureDate), "MM/dd/yyyy")}{" "}
            </span>
          </div>
          <Link href="#">
            <Button className="w-full font-normal text-lg rounded-none py-6 flex items-center">
              Book Now <IoMdArrowForward />
            </Button>
          </Link>
          <ul className="mt-5">
            <li className="flex items-center gap-2">
              <IoMdCheckmark className="text-green-500" />
              Free cancellation up to 7 days
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark className="text-green-500" />
              Travel insurance included
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark className="text-green-500" />
              24/7 customer support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
