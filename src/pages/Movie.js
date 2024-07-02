import { useState, useEffect } from "react"

import Tmdb from "../api/Tmdb"
import Header from "../components/Header"

import "../App.css"

const Movie = () => {
    // armazenar o filme escolhido
    const [movie, setMovie] = useState([])

    // visibilidade de fundo do header
    const [backgroundHeader] = useState(false)

    // selecionar id do filme pela URL
    let idMovie = window.location.href.substring(49, 60)

    // selecionar o tipo do filme pela URL
    let type = window.location.href.substring(45, 47)
    console.log(window.location.href.substring(45, 47));
    if (type !== "tv") {
        type = "movie"
    } else {
        idMovie = idMovie.substring(10, 3)
    }

    // converter lista da função para json
    useEffect(() => {
        const loadMovie = async () => {
            let movie = await Tmdb.getMovieInfo(idMovie, type)
            setMovie(movie)
        }

        loadMovie()
    }, [idMovie, type])

    // formatar criadores da API
    let createdBy = []
    for (let i in movie.created_by) {
        createdBy.push(movie.created_by[i].name)
    }

    // formatar generos da API
    let genres = []
    for (let i in movie.genres) {
        genres.push(movie.genres[i].name)
    }

    // formatar companhias de filmes da API
    let companies = []
    for (let i in movie.production_companies) {
        companies.push(movie.production_companies[i].name)
    }

    // formatação de datas
    let dateMovie = new Date(movie.release_date)

    let firstDateSerie = new Date(movie.first_air_date)
    let lastDateSerie = new Date(movie.last_air_date)

    let dateSerie = `${firstDateSerie.getFullYear()} - ${lastDateSerie.getFullYear()}`

    return (
        <main className="movie-main">
            {/* header */}
            <Header
                black={backgroundHeader}
                optionSelect={type === "tv" ? "Séries" : "Filmes"}
            ></Header>

            <div className="movie-container">
                {movie.poster_path ? <img className="img-movie" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_name} /> : ""}

                <div className="movie-info">
                    {movie.title ? <h2>{movie.title}</h2> : ""}
                    {movie.name ? <h2>{movie.name}</h2> : ""}

                    <div className="tags">
                        {movie.vote_average ? <span>{movie.vote_average.toFixed(1)}</span> : ""}
                        {dateMovie >= 0 ? <span>{dateMovie.getFullYear()}</span> : ""}
                        {movie.first_air_date ? <span>{dateSerie}</span> : ""}
                        {movie.original_language ? <span>{movie.original_language}</span> : ""}
                        {companies.length > 0 ? <span className="text-wrap">{companies.join(', ', "")}</span> : ""}
                    </div>

                    {movie.overview ? <p className="description">{movie.overview}</p> : ""}
                    {genres ? <p><strong>Gênero{genres.length > 1 ? "s" : ""}: </strong>{genres.join(', ', "")}</p> : ""}
                    {movie.budget ? <p><strong>Orçamento: </strong>{movie.budget.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p> : ""}
                    {movie.revenue ? <p><strong>Lucro: </strong>{movie.revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p> : ""}
                    {movie.number_of_seasons ? <p><strong>Temporada{movie.number_of_seasons > 1 ? "s" : ""}: </strong> {movie.number_of_seasons}</p> : ""}
                    {movie.number_of_episodes ? <p><strong>Episódio{movie.number_of_episodes > 1 ? "s" : ""}: </strong> {movie.number_of_episodes}</p> : ""}
                    {createdBy.length > 0 ? <p><strong>Criador{createdBy.length > 1 ? "es" : ""}: </strong>{createdBy.join(', ', "")}</p> : ""}
                </div>
            </div>

            {
                movie.length <= 0 &&
                <div className="loading">
                    <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="loading" />
                </div>
            }
        </main >
    )
}

export default Movie