import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Routers from "../routers/Routers"



const Layout = () => {
  return <>
    <Header />
    <main>
        <Routers />
    </main>
    <Footer />
  </>
}

export default Layout