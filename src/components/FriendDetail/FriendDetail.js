import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [friendId])
    return (
        <div>
            {/* <h1>Hello Friend...! How are everyone? :{params.friendId}</h1> */}
            <h1>Hello Friend...! How are everyone? :{friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <h4>Email:{friend.email}</h4>
            <p>Address: {friend.address?.city}</p>
            <p> Lat: {friend.address?.geo?.lat}</p>
        </div>
    );
};

export default FriendDetail;