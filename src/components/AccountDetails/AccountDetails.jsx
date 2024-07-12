import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

export default function AccountDetails({ avatar, setAvatar, userName, setUserName, userId, setUserId }){
	const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
	const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT;
	const DETAILS_ENDPOINT = "https://api.spotify.com/v1/me";

	// useEffect will probably be useful to get user details on load otherwise show logged out
	useEffect(() => {
		let bearerToken = window.localStorage.getItem("token"); 
		const headers = { 'Authorization': `Bearer ${bearerToken}`};

		fetch(`https://api.spotify.com/v1/me`, { headers})
		.then(response => response.json())
		.then(data => {
			setAvatar(data.images[0].url)
			setUserName(data.display_name)
			setUserId(data.id)
		})

	}, [])

	// return basic account details using materialUI
	return (
		<>
			<div>
				<div id="avatar">
					<Avatar alt="Remy Sharp" src={avatar} />
				</div>
				<div id="userName">
					<p>{userName}</p>
				</div>
			</div>
		</>
	)
};
