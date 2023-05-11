import { useState } from "react";
import { useEffect } from "react"
import apiClient from "../services/api-client";

function Games() {
  const [games, setGames]= useState([]);      
  const [error, setError]= useState("default")
  useEffect(()=>{
    apiClient.get('/games').then(result=>{
    setGames(result.data.results)
    }).catch(err=>setError(err.message))
  },[])  
  return (
   <ul>{
    error=="default"? games.map(eachGame=>{
        return <li key={eachGame.id}>{eachGame.name}</li>
    }):<p>{error}</p>
    }</ul>
  )
}

export default Games