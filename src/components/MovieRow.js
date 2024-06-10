import { useState } from "react"

import "../App.css"

export default ({ title, itens, id }) => {
    // localização na coordenada X
    const [scrollX, setScrollX] = useState(0)
    // opacidade da leftArrow
    const [leftArrowVisible, setLeftArrowVisible] = useState(0)
    // opacidade da rightArrow
    const [rightArrowVisible, setRightArrowVisible] = useState(100)

    // funcionalidade da seta da esquerda
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        let listWidth = itens.results.length * 150

        if (x > -10) {
            x = 0
            setLeftArrowVisible(0)
        }

        if (x < 0) {
            setLeftArrowVisible(100)
        }

        if (x >= window.innerWidth - listWidth - 60) {
            setRightArrowVisible(100)
        }

        setScrollX(x)
    }

    // funcionalidade da seta da direita
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = itens.results.length * 150

        if (window.innerWidth - listWidth > x) {
            x = window.innerWidth - listWidth - 60

            if (x <= window.innerWidth - listWidth - 60) {
                setRightArrowVisible(0)
            }
        }

        if (x < 0) {
            setLeftArrowVisible(100)
        }

        if (window.innerWidth - listWidth < x) {
            setLeftArrowVisible(100)
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
                    {/* seta para esquerda */}
                    <img
                        className="navigate-left"
                        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                        alt="navigate-left"
                        style={{
                            opacity: `${leftArrowVisible}%`
                        }}
                        onClick={handleLeftArrow} />

                    {/* requisição de todas as imagens */}
                    {itens.results.length > 0 && itens.results.map((item, id) => (
                        <a a href={`/movie/${!item.original_title ? "tv_" : ""}${item.id}`} key={id} className="movie-item" >
                            < img
                                key={id}
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title}
                            />
                        </a>
                    ))}

                    {/* seta para direita */}
                    <img
                        className="navigate-right"
                        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                        alt="navigate-right"
                        style={{
                            opacity: `${rightArrowVisible}%`
                        }}
                        onClick={handleRightArrow} />
                </div>
            </div>
        </div >
    )
}