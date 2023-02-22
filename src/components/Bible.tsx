import { useState } from 'react';
import Books from './Books'
import Chapters from './Chapters'

// type book = {
//     active: boolean
//     book:{
//         bookId: number
//         bookName: string
//         bookCode :string
//     }
// }

const Bible = () => {
   const [book, setBook] = useState<string>("")
   const [chapter, setChapter] = useState<number>(1)
   const [verse, setVerse] = useState<string>("")
   console.log(book)
    return (
        <>
            <div><Books book={book} setBook={setBook} /></div>
            <div><Chapters chapter={chapter} setChapter={setChapter} /></div>
            <div>Verse</div>
            <div>UI</div>
        </>
    )
}

export default Bible;