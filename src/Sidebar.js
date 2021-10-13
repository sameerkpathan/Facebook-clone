import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './css/sidebar.css'

function Sidebar() {
    
    return (
        <div className="sidebar">
            <Sidebaroptions src="https://scontent.fnag6-1.fna.fbcdn.net/v/t31.18172-1/c0.5.160.160a/p160x160/28061716_2033748510172555_7227464217607288187_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=p2s6qo1EOfUAX9i-HaC&_nc_ht=scontent.fnag6-1.fna&oh=170f2b4e2ecf9dd03030df5d997fda44&oe=618893B8" title="Sameer Pathan"/>

            <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png" title="Covid 19 Information Center" />

            <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Friend" />

            <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups"/>

            <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch" />

            <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png" title="Events" />
            
            <Sidebaroptions Icon={KeyboardArrowDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
