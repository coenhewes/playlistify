# Playlistify

Playlistify is a Spotify playlist builder web application that allows users to create and customize playlists easily. This project was developed as part of a personal portfolio to showcase skills in modern web development technologies.

## Features

- Create new Spotify playlists
- Search and add tracks to playlists
- User authentication with Spotify

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- HTML5
- Vite (Build tool and development server)
- Bun (JavaScript runtime & tooling)
- Spotify Web API

## Getting Started

To run this project locally, follow these steps:

1. Ensure you have Bun installed. If not, install it from [bun.sh](https://bun.sh)

2. Clone the repository:

git clone https://github.com/coenhewes/playlistify

3. Navigate to the project directory:

cd playlistify

4. Install dependencies:

bun install

5. Create a `.env` file in the root directory and add your Spotify API credentials:

VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback

6. Start the development server:

bun run dev

7. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build, run:

bun run build

This will generate a `dist` folder with the production-ready files.

## Project Structure

playlistify/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── .gitignore

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/coenhewes/playlistify/issues) if you want to contribute.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Spotify Web API for providing the data and functionality
- React community for the excellent documentation and resources
- Vite team for the fast build tool and development server
- Bun team for the efficient JavaScript runtime


Project Link: [https://github.com/coenhewes/playlistify](https://github.com/coenhewes/playlistify)

## Future Improvements

- Implement collaborative playlist creation
- Add music recommendation features
- Integrate with other music streaming platforms
- Enhance user profile customization options
