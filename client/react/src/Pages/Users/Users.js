import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import UserCard from "./UserCard";
import UserList from "./UserList";

export default function Users() {
    const [responseData, setResponseData] = useState({ data: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://reqres.in/api/users?page=1');
                const jsonData = await response.json();
                setTimeout(() => {
                    setResponseData(jsonData);
                    setLoading(false);
                }, 1000);// Simulate slow http
            } catch (error) {
                setError(error);
            } finally {

            }
        };
        fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

    if (loading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }
    return (
        <UserList users={responseData.data} />
    );
}