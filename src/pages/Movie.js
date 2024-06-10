import { useState, useEffect } from "react"

import Tmdb from "../components/Tmdb"
import Header from "../components/Header"

import "../App.css"

export default () => {
    // armazenar o filme escolhido
    const [movie, setMovie] = useState([])

    // visibilidade de fundo do header
    const [backgroundHeader, setBackgroundHeader] = useState(false)

    // selecionar id do filme pela URL
    let idMovie = window.location.href.substring(28, 40)

    // selecionar o tipo do filme pela URL
    let type = window.location.href.substring(28, 30)
    if (type != "tv") {
        type = "movie"
    } else {
        idMovie = idMovie.substring(10, 3)
    }

    // converter lista da função para json
    useEffect(() => {
        const loadMovie = async () => {
            let movie = await Tmdb.getMovieInfo(idMovie, type)
            console.log(type);
            console.log(idMovie);
            setMovie(movie)
        }

        loadMovie()
    }, [])

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

    // formatar companhias de TV da API
    let networks = []
    for (let i in movie.networks) {
        networks.push(movie.networks[i].name)
    }

    // formatar companhias de filmes da API
    let companies = []
    for (let i in movie.production_companies) {
        companies.push(movie.production_companies[i].name)
    }

    return (
        <div className="movieTESTE">
            {/* header */}
            <Header
                black={backgroundHeader}
            ></Header>

            {/* lisa de informações que posso puxar da API */}
            {createdBy.length > 0 ? <p>Criador{createdBy.length > 1 ? "es" : ""}: {createdBy.join(', ', "")}</p> : ""}
            {movie.first_air_date ? <p>Data de lançamento: {movie.first_air_date}</p> : ""}
            {movie.budget ? <p>Orçamento: {movie.budget.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p> : ""}
            {genres ? <p>Gêneros: {genres.join(', ', "")}</p> : ""}
            {movie.id ? <p>ID: {movie.id}</p> : ""}
            {movie.last_air_date ? <p>Última transmissão: {movie.last_air_date}</p> : ""}
            {movie.name ? <p>Nome: {movie.name}</p> : ""}
            {movie.networks ? <p>Companhia{networks.length > 1 ? "s" : ""}: {networks.join(', ', "")}</p> : ""}
            {movie.companies ? <p>Companhia{companies.length > 1 ? "s" : ""}: {companies.join(', ', "")}</p> : ""}
            {movie.number_of_episodes ? <p>Número de episódios: {movie.number_of_episodes}</p> : ""}
            {movie.number_of_seasons ? <p>Número de temporadas: {movie.number_of_seasons}</p> : ""}
            {movie.original_language ? <p>Língua original: {movie.original_language}</p> : ""}
            {movie.original_title ? <p>Título original: {movie.original_title}</p> : ""}
            {movie.original_name ? <p>Nome original: {movie.original_name}</p> : ""}
            {movie.overview ? <p>Descrição: {movie.overview}</p> : ""}
            {movie.popularity ? <p>Popularidade: {movie.popularity}</p> : ""}
            {movie.revenue ? <p>Lucro: {movie.revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p> : ""}
            {movie.status ? <p>Status: {movie.status}</p> : ""}
            {movie.vote_average ? <p>Nota: {movie.vote_average.toFixed(1)}</p> : ""}
            {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_name} /> : ""}
        </div>
    )
}