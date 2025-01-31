interface BoardGamesProps {
    name: string;
    coop: boolean;
    rating: number;
}

function BoardGames({ name, coop, rating }: BoardGamesProps) {
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px",
            margin: "10px",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "300px"
        }}>
            <h2 style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#333"
            }}>{name}</h2>
            <p style={{ 
                fontSize: "16px", 
                margin: "5px 0" 
            }}>
                Co-op: {coop ? "Yes" : "No"}
            </p>
            <p style={{ 
                fontSize: "16px", 
                fontWeight: "bold", 
                color: "#007bff", 
                margin: "5px 0" 
            }}>
                Rating: {rating}/10
            </p>
        </section>
    );
}

export default BoardGames;
