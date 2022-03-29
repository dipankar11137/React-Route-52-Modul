import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>This is details of a Dosto : {friendId}</h1>
            <h2>Name : {friend.name}</h2>
            <p>Email : {friend.email}</p>
            <p>City : {friend.address?.city}</p>
            <p><small>Lat : {friend.address.geo.lat}</small></p>

        </div>
    );
};

export default FriendDetail;