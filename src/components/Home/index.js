import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Redirect} from 'react-router-dom'
import MovieCard from '../MovieCard'
import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {moviesList: [], loading: true}

  componentDidMount() {
    this.onLoad()
  }

  onLoad = async () => {
    try {
      const response = await fetch('https://hoblist.com/api/movieList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting',
        }),
      })
      if (!response.ok) {
        throw new Error('Failed to fetch movie data')
      }

      const data = await response.json()
      const updatedData = data.result.map(each => ({
        id: uuidv4(),
        title: each.title,
        imageUrl: each.poster,
        genre: each.genre,
        votes: each.totalVoted,
        director: each.director[0],
        starring: each.stars[0],
        views: each.pageViews,
        language: each.language,
      }))
      this.setState({
        moviesList: updatedData,
        loading: false,
      })
      // console.log(data.result)
    } catch (error) {
      console.error('Error fetching movie data:', error)
    }
  }

  render() {
    const {moviesList, loading} = this.state
    console.log(moviesList)
    const userData = localStorage.getItem('userDetails')
    if (userData === null) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header />
        <hr />
        {loading ? (
          <div className="loader-container">
            <h1>Loading...</h1>
          </div>
        ) : (
          <ul className="movies-list">
            {moviesList.map(movie => (
              <MovieCard moviesData={movie} key={movie.id} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default Home
