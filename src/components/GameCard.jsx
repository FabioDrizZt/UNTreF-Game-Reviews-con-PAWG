export default function GameCard({ game }) {
  const cover =
    game.background_image ||
    "https://placehold.co/600x400/171717/aaa?text=No+image";

  return (
    <article className="game-card">
      <div className="game-card-image-wrapper">
        <img src={cover} alt={game.name} className="game-card-image" />
        <span className="game-card-score">{game.metacritic ?? "—"}</span>
      </div>
      <div className="game-card-content">
        <h3 className="game-card-title">{game.name}</h3>
        <p className="game-card-text">Lanzamiento: {game.released || "—"}</p>
        <p className="game-card-text">Plataformas: {(game.platforms || [])
          .map((p) => p.platform.name)
          .join(", ") || "—"}</p>
        {open && (
          <div className="game-card-details">
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
