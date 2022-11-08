import axios from "axios";
import Image from "next/image";

export default function PokemonPage({data}){
    const {id, name, sprites, types} = data;
    console.log(data)

    return (
        <>
            <h2>{name}</h2>
            <Image src={sprites.front_default} alt={name} width={300} height={300}/>

        </>
    )
}


export const getStaticPaths = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
    const paths = res.data.results.map((pokemon, index) => ({
        params: { pokeId: (index + 1).toString() }
    }))
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}`)
    return { props: { data } }
}