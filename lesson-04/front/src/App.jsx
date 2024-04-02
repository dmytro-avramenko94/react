import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import useFetch from "react-fetch-hook";
import SinglePost from "./components/SinglePost/SinglePost";

export default function App() {
  const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character')

  console.log(data?.results);

  return (
    <>
      {/* <Home /> */}

      <h1>Header</h1>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {data?.results.map(item => <Route key={item.id} path={`/page/${item.name}`} element={<SinglePost item={item} />} />)}


          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </main>

      {/* <SinglePost item={data?.results[0]} /> */}

      <h2>Footer</h2>
    </>
  )
}

