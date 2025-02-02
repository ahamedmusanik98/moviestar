import { useEffect } from "react";
import { useState } from "react"

const Card =({title}) =>{

const[count,setCount]=useState(0);

    //is a React state declaration using the useState hook
    //When clicked, setHasLiked updates the state to true, changing the button text to "Unlike"
    const[hasLiked,setHasLiked] = useState(false);


         //used to check activity on console 37:57
    useEffect(()=>{console.log(`${title} has been liked : ${hasLiked}`)});


    return(

        <div  className="card"  onClick={()=>setCount((prevState) =>prevState+1)} >
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
