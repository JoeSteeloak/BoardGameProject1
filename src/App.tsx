import Hero from "./components/Hero"
import BoardGames from "./components/BoardGames"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const boardGameArr = [
    {
      name: "Freedom Five",
      coop: true,
      rating: 8
    },
    {
      name: "Terraforming Mars",
      coop: false,
      rating: 6
    },
    {
      name: "Kabuto Sumo",
      coop: false,
      rating: 7
    },
    {
      name: "Ahoy",
      coop: false,
      rating: 5
    },
  ]

  return (
    <>

      <div>
        <Header />
        <Hero />
        <div style={{
            marginTop: "100px",
            marginBottom: "100px"
          }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center"
          }}>
            {boardGameArr.map((boardgame, index) => (
              <BoardGames name={boardgame.name} coop={boardgame.coop} rating={boardgame.rating} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
