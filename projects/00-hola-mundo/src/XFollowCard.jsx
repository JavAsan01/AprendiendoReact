import { useState } from 'react'

export function XFollowCard({formatUserName, userName='unknow', name, initialIsFollowing }){

    //console.log(isFollowing) //solo es para ver en consola los datos

    const [isFollowing , setIsFollowing] = useState(initialIsFollowing)

    const text= isFollowing ? 'Siguiendo' : 'Seguir'
    const buttomClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard" >
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar"
                alt="Avatar" src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                {/* <button className="tw-followCard-button"> */}
                <button className={buttomClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}