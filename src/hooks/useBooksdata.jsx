import { useEffect, useState } from "react";


const useBooksdata = (element) => {

    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        fetch(element)
        .then(res => res.json())
        .then(data => setBooks(data.bookStore))
        setLoading(false)
    },[])


    return {books, loading}
};

export default useBooksdata;