import { useState } from "react"
import Header from "../components/Header"

import "../App.css"

const NotFound = () => {
    // visibilidade de fundo do header
    const [backgroundHeader] = useState(false)

    return (
        <>
            {/* header */}
            < Header
                black={backgroundHeader}
            ></Header>

            <h1 className="not-found-text">
                Sua página não foi encontrada ou não existe!
            </h1>
        </>
    )
}

export default NotFound
