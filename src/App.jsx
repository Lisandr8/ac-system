import Header from "./components/Header"
import Book from "./components/Book"
import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <Book id="book" /> 
      <About id="about" /> 
      <Services id="services" /> 
      <Footer id="contact" /> 
    </>
  )
}

export default App
