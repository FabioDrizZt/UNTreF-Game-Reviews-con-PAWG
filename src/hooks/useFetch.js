import { useState, useEffect } from 'react'
import axios from 'axios'


export default function useFetch(url) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios(url)
      .then(res => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError(true)
        setLoading(false)
      })
  }, [url])

  return [games, loading, error]
}


/*   useEffect(() => {
      console.log(API_KEY)
      fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setGames(data.results))
    }, []) */

/*   useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      const data = await response.json()
      setGames(data.results)
    }
    fetchData()
  }, []) */

/* useEffect(() => {
  const fetchData = async () => {
    const response = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)
    setGames(response.data.results)
  }
  fetchData()
}, []) */