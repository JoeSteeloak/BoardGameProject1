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
    {
      name: "7 Wonders",
      coop: false,
      rating: 5
    },
    {
      name: "Sentinels of the Multiverse",
      coop: true,
      rating: 10
    },
    {
      name: "Root",
      coop: false,
      rating: 9
    },
    {
      name: "Keep the Heroes Out",
      coop: true,
      rating: 7
    },
  ]

  return (
    <>

      <div>
        <Header title="My Board Game Collection"/>
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
