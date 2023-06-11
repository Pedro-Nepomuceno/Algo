import { useEffect } from "react";

const MyComponent = () ={
const [data, setData] = useState([]);
const [isLoading, setIsloading] = useState(true);

useEffect(()=>{
    const fetchData = async ()=>{
    try{
        const response = await fetch(someUrl);
        const responseJson = await response.json();
        setData(responseJson);
        setIsloading(false);
    }
    catch(error){


    }
    }



    return fetchData
},[]);



}