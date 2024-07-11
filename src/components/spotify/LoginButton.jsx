import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import 'dotenv';

export default function LoginButton(){
	const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
	const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT;
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";
	const [token, setToken] = useState("");

	useEffect(() => {
		const hash = window.location.hash
		let token = window.localStorage.getItem("token");

		if (!token && hash){
			token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

			window.location.hash = ""
			window.localStorage.setItem("token", token)
		}
		setToken(token)
	}, [])

	const logout = () => {
		setToken("")
		window.localStorage.removeItem("token")
		window.location.reload();
	}

	return (
		<>
			<div>
                		{!token ?
                		<Button variant="outlined" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-private`}>Login to Spotify</Button> : <Button variant="outlined" onClick={logout}>Logout</Button>}
			</div>
		</>
	)
};
