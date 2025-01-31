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
 
      <div style={{ width: "80%", maxWidth: "1000px", margin: "2em auto 2em auto", fontFamily: "verdana, sans-serif" }}>
        <Header />    
        <Hero />
        {boardGameArr.map((boardgame, index) => (
          <BoardGames name={boardgame.name} coop={boardgame.coop} rating={boardgame.rating} key={index} />
        ))}
      </div>
        <Footer />
    </>
  )
}

export default App
