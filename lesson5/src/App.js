import './App.css';
import MainPage from './pages/MainPage';
import PokemonPage from './pages/pokemonPage/PokemonPage';
import TodoPage from './pages/TodoPage';
import UserPage from './pages/userPage/UserPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage/> */}
      {/* <TodoPage/> */}
      {/* <UserPage /> */}
      <PokemonPage/>
    </div>
  );
}

export default App;
