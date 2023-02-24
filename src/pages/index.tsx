import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Bible from "@/components/Bible";
import Dictionary from "../components/Dictionary";

const queryClient = new QueryClient();

export default function Home() {
  const [sNumber, setSNumber] = useState("");

  const updateSNumber = (SN: string): void => {
    setSNumber(SN);
  };

  return (
    <>
      <div className="text-xl bg-gray-500 text-white p-2 font-bold font-serif">
        Reverse Interlinear Bible
      </div>
      <QueryClientProvider client={queryClient}>
        <div
          className={`grid ${
            sNumber ? "grid-cols-5" : "grid-cols-2"
          } bg-gray-50 gap-2 m-1 fixed`}
        >
          <div className="border col-span-3 border-black shadow-sm shadow-gray-800 rounded">
            <Bible setSNumber={setSNumber} />
          </div>
          {sNumber && (
            <div className="border col-span-2 border-black shadow-sm shadow-gray-800 rounded">
              <Dictionary sNumber={sNumber} updateSNumber={updateSNumber} />
            </div>
          )}
        </div>
      </QueryClientProvider>
    </>
  );
}
