import { useEffect, useState } from "react";
function UserProfile() {
    const [users, setUser] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log(response);
            const data = await response.json(); 
            setUser(data);
        }
        fetchUserData();
        return () => setUser(null)
    }, [])
    return (
        <div>
            {users ? (
                users.map((user) => {
                    return(
                    <ul>
                        <li key={user.id}><strong>Nome:</strong> {user.name}</li>
                        <li key={user.id}><strong>Email:</strong> {user.email}</li>
                        <li key={user.id}><strong>Username:</strong> {user.username}</li>
                        <hr />
                    </ul>
                    )
                })
            ) : (
                console.log('Error fetching!')
            )}
        </div>
    );
}
export default UserProfile;