import { useState } from "react";
import Select from "react-select";
import { useQuery } from "react-query";

export default function SearchStrongsNumber() {
    let limit;
    const { isLoading, data } = useQuery("searchData", async () => {
        const res = await fetch(
            `/api/dictionary?limit=100`
        );
        
        const tokens = await res.json();
        if(tokens.length > 100){
            return tokens;

        }
    });
    if (isLoading) return <div>Loading...</div>;

    console.log(data, 'datal')

    const options: any = [];
    data?.map((item) => {
        options.push({ label: item.strongsNumber, value: item.strongsNumber });
    });

    // console.log("ssssssssssssssss",options)

    return (
        <div className="flex item-center justify-end mr-4">
            {/* <div className="mt-6">Search : </div> */}
            <Select
                // options={options}
                isSearchable={true}
                className="w-96 mt-4 ml-2"
                placeholder="Search Strongs Number"
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                onChange={(option) => {
                    setBook(option);
                    setSelectValue(option || undefined);
                }}
            />
        </div>
    )
}