import Hero from "./components/Hero"
import BoardGames from "./components/BoardGames"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Hero />
      <div style={{width: "80%", maxWidth: "1000px", margin: "2em auto 2em auto", fontFamily: "verdana, sans-serif"}}>
        <h1>My Board Game Collection</h1>
        <section>
          <h2>Freedom Five</h2>
          <p>co-op: yes</p>
          <p>rating: 8/10</p>
        </section>
      </div>
      <BoardGames />
    </>
  )
}

export default App
