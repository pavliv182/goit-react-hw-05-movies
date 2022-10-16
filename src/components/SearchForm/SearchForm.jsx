function SearchForm() {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });
  return (
    <form>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
