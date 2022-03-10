import * as api from "../api";
import { useEffect, useState, useContext } from "react";
import {UserContext} from "../contexts/UserContexts";

export default function Users () {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {setLoggedInUser} = useContext(UserContext);

    const getUsers = () => {
        api.fetchUsers().then((users) => {
            setUsers(users);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    const logIn = (user) => {
        setLoggedInUser(user)
    }

    return isLoading ? (
        <h1>loading...</h1>
    ) : (
        <main>
            <h1>Users Page</h1>
            <section className="users">
                <ul>
                    {users.map((user) => {
                        return (
                            <article className="article-users" key={user.username}> 
                            <h3>{user.username}</h3>
                            <button onClick={() => logIn(user)}>Log In</button>
                            </article>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}