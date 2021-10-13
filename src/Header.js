import React from 'react';
import './css/header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar, IconButton } from '@mui/material';

import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useStateValue } from './StateProvider';

function Header() {
  
  const[{user},dispatch]=useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="error in loading"/>
                  <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook" />
                  </div>
            </div>

            <div className="header__middle">
               <div className="header__option 
               header__option--active" >
                 <HomeIcon fontSize="large"/>
                </div>

                <div className="header__option"  >
                 <OndemandVideoIcon fontSize="large"/>
                </div>

                <div className="header__option"  >
                 <PeopleIcon fontSize="large"/>
                </div>

                <div className="header__option"  >
                 <SportsEsportsIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
               <div className="header__info">
                  <Avatar src="https://scontent.fnag6-1.fna.fbcdn.net/v/t31.18172-1/c0.5.160.160a/p160x160/28061716_2033748510172555_7227464217607288187_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=p2s6qo1EOfUAX9i-HaC&_nc_ht=scontent.fnag6-1.fna&oh=170f2b4e2ecf9dd03030df5d997fda44&oe=618893B8"/>
                  <h5>{user.displayName}</h5>
               </div>
               <IconButton>
               <AppsIcon/>
               </IconButton>

               <IconButton>
               <ForumIcon/>
               </IconButton>

               <IconButton>
               <NotificationsIcon/>
               </IconButton>

               <IconButton>
               <ArrowDropDownIcon/>
               </IconButton>



            </div>
        </div>
    )
}

export default Header
