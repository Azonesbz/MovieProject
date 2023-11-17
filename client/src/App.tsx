import { useEffect, useState } from 'react'
import Modal from './components/Modal';

const apiKey = `2d68e060412cae10e54cf8286240c505`
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=fr-FR`;
const urlImage = `https://image.tmdb.org/t/p/w500`
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '
  }
};
interface Movie {
  adult: false;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface MovieModalProps {
  handleCloseModal: () => void;
  modalIsOpen: boolean;
  movie: Movie | null
}

const MovieModal = ({
  handleCloseModal,
  modalIsOpen,
  movie,
}: MovieModalProps) => {

  return (
      <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          title={`${movie?.title}`}
          date={`${movie?.release_date}`}
          rating={`${movie?.vote_average}`}
          voteCount={`${movie?.vote_count}`}
      >
        <p className='mt-5'>{movie?.overview}</p>
      </Modal>
  );
};

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([])
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(url, options)
      const data = await response.json()
      setMovies(data.results)
    }
    getMovies()
  }, [])

  const handleOpenModal = (movie: Movie) => {
    setModalIsOpen(true)
    setMovie(movie)
}
  const handleCloseModal = () => {
      setModalIsOpen(false)
  }

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-black text-white'>
        <div className='flex relative bottom-40'>
          <div className='z-10 relative top-10'>
            <h1 className='text-6xl font-Oswold'>Movie Project</h1>
            <h2 className='text-4xl'>Retrouvez une liste des meilleurs film du moment ! </h2>
          </div>
          <video width="320" height="240" autoPlay loop className='absolute w-2/3 -right-20 brightness-50 z-0'>
            <source src="/landingvideo.mp4" type="video/mp4" />
          </video> 
        </div>
      </div>
      <div className='grid grid-cols-6 gap-5 p-5 bg-black'>
        {movies &&
          movies.map((movie, index) => {
            return (
              <>
                <div className='relative col-span-6 lg:col-span-1 group' key={index}>
                  <img src={urlImage + movie.poster_path} alt={movie.title} />
                  <div className='absolute w-full bottom-0 bg-white opacity-20 group-hover:h-72 h-0 duration-200 ' />
                  <div className='absolute w-full bottom-0 group-hover:h-72 h-0 duration-200 group-hover:visible invisible opacity-0 group-hover:opacity-100 p-5 overflow-y-scroll text-white backdrop-brightness-50 backdrop-blur-sm'>
                    <h2 className='text-xl'>{movie.title}</h2>
                    <p className='relative'>{movie.overview}</p>
                    <button onClick={() => handleOpenModal(movie)} className='text-center w-full my-auto rounded-3xl px-4 py-2 bg-red-600 text-white mt-5 font-semibold'>Voir plus</button>
                  </div>
                </div>
                
              </>
            )
          })}
          <MovieModal handleCloseModal={handleCloseModal} modalIsOpen={modalIsOpen} movie={movie} />
      </div>
    </>
  );
}

export default App
