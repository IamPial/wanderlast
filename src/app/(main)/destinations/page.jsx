import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinationData = await res.json();
  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <div className="space-y-2 mt-2">
        <h2 className=" text-4xl">Explore All Destinations</h2>
        <p className="text-[16px] text-gray-600 my-3">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinationData.map((destination) => {
          return (
            <DestinationCard key={destination._id} destination={destination} />
          );
        })}
      </div>
    </div>
  );
};

export default DestinationPage;
