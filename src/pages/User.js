import { useState } from "react"

import Header from "../components/Header"

const User = () => {
    // visibilidade de fundo do header
    const [backgroundHeader] = useState(false)
    const [userSelect, setUserSelect] = useState()

    const usersList = [
        {
            name: "Robin",
            src: "../images/logo3.png",
        },

        {
            name: "Sarah",
            src: "../images/logo4.png",
        },

        {
            name: "Dustin",
            src: "../images/logo1.png",
        },

        {
            name: "Nelson",
            src: "../images/logo2.png",
        },

        {
            name: "Kids",
            src: "../images/logo5.png",
        }
    ]

    const handleUser = (userSrc) => {
        setUserSelect(userSrc)
        localStorage.setItem("user", userSrc)
    }


    return (
        <main className="user-main">
            {/* header */}
            < Header
                black={backgroundHeader}>
            </ Header >

            <h2>Quem está assistindo?</h2>

            <div className="users">
                {usersList.map((user) => (
                    <div className="user">
                        <img
                            src={user.src}
                            alt={user.name}
                            onClick={() => handleUser(user.src)}
                        />
                        <span>{user.name}</span>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default User