import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';

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
        <div class="row">
            {responseData.data.map((user) => (
                <div key={user.email} class="col-4">
                    <div class="card mb-12">
                        <div class="card-body">
                            <h5 class="card-title">{user.first_name} {user.last_name}</h5>
                            <div class="card-text">
                                <img src={user.avatar} />
                                <div style={{ textAlign: 'right' }}>{user.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}