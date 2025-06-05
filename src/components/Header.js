export default function Header(){
    return (
        <div className="header">
            <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrnmr3CB1oDs0WqiWPzNxENXCnRE-1yKVKw&s" height="80px" width="80px"/>
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Children</button>
                <button className="but">Home & Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>

            <input className="searchbar" placeholder="Search for Products Brands & more "></input>

            <div className="Profile">
                <button className="butt">Profile</button>
                <button className="butt">Wishlist</button>
                <button className="butt">Bag</button>
            </div>
        </div>
    ) 
}