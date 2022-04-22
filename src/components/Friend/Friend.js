import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend
    let navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/` + id;
        navigate(path)

    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={showFriendDetail}>{username}</button>
            <Link to="/">FriendDetails</Link>
        </div>
    );
};

export default Friend;