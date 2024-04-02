import useFetch from "react-fetch-hook";
import { Link, Route, Routes } from "react-router-dom";


export default function Home() {

    const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character')



    const list = data?.results.map(item => (
        <Link key={item.id} className="item" to={"/page/" + item.name}>
            <img src={item.image} />
            <h2>{item.name}</h2>
        </Link>
    ))


    return isLoading ? (
        <div>...Loading</div>
    ) : (
        <div className="homePage">
            <h1>Home page</h1>
            {list}
        </div>
    )
}