import { useEffect, useState } from "react";


const useBooksdata = () => {

    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        fetch("../../public/books.json")
        .then(res => res.json())
        .then(data => setBooks(data.bookStore))
        setLoading(false)
    },[])


    return {books, loading}
};

export default useBooksdata;