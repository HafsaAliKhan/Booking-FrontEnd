import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=" alt="" className="featured" />
                <div className="featuredTitles">
                    <h1>Lahore</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=" alt="" className="featured" />
                <div className="featuredTitles">
                    <h1>Karachi</h1>
                    <h1>423 Properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=" alt="" className="featured" />
                <div className="featuredTitles">
                    <h1>Islamabad</h1>
                    <h1>543 Properties</h1>
                </div>
            </div>
        </div>
    )
}

export default Featured