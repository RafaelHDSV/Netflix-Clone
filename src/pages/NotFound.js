import { useState } from "react"
import Header from "../components/Header"

import "../App.css"

export default () => {
    // visibilidade de fundo do header
    const [backgroundHeader, setBackgroundHeader] = useState(false)

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