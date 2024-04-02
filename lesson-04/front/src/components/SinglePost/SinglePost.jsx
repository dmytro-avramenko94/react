import { Link } from "react-router-dom"

export default function SinglePost({ item }) {
    return (
        <div className="item">
            <Link to='/'>Back</Link>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>{item.created}</p>
            <p>{item.species}</p>
            <p>{item.status}</p>
        </div>
    )
}