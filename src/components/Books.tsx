import { useState } from "react";

export default function Books({books}){
    return (
        <select>
            {books.map(item => {
                {console.log(item.book.bookName, 'hello')}
                <option value={item.book.bookName}>{item.book.bookName}</option>
            })}
        </select>
    )
}