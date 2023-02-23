// import Select from 'react-select'
import { useQuery } from 'react-query'
// type data={
//     maxVerses: 
// }
import { chapterData } from './Data/chapterData';

// type chapter = {
//     active: boolean
//     chapter:{
//         bookCode :string
//         count: number
//     }
// }

// type ChapterProps ={
//     chapter :number
//     setChapter : (chapter:number)=>void
// }

const chapterDataObj = Object.values(chapterData.maxVerses)

console.log("kkkkkkkkkk",typeof(chapterDataObj));


export default function Chapters(){
    
    function handleChange(){
    //    setChapter(e.target.value)
    console.log("ji")
    }
    return (
        <select className="p-2 m-2 hover:bg-gray-100 border border-black rounded " onChange={handleChange}>
            {/* {data.map((item:chapter)=>(
                <option className="" value={item.chapter.bookCode} key={item.chapter.bookCode}> {item.chapter.chapter} </option>
            ))} */}
        </select>
    )
}