import { useState } from 'react';
import './App.css';
// import { Welcome } from './Welcome'
// import { User } from './User';
// import { AddColor } from './AddColor';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { Navigate } from 'react-router-dom';
import { AddMovie } from './AddMovie';
import { MovieDetails } from './MovieDetails';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { NotFound } from './NotFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { MovieEdit } from './MovieEdit';
import { BasicForm } from './BasicForm';

// const INITIAL_MOVIE_buttonST = [
//   {
//     id: "100",
//     pic: "https://gospeljingle.com/wp-content/uploads/2022/01/Pushpa_-The-Rise-2021.jpg",
//     title: "Pushpa:The Rise - Part 1",
//     rating: "7.6",
//     url: "https://www.youtube.com/embed/pKctjlxbFDQ ",
//     description:
//       "Story of Pushpa Raj, a lorry driver in Seshachalam forests of South India, set in the backdrop of red sandalwood smuggbuttonng. Red Sandalwood is endemic to South-Eastern Ghats (mountain range) of India.",
//   },
//   {
//     id: "101",
//     pic: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/348fa1129695937.61705209953c0.jpg",
//     title: "The Batman",
//     rating: "8.0",
//     url: "https://www.youtube.com/embed/mqqft2x_Aa4",
//     description:
//       "When the Riddler, a sadistic serial killer, begins murdering key pobuttontical figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
//   },
//   {
//     id: "102",
//     pic: "https://m.media-amazon.com/images/M/MV5BYzJmYzExZGEtMTUwYy00YzIyLWJmOTEtZWFkNTU0YThlYzdmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg",
//     title: "K.G.F: Chapter 1",
//     rating: "8.2",
//     url: "https://www.youtube.com/embed/-KfsY-qwBS0",
//     description:
//       "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
//   },
//   {
//     id: "103",
//     pic: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
//     title: "Spider-Man: No Way Home",
//     rating: "8.4",
//     url: "https://www.youtube.com/embed/JfVOs4VSpmA",
//     description:
//       "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
//   },
//   {
//     id: "104",
//     pic: "https://m.media-amazon.com/images/M/MV5BOWE5ZjljZDEtYTZmNy00MGVlLWJjNjEtMWUwMzUyMDc5NTA3XkEyXkFqcGdeQXVyODgzMDMwODI@._V1_.jpg",
//     title: "Bachchhan Paandey",
//     rating: "6.8",
//     url: "https://www.youtube.com/embed/cpNaGiBhXiM",
//     description:
//       "A budding director tries to research a merciless gangster for making a film on gangster-ism. But her secret attempts to conduct the research fail when she gets caught for snooping.",
//   },
//   {
//     id: "105",
//     pic: "https://m.media-amazon.com/images/I/61zgu8mImuL._AC_SY606_.jpg",
//     title: "Joker",
//     rating: "8.4",
//     url: "https://www.youtube.com/embed/zAGVQLHvwOY",
//     description:
//       "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
//   },
//   {
//     id: "106",
//     pic: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_.jpg",
//     title: "Tumbbad",
//     rating: "8.2",
//     url: "https://www.youtube.com/embed/sN75MPxgvX8",
//     description:
//       "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
//   },
//   {
//     id: "107",
//     pic: "https://m.media-amazon.com/images/M/MV5BOWE1ZTMyM2QtMTNhNC00M2ZhLTg5ZTctNGZmZDM4YWQ5N2YwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
//     title: "Godzilla vs. Kong",
//     rating: "6.3",
//     url: "https://www.youtube.com/embed/odM92ap8_c0",
//     description:
//       "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance.",
//   },
//   {
//     id: "108",
//     pic: "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg",
//     title: "Tom & Jerry: The Movie",
//     rating: "5.2",
//     url: "https://www.youtube.com/embed/kP9TfCWaQT4",
//     description:
//       "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives.",
//   },
//   {
//     id: "109",
//     pic: "https://m.media-amazon.com/images/M/MV5BN2I2Yzc2OWMtMWQzYi00ZDcxLTgyOTMtNjBiNzA5Y2QxZDYxXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg",
//     title: "Venom: Let There Be Carnage",
//     rating: "6.0",
//     url: "https://www.youtube.com/embed/-ezfi6FQ8Ds",
//     description:
//       "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
//   },
// ];

function App() {
  // const [list, setList] = useState(INITIAL_MOVIE_buttonST);

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  // const users = ["Yash", "Nishant", "Rupesh"]

  // const welcome = [
  //   {
  //     n: "Raj",
  //     p: "https://th.bing.com/th/id/OIP.ZgqwDEYzf2SZ9XniZH1YTwHaH9?w=186&h=200&c=7&r=0&o=5&pid=1.7"
  //   },
  //   {
  //     n: "Nishant",
  //     p: "https://th.bing.com/th/id/OIP.StBOWlrvi-z4oqJ2pkze0AHaLc?w=115&h=180&c=7&r=0&o=5&pid=1.7"
  //   },
  //   {
  //     n: "Pooja",
  //     p: "https://th.bing.com/th/id/OIP.3jnJbcHULatXuIdQsmVKowHaEK?w=289&h=180&c=7&r=0&o=5&pid=1.7"
  //   }

  // ]



  const navigate = useNavigate();
  return (

    <div className="App">

      {/* {welcome.map(({ n, p }) => <Welcome n={n} p={p} />)} */}
      {/* 
      {users.map((nm) => <User name={nm}/>)} */}

      <ThemeProvider theme={darkTheme}>
        <Paper elevation={4} sx={{ minHeight: "100vh", borderRadius: "0px" }}>
          <AppBar position="static" className='navBar'>
            <Toolbar>
              <div>
                <Button size='large' aria-label='home' color='inherit' onClick={() => navigate("/")}>
                  <HomeIcon />Home
                </Button>
                <Button size='large' aria-label='movies list' color='inherit' onClick={() => navigate("/movies")}>
                  <LocalMoviesIcon />Movies
                </Button>
                <Button size='large' aria-label='add movie' color='inherit' onClick={() => navigate("/movies/add")}>
                  <AddIcon />Add Movie
                </Button>
                <Button size='large' aria-label='colour game' color='inherit' onClick={() => navigate("/colour-game")}>
                  <ColorLensIcon />Colour Game
                </Button>
                <Button size='large' aria-label='colour game' color='inherit' onClick={() => navigate("/basic-form")}>
                  <AddIcon />Basic Form
                </Button>
              </div>

              <Button sx={{ marginLeft: "auto" }} startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />} variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark " : "light "}MODE
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<MovieList />} />
            <Route path='/movies/add' element={<AddMovie />} />
            <Route path='/movies/:id' element={<MovieDetails />} />
            <Route path="/movieedit/:id" element={<MovieEdit />} />
            <Route path='/colour-game' element={<AddColor />} />
            <Route path='/basic-form' element={<BasicForm />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </Paper>

      </ThemeProvider>


    </div>
  );
}

export default App;
