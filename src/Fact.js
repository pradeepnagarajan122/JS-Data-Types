
import React, { useEffect, useState } from 'react'


function Fact() { 

    const [Factcatfact, setFactcatfact] = useState('')

    useEffect(()=>{
        fetch(`https://catfact.ninja/fact`)
        .then(res=>res.json())
        .then(catfact=>{

            console.log('Received data is: ',catfact)
            console.log('Received data is: ',catfact.fact)
    
            setFactcatfact(catfact.fact)



        })
        .catch(err=>console.log('Error found in fetching: ',err))
    },[])



   return (
    <div>
        <h1>pradeep</h1>
        <p>data: {Factcatfact}</p>
        
    </div>
   )

}
export default Fact