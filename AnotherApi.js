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

console.log(`error fetching data ${error}`)
setIsloading(false);
    }
    }



    return fetchData
},[]);

return(

<div>
<ul>
{data.map((item) =>{
    <li key={item.id}>{item.name}</li>
}) }
</ul>
</div>

)

function findPairSun(array,sum){
    let map = {};
    
}



