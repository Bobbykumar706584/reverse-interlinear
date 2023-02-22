import { useState } from "react";
import Select from 'react-select'

export default function Books({ books }) {

    const [selectValue, setSelectValue] = useState('');

    const options: any = []
    books.map((item) => {
        options.push({ "label": item.book.bookName, "value": item.book.bookCode })
    })

    const onChange = (selectedOption) => {
        return selectedOption?.label
    };

    console.log(selectValue)
    return (
        <Select
            defaultValue={selectValue}
            className="w-72 m-2"
            isClearable={true}
            isSearchable={true}
            name="bookName"
            options={options}
            onChange={onChange}
        />
    )
}