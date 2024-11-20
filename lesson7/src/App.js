import './App.css';
import Fetch from './pages/fetch/Fetch';
// import MainPage from './pages/MainPage';
// import PokemonPage from './pages/pokemonPage/PokemonPage';
// import TodoPage from './pages/TodoPage';
// import UserPage from './pages/userPage/UserPage';
// import FormPage from './pages/formPage/FormPage';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage/> */}
      {/* <TodoPage/> */}
      {/* <UserPage /> */}
      {/* <PokemonPage/> */}
      {/* <FormPage/> */}
      <RegisterPage />
      <Fetch />
    </div>
  );
}

export default App;
