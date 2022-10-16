function CastItem({ data }) {
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  const elements = data.map(e => (
    <li key={e.id}>
      <img src={imgURL + e.profile_path} alt={e.original_name} />
      <h3>{e.name}</h3>
      <p>{e.character}</p>
    </li>
  ));
  return <ul>{elements}</ul>;
}

export default CastItem;
