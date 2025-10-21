import GameCard from './components/GameCard'
import Spinner from './components/Spinner'
import useFetch from './hooks/useFetch'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [games, loading, error] = useFetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <p>Algo salio mal...</p>
  }
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
