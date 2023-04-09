import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)

    const fetchData = async() => {
        setisLoading(true);
        try {
            const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist,explicit&amount=3')
            setdata(res.data.amount)
            setisLoading(false)
        } catch (error) {
            seterror(error)
            alert('error occure')
        } finally {
            setisLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const refetch = () => {
        setisLoading(true)
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch