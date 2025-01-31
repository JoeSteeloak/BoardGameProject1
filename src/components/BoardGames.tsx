
interface BoardGamesProps {
    name: string,
    coop: boolean,
    rating: number
}

function BoardGames({name, coop, rating} : BoardGamesProps) {
/* const boardGamesArr = ["Wingspan", "Wyrmspan", "Finspan"]; */
        const isCoop = coop;

    return (


        <>

            <section>
                <h2>{name}</h2>
                <p>co-op: {isCoop? "yes" : "no" }</p>
                <p>rating: {rating}/10</p>
            </section>

{/*             <ul>
                {
                    boardGamesArr.map((boardgame, index) => (
                        <li key={index}>{boardgame}</li>
                    ))
                }
            </ul> */}
        </>
    )
}

export default BoardGames;