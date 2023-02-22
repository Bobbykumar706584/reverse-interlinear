import { useState } from "react";
import Select from 'react-select'

export default function Books({books}){
    return (
        <select className="p-2 m-2 hover:bg-gray-100 border border-black rounded ">
            {books.map((item)=>(
                <option className="" value={item.book.bookName} key={item.book.bookName}> {item.book.bookName} </option>
            ))}
        </select>
    )
}