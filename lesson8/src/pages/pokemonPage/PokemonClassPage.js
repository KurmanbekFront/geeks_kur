import axios from "axios";
import { Component } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/pagination/Pagination";
class PokemonClassPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: [],
            limit: 2,
            offset: 0,
        };
    }
    log = () => {
        console.log(this.state.pokemonList);
        
    }    
    handleNext = () => {
        this.setState((prevState) => ({
            offset: prevState.offset + this.state.limit,
        }));
    };

    handlePrev = () => {
        this.setState((prevState) => ({
            offset: prevState.offset - this.state.limit,
        }));
    };

    getPokemons = async (offset, limit) => {
            const { data } = await axios(
                `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            );
            return this.setState({ pokemonList: data.results });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.offset !== this.state.offset) {
            this.getPokemons(this.state.offset, this.state.limit);
        }
        if (prevState.limit !== this.state.limit) {
            this.getPokemons(this.state.offset, this.state.limit);
        }
    }

    componentDidMount() {
        this.getPokemons(this.state.offset, this.state.limit);
    }
    
    render() {
        const { pokemonList, offset, limit } = this.state;
        let page = (offset / limit + 1);
        this.log()
        return (
            <>
                <div>
                    {pokemonList.map((pokemon) => (
                        <PokemonCard pokemon={pokemon} />
                    ))}
                </div>
                <Pagination page={page} prev={this.handlePrev} next={this.handleNext} />
            </>
        );
    }
}

export default PokemonClassPage;
