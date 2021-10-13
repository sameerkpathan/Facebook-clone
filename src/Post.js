import React from 'react'
import './css/post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';


import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';


function Post({ photoUrl , image , username , timestamp , message }) {
    return (
        <div className="post">
            <div className="post__top">
               <div className="post__topLeft">

                <Avatar src={photoUrl}/>

                 <div className="postInfo">

                   <h4>{username}</h4>

                   <p> {timestamp} <PublicIcon/></p>
                   
                 </div>
               </div>

               <MoreHorizIcon/>
               
            </div>

              <div className="post__middle">

               <p> {message}   </p>

               {image &&  <img src={image}/>}
               
              </div>

              <div className="post__bottom">
                 <div className="post__bottonOptions">
                    <ThumbUpIcon/> <p>Like</p>
                 </div>

                 <div className="post__bottonOptions">
                    <ChatBubbleOutlineIcon/><p>Comments</p>
                 </div>

                 <div className="post__bottonOptions">
                    <ShareIcon/> <p>Share</p>
                 </div>
              </div>
        </div>
    )
}

export default Post
