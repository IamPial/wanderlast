import { Button } from "@heroui/react";
import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";

import { LuMapPin } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  const { destinationName, country, category, duration, imageUrl, price } =
    destination;
  return (
    <div className="">
      <Image
        src={imageUrl}
        width={400}
        height={400}
        alt={destinationName}
        className="h-60  w-full"
      />
      <div className="">
        <p className="flex gap-2 items-center text-sm text-gray-600 mt-3">
          <LuMapPin /> <span>{country}</span>
        </p>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            {destinationName}
          </h2>
          <p className="text-2xl">
            ${price}/<span className="text-xs text-gray-500">Person</span>{" "}
          </p>
        </div>
        <p className="flex items-center gap-3 mt-3 font-semibold text-gray-500">
          <BsCalendar2Date className="text-gray-600" /> {duration}
        </p>
      </div>
      <div>
        <Button className="bg-white text-sky-500 px-0 uppercase underline">
          Book Now <MdArrowOutward />
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
