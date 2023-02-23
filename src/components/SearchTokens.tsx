import { useState } from "react";
import Select from "react-select";
import { useQuery } from "react-query";

export default function SearchTokens() {
    const { isLoading, data } = useQuery("searchData", async () => {
        const res = await fetch(
            "/api/dictionary"
        );
        const tokens = await res.json();
        return tokens;
    });
    if (isLoading) return <div>Loading...</div>;

    data?.map(item => {
        console.log(item, 'itme')
    })

    return (
        <div className="flex item-center justify-end mr-4">
            <div className="mt-6">Search : </div>
            <Select
                // options={data}
                isSearchable={true}
                className="w-96 mt-4 ml-2" 
                 />
        </div>
    )
}