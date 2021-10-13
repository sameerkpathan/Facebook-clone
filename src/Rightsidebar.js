import React from 'react'
import './css/right.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';


function Rightsidebar() {
    return (
        <div className="widget">
            <div className="widget__header">
                <div className="widget__headerLeft">
                    <h4>Your Pages</h4>
                </div>
                <MoreHorizIcon/>
            </div>

            <div className="widget__body">
                <div className="widget__bodyOptions">
                   <Avatar src="https://www.adobe.com/express/create/media_114db2401080d263d7338e6fab6589ca67f85274c.jpeg?width=2000&format=webply&optimize=medium"/>
                   <h4>Camal Coder</h4>
                </div>

                <div className="widget__bodyOptions ml10" >
                   <NotificationsIcon/>
                   <p> 1 Notification</p>
                </div>

                <div className="widget__bodyOptions ml10">
                  <VolumeUpIcon/>
                   <p>Create Promotion</p>
                </div>
            </div>

            <hr/><br/>

            <div className="widget__header">
                <div className="widget__headerLeft">
                    <h4>Contacts</h4>
                </div>
                <div className="widget__headerLeftRight">
                <VideocamIcon/>
                <SearchIcon/>
                <MoreHorizIcon/>
                </div>
               
            </div>

            <div className="widget__body">
                <div className="widget__bodyOptions">
                   <Avatar src="https://scontent.fnag6-1.fna.fbcdn.net/v/t1.6435-9/74790415_2521248114774503_5109482868451573760_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=E2VzsugexVwAX_n85v3&_nc_ht=scontent.fnag6-1.fna&oh=c2d297724965f9bc8fc663bad89761f3&oe=6189D528"/>
                   <h4>Nihal Shaikh</h4>
                </div>

               
            </div>

            <div className="widget__body">
                <div className="widget__bodyOptions">
                   <Avatar src="https://scontent.fnag1-3.fna.fbcdn.net/v/t1.6435-1/s320x320/38084950_2120620248262019_9069900030596349952_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=LinnR_KcQxcAX_0e3TL&_nc_ht=scontent.fnag1-3.fna&oh=0f341ec5abe53c4279eb2fdf9ebdc775&oe=61890089"/>
                   <h4>Imran Shaikh</h4>
                </div>

               
            </div>

            <div className="widget__body">
                <div className="widget__bodyOptions">
                   <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskF1ENMQmiosFwUfUir1_F_A9iymAa2w62A&usqp=CAU"/>
                   <h4>Saurbh Gavli</h4>
                </div>

               
            </div>

            <div className="widget__body">
                <div className="widget__bodyOptions">
                   <Avatar src="https://scontent.fstv8-1.fna.fbcdn.net/v/t1.6435-9/160386298_776204409984441_5936372278529126229_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IChBh6f91UQAX9roeLI&_nc_ht=scontent.fstv8-1.fna&oh=90b33d528b2533b67ce17d3d520342fc&oe=618A6B4D"/>
                   <h4>Sahil Pathan</h4>
                </div>

               
            </div>

            <div className="widget__body">
                <div className="widget__bodyOptions">
                   <Avatar src="https://www.adobe.com/express/create/media_114db2401080d263d7338e6fab6589ca67f85274c.jpeg?width=2000&format=webply&optimize=medium"/>
                   <h4>Jorden jack</h4>
                </div>

               
            </div>

        </div>
    )
}

export default Rightsidebar
