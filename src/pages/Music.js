import React, { useEffect, useState } from "react";
import Player from "./components/WebPlayer";
import SpotifyWebApi from "spotify-web-api-node";
import toast, { Toaster } from 'react-hot-toast';

const scopes = [
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
];

const CLIENT_ID = '677da9ba411c4561a74e4da23f97f0b9',
CLIENT_SECRET = 'b89f6fdf5e6c4ac390d7139cf6882cac',
REDIRECT_URI = 'https://zaydjnubani.com/music' 

const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`

const hash = window.location.hash

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI
});

const Music = () => {

    const [ authtoken, setAuthtoken ] = useState(null)
    const [ user, setUser ] = useState(null)
    const [ allPlaylists, setAllplaylists ] = useState([])
    const [ tracks, setTracks ] = useState([])
    const [ playlist, setPlaylist ] = useState(null)
    const [ follow, setFollow ] = useState(null)
    const [ following, setFollowing ] = useState(null)

    // sets token
    useEffect(()=>{
        if(hash.split('#').length >= 2){
            setAuthtoken(hash.split('=')[1].split('&')[0])
            return
        }
        return
    }, [setAuthtoken])

    // gets user playlist
    useEffect(()=>{
        if(authtoken !== null){
            spotifyApi.setAccessToken(authtoken)
            spotifyApi.getMe().then(data=>{
                return setUser(data.body)
            }).catch(err=>{
                toast.error(`Unable to set authorization token, please try again.`)
                return console.log(window.location)
            })
            return
        }
    },[authtoken])

    // grabs playlists
    useEffect(()=>{
        if(authtoken !== null){
            spotifyApi.setAccessToken(authtoken)
            spotifyApi.getUserPlaylists('zayd-nubani').then(data=>{
                return data.body.items.forEach(res=>{
                    if(res.name.toLowerCase() === 'eggplant parm'|res.name.toLowerCase() === 'texas bbq'|res.name.toLowerCase() === 'san peligrino'|res.name.toLowerCase() === 'when santana came to town'|res.name.toLowerCase() === 'kool aid'|res.name.toLowerCase() === 'suspect'){
                        return setAllplaylists(old=>[...old,{data: res}])
                    }
                })
            }).catch((err)=>{return console.log(err)})
            return
        }
    }, [authtoken])

    useEffect(()=>{
        if(authtoken !== null && user !== null && allPlaylists.length >= 1){
            spotifyApi.setAccessToken(authtoken)
            spotifyApi.getUserPlaylists(user.display_name).then(data=>{
                return allPlaylists.forEach(res=>{
                    return data.body.items.forEach((ret)=>{
                        if(ret.name === res.name){
                            const filteredlist = []
                            const filter1 = allPlaylists.filter(retrn => retrn.name !== ret.name)
                            filter1.forEach(it=>filteredlist.push({data: it}))
                            const filter2 = allPlaylists.filter(retrn => retrn.name === ret.name)
                            filter2.forEach(it=>filteredlist.push({data: it, following: true}))
                            return console.log(filteredlist)
                        }
                        return
                    })
                })
            }).catch((err)=>{
                return console.log(err)
            })
            return
        }
    },[user, authtoken, allPlaylists])

    useEffect(()=>{
        if(authtoken !== null && playlist !== null){
            spotifyApi.getPlaylist(playlist)
            .then(data => {
                return data.body.tracks.items.forEach((ret)=>{
                    return setTracks(old=>[...old, ret.track.uri])
                })
            }).catch((err)=>{
                toast.error(`Unable to queue playlist, please refresh token.`)
                return console.log('Something went wrong!', err);
            });
            return 
        }
    },[authtoken, playlist])

    useEffect(()=>{
        if(authtoken !== null && follow !== null && following !== null){
            spotifyApi.followPlaylist(follow,
            {
                'public' : false
            }).then(()=>{
                return toast.success(`You're now ${following}`)
            }).catch(err => {
                toast.error(`Unable to follow ${following}, please refresh your token.`)
                return console.log('Something went wrong!', err);
            });
            return
        }
    },[authtoken, follow, following])

    return(
        <div className="container p-2">
            <Toaster/>
            <div className="row gx-1">
                {
                    user?
                        <div className="col-sm-12 col-lg-6 p-5 d-flex flex-column justify-content-evenly text-center" >
                            <span className="fs-1 futura water text-uppercase my-3" style={{color:'white'}}>{user.display_name}</span>
                            <div className="d-flex flex-column">
                                <label className="futura fs-5" style={{color:'white'}}>Want to listen for longer?</label>
                                <a className='btn p-3 align-self-center' href={url} style={{backgroundColor: 'white'}}>
                                    <span className="fs-3 futura text-uppercase water">refresh token</span>
                                </a>
                            </div>
                        </div>
                    :
                        <div className="col-12 p-5 d-flex flex-column justify-content-evenly text-center" >
                            <span className="futura fs-1" style={{color:'white'}}>Want to hear what I'm listening to?</span>
                            <a className='btn p-3 my-3 align-self-center' href={url} style={{backgroundColor: 'white'}}>
                                <span className="fs-3 futura text-uppercase" style={{color: '#006994'}}>Connect your Spotify!</span>
                            </a>
                        </div>
                }
                {
                    allPlaylists.length >= 1 ?
                    <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-between">
                        <span className="futura fs-3" style={{color:'white'}}> Select a playlist to listen.</span>
                        {allPlaylists.map((res)=>{
                            return (
                                <div className="d-flex flex-column my-1 p-2 rounded" style={{backgroundColor: 'white'}} key={allPlaylists.indexOf(res)} value={res.data.id}>
                                    <span className="fs-5 futura water" >{res.data.name}</span>
                                    <div className="d-flex flex-row">
                                        <span className="futura water">by {res.data.owner.display_name}</span>
                                            <div className="ms-auto">
                                                {
                                                    res.following === true ?
                                                    <button style={{background:'none', border: 'none'}} onClick={()=>{
                                                        setFollow(res.data.id)
                                                        setFollowing(res.data.name)
                                                    }}>
                                                        <span className="water futura text-uppercase">follow</span>
                                                    </button>
                                                    :
                                                    <span className="water futura text-uppercase">following</span>

                                                }
                                                <span className="water px-1">|</span>
                                                <button style={{background:'none', border: 'none'}} onClick={()=>{
                                                    setPlaylist()
                                                    setTracks([])
                                                    setPlaylist(res.data.id)
                                                }}>
                                                    <i className="fa-solid fa-play water"></i>
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    null
                }
            </div>
            <div className="position-fixed w-100 bottom-0 start-0">
            { 
                tracks.length>=1?
                <Player accessToken={authtoken} trackUri={tracks} />
                :
                null
            }
            </div>
        </div>
    )
}

export default Music