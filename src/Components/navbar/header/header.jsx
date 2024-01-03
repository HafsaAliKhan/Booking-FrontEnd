import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCar, faMonument, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { faCalendar, faCalendarDays } from "@fortawesome/free-regular-svg-icons"

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faMonument} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
                 </div>
                 <h1 className="headerTitle">A life of discounts? It's Genius</h1>
                 <p className="HeaderDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free Webdevbooking account
                 </p>
                 <button className="headerBtn">Sign in / Register</button>
                 <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                        <input type="text" 
                        placeholder="Where are you going?" 
                        classname="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span className="Heade">date to date</span>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                        <input type="text" 
                        placeholder="Where are you going?" 
                        classname="headerSearchInput" />
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Header