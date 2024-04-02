import './style.css'

export default function Card({ user }) {
    function addFavorite(item) {
        console.log(item)
    }

    return (
        <div className={`card ${user.age < 18 && 'green'}`}>
            <h2>{user.name}</h2>
            <h3>Your age: {user.age}</h3>
            <a href={"mailto:" + user.email}>Email: {user.email}</a>
            <br /><br />
            {user.age > 18 && <button onClick={() => addFavorite(user)}>Add</button>}
        </div>
    )
}