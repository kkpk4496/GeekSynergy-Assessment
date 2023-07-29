import './index.css'

const MovieCard = props => {
  const {moviesData} = props
  const {
    title,
    imageUrl,
    genre,
    votes,
    director,
    starring,
    views,
    language,
  } = moviesData
  return (
    <li className="movie-item">
      <div className="cont">
        <img src={imageUrl} alt="movie" className="thumbnail" />
      </div>
      <div>
        <h1 className="title">{title}</h1>
        <p className="genre">Genre: {genre}</p>
        <p className="genre">Director: {director}</p>
        <p className="genre">Starring: {starring}</p>
        <p className="genre">Mins | {language} | Release Date</p>
        <div className="product-details">
          <p>
            {views}Views | Voted by {votes} People
          </p>
        </div>
      </div>
    </li>
  )
}

export default MovieCard
