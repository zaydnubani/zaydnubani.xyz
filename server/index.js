const express = require('express')
const request = require('request');
const dotenv = require('dotenv');
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path/posix')

const REACT_APP_SCOPES = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
]

dotenv.config()

global.token_data = ''

global.refresh_token = ''

const REACT_APP_CLIENT_ID = '677da9ba411c4561a74e4da23f97f0b9',
REACT_APP_CLIENT_SECRET = '5b445d82817944d4ae29584439473994'


const spotifyAPI = new SpotifyWebApi({
    clientId: REACT_APP_CLIENT_ID,
    clientSecret: REACT_APP_CLIENT_SECRET,
    redirectUri: 'http://zaydnubani.xyz/auth/callback'
})

// const spotifyAPI = new SpotifyWebApi({
//     clientId: process.env.REACT_APP_CLIENT_ID,
//     clientSecret: process.env.REACT_APP_CLIENT_SECRET,
//     redirectUri: 'http://localhost:3000/auth/callback'
// })

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/auth/login', (req, res) => {
    res.redirect(spotifyAPI.createAuthorizeURL(REACT_APP_SCOPES))
})

app.get('/auth/callback', (req, res) => {
    spotifyAPI.authorizationCodeGrant(req.query.code).then((data)=>{
        token_data = data.body
        refresh_token = data.body.refresh_token
        spotifyAPI.setRefreshToken(data.body.refresh_token)
        request.post('zaydnubani.xyz/music', ()=>{
            res.redirect('/music')
        })
    }).catch(err=>res.send(err))
})

app.get('/auth/token', (req, res) => {
  res.json(token_data)
})

app.post('/auth/refresh', async (req, res)=>{
   
    try {
        const refresh = req.body.refresh_token
        spotifyAPI.setRefreshToken(refresh)
        spotifyAPI.refreshAccessToken().then(data=>res.json(data.body.access_token))
    }
    catch (err){
        res.json(err)
    }
})

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})