import "../App.css"

export default ({ item }) => {
    // selecionar o ano da data fornecida pela API
    let year = new Date(item.first_air_date)

    // formatar generos da API
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    // limitar a descrição
    let description = item.overview
    if (description.length > 200) {
        description = description.substring(0, 200) + "..."
    }

    return (
        <section className="main-movie" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="filter-vertical">
                <div className="filter-horizontal">
                    <div className="name">{item.original_name}</div>

                    <div className="info">
                        <div className="vote-average">{item.vote_average.toFixed(1)}</div>
                        <div className="year">{year.getFullYear()}</div>
                        <div className="seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : ""}</div>
                    </div>

                    <div className="description">{description}</div>

                    <div className="buttons">
                        <a className="watch-button" href={`/`}>▶ Assistir</a>
                        <a className="add-button" href={`/`}>+ Minha Lista</a>
                    </div>

                    <div className="genres"><strong>Gênero{genres.length !== 1 ? "s" : ""}: </strong>{genres.join(", ")}</div>
                </div>
            </div>
        </section >
    )
}