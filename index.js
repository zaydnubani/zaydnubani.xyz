const express = require('express')
const request = require('request');
const dotenv = require('dotenv');
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path/posix')
const Email = require('./models/emails')

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

dotenv.config();

global.token_data = '';

global.refresh_token = '';

const spotifyAPI = new SpotifyWebApi({
    clientId: '677da9ba411c4561a74e4da23f97f0b9',
    clientSecret: '5b445d82817944d4ae29584439473994',
    redirectUri: 'https://zaydnubani.xyz/api/spotify/callback'
})

const PORT = process.env.PORT || 5000;

const sequelize = require('./configuration/connection');

var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/api/spotify/login', (req, res) => {
    res.redirect(spotifyAPI.createAuthorizeURL(REACT_APP_SCOPES))
})

app.get('/api/spotify/callback', (req, res) => {
    spotifyAPI.authorizationCodeGrant(req.query.code).then((data)=>{
        token_data = data.body
        refresh_token = data.body.refresh_token
        spotifyAPI.setRefreshToken(data.body.refresh_token)
        request.post('zaydnubani.xyz/music', ()=>{
            res.redirect('/music')
        })
    }).catch(err=>res.send(err))
})

app.get('/api/spotify/token', (req, res) => {
  res.json(token_data)
})

app.post('/api/spotify/refresh', async (req, res)=>{
   
    try {
        const refresh = req.body.refresh_token
        spotifyAPI.setRefreshToken(refresh)
        spotifyAPI.refreshAccessToken().then(data=>res.json(data.body.access_token))
    }
    catch (err){
        res.json(err)
    }
})

app.post('/api/contact', async (req, res) => {
    try {
        await Email.create({
            user_first_name: req.body.user_first_name,
            user_last_name: req.body.user_last_name,
            user_email: req.body.user_email
        }).then(data=>res.json(data))
    } catch (err) {
        res.status(400).json(err);
    }
})


app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

// This creates ruum_db if it doesn't exist and connects with it
sequelize.sync({ force: false }).then(() => 
    {
    // tells express to start listening on the server port
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
    }
);