
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetchTours();
    }, []);

    const fetchTours = async () => {
        try {
            const response = await axios.get('/api/tours'); 
            setTours(response.data);
        } catch (error) {
            console.error('Error fetching tours:', error);
        }
    };

    return (
        <div>
            <ul>
                {tours.map(tour => (
                    <li key={tour._id}>
                        <strong>{tour.name}</strong>: {tour.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;