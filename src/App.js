import React, { useState, useEffect } from "react"

import Tmdb from './components/Tmdb';
import Header from "./components/Header"
import MainMovie from "./components/MainMovie";
import MovieRow from "./components/MovieRow";
// import Movie from "./movie/Movie";

import './App.css';

function App() {
  // armazenar listas de filme
  const [movieList, setMovieList] = useState([])

  // armazenar dados do filme principal
  const [mainMovieData, setMainMovieData] = useState(null)

  // visibilidade de fundo do header
  const [backgroundHeader, setBackgroundHeader] = useState(false)

  // converter lista da função para json
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // aleatorizar filme principal de acordo com os originais netflix
      let originalsNetflix = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originalsNetflix[0].itens.results.length - 1))
      let movieChosen = originalsNetflix[0].itens.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(movieChosen.id, "tv")
      setMainMovieData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBackgroundHeader(true)
      } else {
        setBackgroundHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  // <Movie></Movie>
  return (
    <main>
      {/* header */}
      <Header
        black={backgroundHeader}
      ></Header>

      {/* filme principal */}
      {mainMovieData &&
        <MainMovie
          item={mainMovieData}
        ></MainMovie>
      }

      {/* lista de filmes */}
      <section className="lists">
        {
          movieList.map((item, key) => (
            <div>
              <MovieRow
                key={key}
                title={item.title}
                itens={item.itens}>
              </MovieRow>
            </div>
          ))
        }
      </section>

      <footer>
        <p>Coded by <a href="https://github.com/RafaelHDSV" target="_blank">Rafael Henrique de Sousa Vieira</a>.</p>
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="loading" />
        </div>
      }
    </main >
  )
}

export default App;
