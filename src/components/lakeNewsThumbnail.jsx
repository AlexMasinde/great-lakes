function LakeNewsThumbnail() {
  return (
    <div className="flex w-[100%] justify-between border-b-5 border-[#ffcc00] pb-3">
      <div className="h-60 flex flex-col rounded-lg mt-4 w-96">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 flex flex-1 flex-col rounded-lg justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-extralight text-[#ffcc00]">
              59,947 km<sup>2</sup>
            </h2>
            <p className="text-white text-xl mt-2 font-extralight">
              Surface Area
            </p>
          </div>
        </div>
      </div>
      <div className="h-60 flex flex-col rounded-lg mt-4 w-96">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 flex flex-1 flex-col rounded-lg justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-extralight text-[#ffcc00]">
              2,424 km<sup>2</sup>
            </h2>
            <p className="text-white text-xl mt-2 font-extralight">
              Water Volume
            </p>
          </div>
        </div>
      </div>
      <div className="h-60 flex flex-col rounded-lg mt-4 w-96">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 flex flex-1 flex-col rounded-lg justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-extralight text-[#ffcc00]">40.4 m</h2>
            <p className="text-white text-xl mt-2 font-extralight">
              Average Depth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
