import { useEffect } from "react";
import { useState } from "react"

const Card =({title}) =>{

    //is a React state declaration using the useState hook
    //When clicked, setHasLiked updates the state to true, changing the button text to "Unlike"
    const[hasLiked,setHasLiked] = useState(false);
         
    useEffect()


    return(

        <div  className="card" >
            <h2>{title}</h2>


<button onClick={ ()=>setHasLiked(!hasLiked)}>
    {hasLiked ? "❤️": "🤍"}
</button>

        </div>
    )

}


const App =() =>{

    
return(

    <div className="card-container">

<Card title="Star Wars"/>
<Card title="Avatar"/>
<Card title="The Lion king"/>
    </div>


)

}

export default App
