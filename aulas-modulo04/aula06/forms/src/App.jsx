import UserCard from "./components/UserCard";
import { useState } from "react";
const [user, setUser] = useState({name: 'Gandalf', age: 24000}) 
function App() {
  return (
    <>
      <UserCard user={user} setUser={setUser}></UserCard>
    </>
  )
}

export default App
