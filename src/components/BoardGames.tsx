function BoardGames() {

    const boardGamesArr = ["Wingspan", "Wyrmspan", "Finspan"];

    return (
        <>
            <ul>
                {
                    boardGamesArr.map((boardgame, index) => (
                        <li key={index}>{boardgame}</li>
                    ))
            }
            </ul>
        </>
)
}

export default BoardGames;