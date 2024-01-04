import "./searchItem.css"

const SearchItem = () =>{
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/296399887.webp?k=9cf50ba5e4011a66a4c89881dd1096d5d564bed19ca62cff0724c0fc09b00281&o=" 
            alt="" 
            className="siImg" 
            />
            <div className="siDesc">
                <h1 className="siTitle">Serenity Corner</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siFeatures">
                    Entire studio + 1 bathroom + 21m^2 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                details
            </div>
        </div>
    )
}

export default SearchItem