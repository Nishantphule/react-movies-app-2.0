import { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './HomePage/Home';
import { MovieList } from './Movies/MovieList';
import { BookList } from './Books/BookList';
import { AddColor } from './ColourGame/AddColor';
import { Navigate } from 'react-router-dom';
import { AddMovie } from './Movies/AddMovie';
import { AddBook } from './Books/AddBook'
import { MovieDetails } from './Movies/MovieDetails';
import { BookDetails } from './Books/BookDetails';
import { NotFound } from './componens/NotFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { MovieEdit } from './Movies/MovieEdit';
import { BookEdit } from './Books/BookEdit';
import { BasicForm } from './componens/BasicForm';
import SignUp from './Users/SignUp';
import Profile from './Users/Profile';
import Login from './Users/Login';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BasicProfileMenu from './componens/DropDownProfile';


function App() {

  const navigate = useNavigate();

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (

    <div className="App">

      <ThemeProvider theme={darkTheme}>
        <Paper elevation={4} sx={{ minHeight: "100vh", borderRadius: "0px" }}>

          <AppBar position="static" className='navBar'>
            <Toolbar>
              <div>
                <Button size='large' startIcon={<HomeIcon />} aria-label='home' color='inherit' onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button size='large' startIcon={<LocalMoviesIcon />} aria-label='movies list' color='inherit' onClick={() => navigate("/movies")}>
                  Movies
                </Button>
                <Button size='large' startIcon={<AutoStoriesIcon />} aria-label='books list' color='inherit' onClick={() => navigate("/books")}>
                  Books
                </Button>
                <Button size='large' startIcon={<AddIcon />} aria-label='add movie' color='inherit' onClick={() => navigate("/movies/add")}>
                  Add Movie
                </Button>
                <Button size='large' startIcon={<AddIcon />} aria-label='add book' color='inherit' onClick={() => navigate("/books/add")}>
                  Add Book
                </Button>
                <Button size='large' startIcon={<ColorLensIcon />} aria-label='colour game' color='inherit' onClick={() => navigate("/colour-game")}>
                  Colour Game
                </Button>
                <Button size='large' startIcon={<AddIcon />} aria-label='basic form' color='inherit' onClick={() => navigate("/basic-form")}>
                  Basic Form
                </Button>
              </div>

              <Button sx={{ marginLeft: "auto" }} startIcon={mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />} variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark " : "light "}MODE
              </Button>

              <Button size='large' startIcon={<BasicProfileMenu />} aria-label='add movie' color='inherit'>
              </Button>

            </Toolbar>
          </AppBar>

          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/movies' element={<MovieList />} />
            <Route path='/books' element={<BookList />} />

            <Route path='/movies/add' element={<AddMovie />} />
            <Route path='/books/add' element={<AddBook />} />

            <Route path='/movies/:id' element={<MovieDetails />} />
            <Route path='/books/:id' element={<BookDetails />} />

            <Route path="/movie/edit/:id" element={<MovieEdit />} />
            <Route path="/book/edit/:id" element={<BookEdit />} />

            <Route path='/colour-game' element={<AddColor />} />

            <Route path='/basic-form' element={<BasicForm />} />

            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />

            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </Paper>

      </ThemeProvider>


    </div>
  );
}

export default App;

