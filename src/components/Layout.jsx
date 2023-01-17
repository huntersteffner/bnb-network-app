import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout =({children}) => {
    return (
        <div data-theme="autumn">
        <Navbar/>
        {children}
        <Footer />
        </div>
        
    )
}

export default Layout