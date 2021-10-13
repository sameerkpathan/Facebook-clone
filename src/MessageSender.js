import { Avatar,Icon,IconButton,Modal } from '@mui/material'
import React,{useState} from 'react'
import './css/messagesender.css'

import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import CloseIcon from '@mui/icons-material/Close';
import { db } from './firebase';
import firebase, { storage } from 'firebase';
import {useStateValue} from './StateProvider'
import 'firebase/storage';

function MessageSender() {
 const [open, setopen] = useState(false);

 const[{user} , dispatch]=useStateValue();

 const[image , setImage] = useState("");

 const[message, setMessage] = useState('');

 const[progress,setprogress]=useState(0);


   const handleClose =()=>{
    setopen(false)
   }

   const handleOpen = ()=>{
    setopen(true)
   }

   const uploadFilewithClick = ()=>{
    document.getElementById("imageFile").click();
    }
    
   const handleChange =(e)=>{
           if(e.target.files[0]){
               setImage(e.target.files[0]);
           }
        //    console.log(image);

    }

    const handleUpload = (e)=>{
         e.preventDefault();
         if(image === ''){
             db.collection("posts").add({
                 timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                 message:message,
                 username:"Sameer Pathan",
                //  photoURL : src="https://scontent.fnag6-1.fna.fbcdn.net/v/t31.18172-1/c0.5.160.160a/p160x160/28061716_2033748510172555_7227464217607288187_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=p2s6qo1EOfUAX9i-HaC&_nc_ht=scontent.fnag6-1.fna&oh=170f2b4e2ecf9dd03030df5d997fda44&oe=618893B8"
             })
           
         }
        //  else{
        //   const uploadTask = storage.ref(`images/${image.name}`).put(image);

        //   uploadTask.on(
        //       "state_changed",(snapshot)=>{
        //               const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        //               setprogress(progress);
        //       },(error)=>{
        //         console.log(error);
        //         alert(error.message);
        //       },
        //       ()=>{
        //           storage.ref('images').child(image.name).getDownloadUrl().then(url=>{
        //             db.collection("posts").add({
        //                 timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        //                 message:message,
        //                 username:user.diplayName,
        //                 image:url
        //             })
        //           });
        //       }
        //   )
        // }
        handleClose();
        setMessage('');
        setImage('');
        setprogress(0);
    }

   

    

    return (
        <>
        {/* we use Modal from material ui it is open when you click on post so it will show a we can add html(jsx) accordingly our use */}
        <Modal open={open} onClose={handleClose}>
           <div className="modal_pop">
               <form>
                   <div className="modalHeading">
                        <h3>Create Post</h3>
                        
                            <IconButton onClick={handleClose}>
                            <CloseIcon/>
                            </IconButton>
                   </div>

                   <div className="modalHeader__top">
                      <Avatar src="https://scontent.fnag6-1.fna.fbcdn.net/v/t31.18172-1/c0.5.160.160a/p160x160/28061716_2033748510172555_7227464217607288187_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=p2s6qo1EOfUAX9i-HaC&_nc_ht=scontent.fnag6-1.fna&oh=170f2b4e2ecf9dd03030df5d997fda44&oe=618893B8"/>
                      <h5>Sameer Pathan</h5>
                   </div>

                   <div className="modal__body">
                     <textarea rows="5" placeholder="What's on your mind Sameer ?" onChange={e=>setMessage(e.target.value)} >{message}</textarea>
                   </div>

                   <div className="modalFooter">
                      <div className="modalFooterLeft">
                        <h4>Add to your post</h4>
                      </div>

                      <div className="modalFooterRight">
                        <IconButton onClick={uploadFilewithClick}>
                         <PhotoLibraryIcon fontSize="large" style={{color:"lightgreen"}} />
                        </IconButton>

                        <input type="file" id="imageFile" onChange={handleChange} style={{display:"none"}}/>

                        <IconButton>
                         <VideoCallIcon fontSize="large" style={{color:"red"}}/>
                        </IconButton>

                        <IconButton>
                         <InsertEmoticonIcon fontSize="large" style={{color:"#ffb100"}} />
                        </IconButton>
                      </div>
                   </div>
                   {
                       image!=="" && <h2 style={{"fontSize":"15px","marginBottom":"20px","color":"green"}}>Image is added and will be displayed after clicking on post button</h2>
                   }
                   {
                       progress!= "" &&  <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}} />

                   }
                      <input type="submit" onClick={handleUpload} className="post__submit" value="Post" />

               </form>
           </div>
        </Modal>


        <div className="messsagesender">
            <div className="messagesebder__top">

                <Avatar src="https://scontent.fnag6-1.fna.fbcdn.net/v/t31.18172-1/c0.5.160.160a/p160x160/28061716_2033748510172555_7227464217607288187_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=p2s6qo1EOfUAX9i-HaC&_nc_ht=scontent.fnag6-1.fna&oh=170f2b4e2ecf9dd03030df5d997fda44&oe=618893B8"/>

                <form>
                    <input type="text" placeholder="What's on you mind Sameer ?"  onClick={handleOpen}/>
                </form>
            </div>

            <div className="messagesebder__bottom">
               <div className="messangerOptions">
                   <VideoCallIcon style={{color:'red'}} fontSize="large" />
                   <p>Live Video</p>
               </div>

               <div className="messangerOptions">
                   <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize="large" />
                   <p>Photo/Video</p>
               </div>

               <div className="messangerOptions">
                   <InsertEmoticonIcon style={{color:'#ffb100'}} fontSize="large" />
                   <p>Feeling/Activity</p>
               </div>
            </div>
        </div>
        </>
    )
}

export default MessageSender
