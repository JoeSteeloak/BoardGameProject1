function Header() {
    return (
        <h1 style={{ 
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            padding: "20px",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            color: "white",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            maxWidth: "80%",
            margin: "20px auto"
        }}>
            My Board Game Collection
        </h1>
    );
}

export default Header;
