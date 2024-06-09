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
                slug: "originals",
                title: "Originais da Netflix",
                itens: await fetchFunction(`discover/tv?api_key=${API_KEY}&language=pt-BR?&with_networks=213`),
            },

            {
                slug: "trending",
                title: "Recomendados para Você",
                itens: await fetchFunction(`trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },

            {
                slug: "toprated",
                title: "Em Alta",
                itens: await fetchFunction(`movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },

            // categorias por gênero
            {
                slug: "action",
                title: "Ação",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=28`)
            },

            {
                slug: "adventure",
                title: "Aventura",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=12`)
            },

            {
                slug: "animation",
                title: "Animação",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=16`)
            },

            {
                slug: "comedy",
                title: "Comédia",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35`)
            },

            {
                slug: "crime",
                title: "Crime",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=80`)
            },

            {
                slug: "documentary",
                title: "Documentários",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=99`)
            },

            {
                slug: "drama",
                title: "Drama",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=18`)
            },

            {
                slug: "family",
                title: "Família",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10751`)
            },

            {
                slug: "fantasy",
                title: "Fantasia",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=14`)
            },

            {
                slug: "horror",
                title: "Terror",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=27`)
            },

            {
                slug: "music",
                title: "Música",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10402`)
            },

            {
                slug: "mystery",
                title: "Mistério",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=9648`)
            },

            {
                slug: "romance",
                title: "Romance",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749`)
            },

            {
                slug: "science fiction",
                title: "Ficção Científica",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=878`)
            },

            {
                slug: "war",
                title: "Guerra",
                itens: await fetchFunction(`discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10752`)
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