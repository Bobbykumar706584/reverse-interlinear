import { useState } from "react";
import Select from 'react-select'

export default function Books({ books }) {

    const [selectValue, setSelectValue] = useState('');

    const options: any = []
    books.map((item) => {
        options.push({ "label": item.book.bookName, "value": item.book.bookCode })
    })

    const onChange = (selectedOption) => {
        setSelectValue(selectedOption?.label)
    };
    console.log(onChange)

    console.log(selectValue, 'value')
    return (
        <>
        <Select
            defaultValue={selectValue}
            className="w-72 m-2"
            isClearable={true}
            isSearchable={true}
            name="bookName"
            options={options}
            onChange={onChange}
        />
        <div className={`${selectValue ? 'block':'hidden'}`}>Jesus Is Tested in the Wilderness

4 Then Jesus was led by the Spirit into the wilderness to be tempted[a] by the devil. 2 After fasting forty days and forty nights, he was hungry. 3 The tempter came to him and said, “If you are the Son of God, tell these stones to become bread.”

4 Jesus answered, “It is written: ‘Man shall not live on bread alone, but on every word that comes from the mouth of God.’[b]”

5 Then the devil took him to the holy city and had him stand on the highest point of the temple. 6 “If you are the Son of God,” he said, “throw yourself down. For it is written:

“‘He will command his angels concerning you,
    and they will lift you up in their hands,
    so that you will not strike your foot against a stone.’[c]”

7 Jesus answered him, “It is also written: ‘Do not put the Lord your God to the test.’[d]”

8 Again, the devil took him to a very high mountain and showed him all the kingdoms of the world and their splendor. 9 “All this I will give you,” he said, “if you will bow down and worship me.”</div>
        </>

    )
}