import MovieList from 'components/MovieList';

function HomePage() {
  //   const [data, setData] = useState({
  //     movies: [],
  //     loading: false,
  //     error: null,
  //   });

  return (
    <div>
      <h1>Tranding Today</h1>
      <MovieList />
    </div>
  );
}

export default HomePage;
