import Card from "./components/card";

const testUsers = [
  { id: 1, name: "User 1", age: 25, email: "user1@example.com" },
  { id: 2, name: "User 2", age: 30, email: "user2@example.com" },
  { id: 3, name: "User 3", age: 12, email: "user3@example.com" },
  { id: 4, name: "User 4", age: 27, email: "user4@example.com" },
  { id: 5, name: "User 5", age: 29, email: "user5@example.com" },
  { id: 6, name: "User 4", age: 17, email: "user4@example.com" },
  { id: 7, name: "User 4", age: 27, email: "user4@example.com" },
  { id: 8, name: "User 4", age: 8, email: "user4@example.com" },
  { id: 9, name: "User 4", age: 27, email: "user4@example.com" },
];




export default function App() {

  console.log(testUsers);

  return (


    <>
      <h2>Users</h2>
      <div className="card-wrap">
        {
          testUsers.map(item => (
            <Card user={item} key={item.id} />
          ))
        }
      </div>



    </>
  )
}

