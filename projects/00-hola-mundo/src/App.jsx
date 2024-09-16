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
                initialIsFollowing={true}
            />
            <XFollowCard 
                formatUserName={formatUserName} 
                userName="pheralb" 
                name="Javier" 
                // isFollowing={false} 
            />
            <XFollowCard 
                formatUserName={formatUserName} 
                 
                name="Javier" 
                // isFollowing 
            />
        </section>
        
    )
}
