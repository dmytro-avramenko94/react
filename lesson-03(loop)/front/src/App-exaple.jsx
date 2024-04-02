import { testUsers } from './data/Users'

export const testUsers2 = [
  { id: 1, name: "User 1", age: 16, email: "user1@example.com" },
  { id: 2, name: "User 2", age: 30, email: "user2@example.com" },
  { id: 3, name: "User 3", age: 22, email: "user3@example.com" },
  { id: 4, name: "User 4", age: 17, email: "user4@example.com" },
  { id: 5, name: "User 5", age: 29, email: "user5@example.com" }
];

export default function App() {

  const users3 = testUsers2.map(item => (
    item.age >= 18 && <h1 key={item.id}>Wy povnilitniy: {item.name}</h1>
  ))

  // Umova && {Rezultat}

  // Umowa ? {Rezultat if umowa wirna} : {Rezulta if umowa false}

  return (
    <>
      {

        //Old 
        // testUsers2.map(item => {
        //   return <div>{item.name}</div>
        // })

        //key worning - version 1
        // testUsers2.map(item => (
        //   <h1 key={item.id}>{item.name}</h1>
        // ))

        //key worning - version 2
        testUsers2 && testUsers2.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))


      }

      <div > {users3} </div >
    </>
  )
}

