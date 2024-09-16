// import React from 'react'  React.Fragment
import './App.css'
import { XFollowCard } from "./XFollowCard.jsx"

export function App (){
    const formatUserName=(userName)=>`@${userName}`
    return (
        <section className="App">
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="midudev" 
                name="Javier" 
                isFollowing={true}
            />
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="pheralb" 
                name="Javier" 
                isFollowing={false} 
            />
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="JavAsan" 
                name="Javier" 
                isFollowing 
            />
        </section>
        
    )
}