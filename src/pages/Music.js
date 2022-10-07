import React, { useEffect, useState } from "react";
import Player from "./components/WebPlayer";
import SpotifyWebApi from "spotify-web-api-node";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID,
CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET,
REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI 

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI
});

const Music = () => {

    const [ accToken, setaccToken ] = useState(null),
    [ refToken, setrefToken ] = useState(null),
    [ expTime, setexpTime ] = useState(null)

    const [ user, setUser ] = useState(null),
    [ allPlaylists, setAllplaylists ] = useState([]),
    [ tracks, setTracks ] = useState([]),
    [ playlist, setPlaylist ] = useState(null),
    [ follow, setFollow ] = useState(null),
    [ following, setFollowing ] = useState(null),
    [ refresh, setRefresh ] = useState(false)

    useEffect(() => {
        axios.get('https://zaydjnubani.com/auth/token').then(res=>{
            if(res.data !== ''){
                setaccToken(res.data.access_token)
                setrefToken(res.data.refresh_token)
                setexpTime(res.data.expires_in)
            }
        }).catch(err=>{console.log(err)})
    }, []);

    useEffect(() => {
        if(accToken !== null && refToken !== null && refresh !== false){
            axios({
                method: 'POST',
                url: 'https://zaydjnubani.com/auth/refresh',
                data:{
                    refresh_token: refToken,
                    access_token: accToken
                }
            }
            ).then(res=>{
                console.log(expTime)
                setaccToken(res.data)
                setRefresh(false)
            }).catch(err=>console.log(err)) 
        }
    }, [accToken, refToken, refresh]);

    // gets user playlist
    useEffect(()=>{
        if(accToken !== null){
            spotifyApi.setAccessToken(accToken)
            spotifyApi.getMe().then(data=>{
                return setUser(data.body)
            }).catch(err=>{
                toast.error(`Unable to set authorization token, please try again.`)
                return console.log(window.location)
            })
            return
        }
    },[accToken])

    // grabs playlists
    useEffect(()=>{
        if(accToken !== null){
            spotifyApi.setAccessToken(accToken)
            spotifyApi.getUserPlaylists('zayd-nubani').then(data=>{
                return data.body.items.forEach(res=>{
                    if(res.name.toLowerCase() === 'eggplant parm'|res.name.toLowerCase() === 'texas bbq'|res.name.toLowerCase() === 'san peligrino'|res.name.toLowerCase() === 'when santana came to town'|res.name.toLowerCase() === 'kool aid'|res.name.toLowerCase() === 'suspect'){
                        return setAllplaylists(old=>[...old,{data: res}])
                    }
                })
            }).catch((err)=>{return console.log(err)})
            return
        }
    }, [accToken])

    useEffect(()=>{
        if(accToken !== null && user !== null && allPlaylists.length >= 1){
            spotifyApi.setAccessToken(accToken)
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
    },[user, accToken, allPlaylists])

    useEffect(()=>{
        if(accToken !== null && playlist !== null){
            spotifyApi.setAccessToken(accToken)
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
    },[accToken, playlist])

    useEffect(()=>{
        if(accToken !== null && follow !== null && following !== null){
            spotifyApi.setAccessToken(accToken)
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
    },[accToken, follow, following])

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
                                <button className='btn p-3 align-self-center' style={{backgroundColor: 'white'}} onClick={()=>{setRefresh(true)}}>
                                    <span className="fs-3 futura text-uppercase water">refresh token</span>
                                </button>
                            </div>
                        </div>
                    :
                        <div className="col-12 p-5 d-flex flex-column justify-content-evenly text-center" >
                            <span className="futura fs-1" style={{color:'white'}}>Want to hear what I'm listening to?</span>
                            <a className='btn p-3 my-3 align-self-center' href="/auth/login" style={{backgroundColor: 'white'}}>
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
                <Player accessToken={accToken} trackUri={tracks} />
                :
                null
            }
            </div>
        </div>
    )
}

export default Music