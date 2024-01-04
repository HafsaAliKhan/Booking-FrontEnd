import Featured from "../../Components/featured/featured"
import Header from "../../Components/navbar/header/header"
import Navbar from "../../Components/navbar/navbar"
import PropertyList from "../../Components/propertyList/propertyList"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Explore Pakistan</h1>
                <PropertyList/>
            </div>
        </div>
    )
}

export default Home