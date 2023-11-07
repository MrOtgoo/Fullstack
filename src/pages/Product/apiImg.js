
import React, { useEffect, useState } from 'react';

export const ApiImg = (props) => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setData(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); 
    return (
        <div>
            <h1>API Data:</h1>
            <div>
                {data.map((user) => (
                    <div key={user.id}>
                        <img src={user.profilePicture} alt={user.name} />
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
