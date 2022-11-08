import {useEffect, useState} from "react";
import Link from "next/link";

export default function Pokemon(){
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        const fetchPokemon = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
            const pokemon = await res.json();
            setPokemon(pokemon.results)
        }
        fetchPokemon();
    },[])
    console.log(pokemon)
    return (
        <>
            {pokemon?.map((pokemon, index) => (
                <Link href={`/pokemon/${index + 1}`} key={index}>
                    <h1>{pokemon.name}</h1>
                </Link>
            ))}
        </>
    )
}