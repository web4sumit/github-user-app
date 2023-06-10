import React, { useState } from 'react'
import './UserSearch.css'

const UserSearch = () => {
    const [query, setQuery] = useState("");
    const [userList, setUserList] = useState([]);

    const handleSearchUsers = async () => {
        // to get user list --------------------------------
        if(!query) return;
        const apiUrl = 'https://api.github.com/search/users';
        const searchUrl = `${apiUrl}?q=${query}`;

        try {
            const response = await fetch(searchUrl);
            const data = await response.json();
            setUserList(data.items)
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className='outer_div'>
                <div className="searchbox">
                    <input className='search' type="text" placeholder='Username' onChange={(e) => setQuery(e?.target?.value)} />
                    <button className='search_btn' onClick={handleSearchUsers}>Search</button>
                </div>

                <div className="userCard">
                    {userList?.length === 0 && <p>No record found.</p>}
                    {userList && userList?.map((item, index) => (
                        <div className="user" key={index}>
                            <div className='card'>
                                <a href={item?.html_url} target='_balnk'>
                                    <div className='user_image'>
                                        <div className='avatar_img'>
                                            <img src={item?.avatar_url} alt="" />
                                        </div>
                                        <h4>{item?.login}</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserSearch