// constante para requesição da API
const API_BASE = "https://api.themoviedb.org/3/"
const API_KEY = "f97d901cff4b1101788d9c45d098b680"

// função para fazer o fetch da API e transformar em JSON
const fetchFunction = async (queryInput) => {
    const req = await fetch(`${API_BASE}${queryInput}`)
    const json = await req.json()

    return json
}

export default {
    // função para separar as informações em categorias
    getHomeList: async () => {
        return [
            {
                id: "1",
                slug: "originals",
                title: "Originais da Netflix",
                itens: await fetchFunction(`discover/tv?api_key=${API_KEY}&language=pt-BR?&with_networks=213`),
            },

            {
                id: "2",
                slug: "trending",
                title: "Recomendados para Você",
                itens: await fetchFunction(`trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },

            {
                id: "3",
                slug: "toprated",
                title: "Em Alta",
                itens: await fetchFunction(`movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },

            // categorias por gênero
            {
                id: "4",
                slug: "action",
                title: "Ação",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=28`)
            },

            {
                id: "5",
                slug: "animation",
                title: "Animação",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=16`)
            },

            {
                id: "6",
                slug: "comedy",
                title: "Comédia",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35`)
            },

            {
                id: "7",
                slug: "documentary",
                title: "Documentários",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=99`)
            },

            {
                id: "8",
                slug: "drama",
                title: "Drama",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=18`)
            },

            {
                id: "9",
                slug: "fantasy",
                title: "Fantasia",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=14`)
            },

            {
                id: "10",
                slug: "horror",
                title: "Terror",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=27`)
            },

            {
                id: "11",
                slug: "music",
                title: "Música",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10402`)
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {}

        if (movieId) {
            switch (type) {
                case "movie":
                    info = await fetchFunction(`movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                    break
                case "tv":
                    info = await fetchFunction(`tv/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                    break
            }
        }

        return info
    }
}