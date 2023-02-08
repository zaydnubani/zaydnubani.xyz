const express = require('express'),
request = require('request'),
dotenv = require('dotenv'),
SpotifyWebApi = require('spotify-web-api-node'),
path = require('path/posix'),
Email = require('./models/emails'),

REACT_APP_SCOPES = [
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
],

spotifyAPI = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'https://zaydnubani.xyz/api/spotify/callback'
}),

PORT = process.env.PORT || 5000,

sequelize = require('./configuration/connection');
dotenv.config();

global.token_data = '';

global.refresh_token = '';

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
            user_first_name: req.body.first_name,
            user_last_name: req.body.last_name,
            user_email: req.body.email,
            user_message: req.body.message
        }).then(()=>{
            const mail = {
                data: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    message: req.body.message
                },
                service: process.env.SERVICE_ID,
                template: process.env.TEMPLATE_ID,
                public: process.env.PUBLIC_KEY
            }
            res.json(mail)
        })
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