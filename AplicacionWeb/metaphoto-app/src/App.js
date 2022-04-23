import { useState, useEffect } from "react";

function App() {

 const [info, setInfo] = useState([]);

    useEffect(() => {
      
        fetch("http://localhost:5000/api/MetaPhoto/photos?album.title=quidem")        
        .then( response => response.json())
        .then( data => {
            console.log(data)
            setInfo(data)           
        })
        .catch( error => console.log(error))
    
      return () => {
      }
    }, [])
    
    return (
        <div>
            {                                
                info.arreglofiltrado.map((element) => ( <div>{element.title}</div>) )
            }            
        </div>
    );
}

export default App;