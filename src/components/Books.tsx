// import Select from 'react-select'
import { useQuery } from 'react-query'

type book = {
    active: boolean
    book:{
        bookId: number
        bookName: string
        bookCode :string
    }
}

type BooksProps ={
    book :string
    setBook : (book:string)=>void
}

export default function Books({book,setBook}:BooksProps){
    const { isLoading, data } = useQuery('books', () =>
        fetch('https://stagingapi.vachanengine.org/v2/bibles/en_KJV_1_bible/books').then(res =>
            res.json()
        )
    )
    function handleChange(e:React.ChangeEvent<HTMLSelectElement>){
       setBook(e.target.value)
    }
    if (isLoading) return<div> Loading...</div>
    return (
        <select className="p-2 m-2 hover:bg-gray-100 border border-black rounded " onChange={handleChange}>
            {data.map((item:book)=>(
                <option className="" value={item.book.bookCode} key={item.book.bookName}> {item.book.bookName} </option>
            ))}
        </select>
    )
}