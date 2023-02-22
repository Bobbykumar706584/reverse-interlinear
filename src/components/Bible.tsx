import { useState } from 'react'
import { useQuery } from 'react-query'
import Books from './Books'


const Bible = () => {
    const { isLoading, data } = useQuery('repoData', () =>
        fetch('https://stagingapi.vachanengine.org/v2/bibles/en_KJV_1_bible/books').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'
    console.log(data)
    return (
        <>
            <div>Header</div>
            <div><Books books={data}/></div>
            <div>Chapter</div>
            <div>Verse</div>
            <div>UI</div>
        </>
    )
}

export default Bible;