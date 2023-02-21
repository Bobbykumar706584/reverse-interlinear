import Dictionary from "./Components/Dictionary";

export default function Home() {
  return (
    <>
      <div className="text-xl bg-gray-300 p-2 font-thin">
        Reverse Interlinear Bible
      </div>
      <div className="grid grid-cols-5 bg-gray-50 gap-2 m-1 ">
        <div className="border col-span-3 border-black shadow-sm shadow-gray-800 rounded">
          world
        </div>
        <div className="border col-span-2  border-black shadow-sm shadow-gray-800 rounded">
          <Dictionary />
        </div>
      </div>
    </>
  );
}
