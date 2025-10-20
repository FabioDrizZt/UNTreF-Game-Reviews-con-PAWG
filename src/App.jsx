import { useState } from 'react'
import { useEffect } from 'react'
import GameCard from './components/GameCard'

function App() {
  const [games, setGames] = useState([])
  const API_KEY = import.meta.env.VITE_API_KEY
  useEffect(() => {
    console.log(API_KEY)
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setGames(data.results))
  }, [API_KEY])

  /*   useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        const data = await response.json()
        setGames(data.results)
      }
      fetchData()
    }, [API_KEY]) */

  return (
    <main>
      <h1>Games</h1>
      <section className="game-grid">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </section >
    </main>
  )
}

export default App
