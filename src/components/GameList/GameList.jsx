import React, {useState} from 'react';
import useFetch from "../../hooks/useFetch"
import GameCard from "../GameCard/GameCard";

function GameList(props) {
    const [filter, setFilter] = useState({
        platform: "browser",
        sortBy: "relevance"
    })



    const {games} = useFetch(filter)

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>

            {games.map((game)=>(
                <GameCard key={game.id} game={game}/>
            ))}
        </div>

            )
}

export default GameList;
