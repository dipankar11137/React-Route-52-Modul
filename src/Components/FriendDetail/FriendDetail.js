import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    return (
        <div>
            <h1>This is details of a Dosto : {friendId}</h1>
        </div>
    );
};

export default FriendDetail;