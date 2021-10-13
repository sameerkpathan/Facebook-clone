import React, { useEffect, useState } from 'react'
import './css/feed.css'

import Storyreel from './Storyreel'

import MessageSender from './MessageSender'

import Post from './Post'
import { db } from './firebase'

function Feed() {

    const[posts,setPosts]=useState([]);

    useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        })))
    })
    },[]);

    console.log(posts)

    return (
        <div className="feed">
            {/* Story Reels */}
             <Storyreel/>
             
            {/* Messegesender */}

            <MessageSender/>

            {/* post */}
            {
                posts.map(post=>{

          return  <Post photoUrl={post.data.photoUrl} image={post.data.image} username={post.data.username} timestamp="1:40 PM" message={post.data.message} />
                })
            }

            {/* <Post photoUrl="" image="" username="Sameer Pathan" timestamp="12:40 PM" message=" dummy text" /> */}
        </div>
    )
}

export default Feed
