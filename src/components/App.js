// create your App component here((

import React,{useState,useEffect} from "react";

function App () {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch (`https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then(data => {
            setImageUrl(data.message);
            setIsLoading(false);
        })
    
    .catch(error => console.error('Error fetching the image:' , error));

}, []);

return (
    <>
    <div>
        {isLoading ? (
        <p>Loading...</p>
        ) : (
         <img src={imageUrl} alt= "A Random Dog"/> 
        )}
    </div>
    </>
)
}
export default App;