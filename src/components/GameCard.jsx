import useToggle from "../hooks/useToggle";

export default function GameCard({ game }) {
  const [details, toggle] = useToggle();

  return (
    <article className="game-card">
      <div className="game-card-image-wrapper">
        <img src={game.background_image} alt={game.name} className="game-card-image" />
        <span className="game-card-score">{game.metacritic ?? "—"}</span>
      </div>
      <div className="game-card-content">
        <h3 className="game-card-title">{game.name}</h3>
        <p className="game-card-text">Lanzamiento: {game.released || "—"}</p>

        <button onClick={toggle} className="btn game-card-btn">Ver {details ? "menos" : "más"}</button>
        {details && (
          <div className="game-card-details">
            <p className="game-card-text">Plataformas: {(game.platforms || [])
              .map((p) => p.platform.name)
              .join(", ") || "—"}</p>
            <p>
              ⭐ Rating: {game.rating} ({game.ratings_count})
            </p>
            {game.genres?.length > 0 && (
              <p>Géneros: {game.genres.map((g) => g.name).join(", ")}</p>
            )}
            {game.stores?.length > 0 && (
              <p>Tiendas: {game.stores.map((s) => s.store.name).join(", ")}</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
