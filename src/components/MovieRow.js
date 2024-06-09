import { useState } from "react"

import "../App.css"

export default ({ title, itens }) => {
    const [scrollX, setScrollX] = useState(0)

    // funcionalidade da seta da esquerda
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)

        if (x > 0) {
            x = 0
        }

        setScrollX(x)
    }

    // funcionalidade da seta da direita
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = itens.results.length * 150

        if (window.innerWidth - listWidth > x) {
            x = window.innerWidth - listWidth - 60
        }

        setScrollX(x)
    }

    return (
        <div className="movies-container">
            <h2>{title}</h2>

            <div className="movies">
                <div className="row-list" style={{
                    marginLeft: scrollX,
                    width: itens.results.length * 150
                }}>
                    <img
                        className="navigate-left"
                        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                        alt="navigate-left"
                        onClick={handleLeftArrow} />

                    {/* requisição de todas as imagens */}
                    {itens.results.length > 0 && itens.results.map((item) => (
                        <div className="movie-item">
                            < img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title}
                            />
                        </div>
                    ))}

                    <img
                        className="navigate-right"
                        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                        alt="navigate-right"
                        onClick={handleRightArrow} />
                </div>
            </div>
        </div>
    )
}