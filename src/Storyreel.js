import { Avatar } from '@mui/material'
import React from 'react'
import './css/story.css'

function Storyreel() {
    return (
        <div className="storyreel">
            <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
                 <Avatar src="https://scontent.fnag6-1.fna.fbcdn.net/v/t31.18172-1/c0.5.160.160a/p160x160/28061716_2033748510172555_7227464217607288187_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=p2s6qo1EOfUAX9i-HaC&_nc_ht=scontent.fnag6-1.fna&oh=170f2b4e2ecf9dd03030df5d997fda44&oe=618893B8"/>
                 <h4>Sameer Pathan</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqP3i5WxO1zQAOHN1MtvVbXLcoEigC19yqGA&usqp=CAU')`}}>
                 <Avatar src="https://scontent.fnag6-1.fna.fbcdn.net/v/t1.6435-9/74790415_2521248114774503_5109482868451573760_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=E2VzsugexVwAX_n85v3&_nc_ht=scontent.fnag6-1.fna&oh=c2d297724965f9bc8fc663bad89761f3&oe=6189D528" />
                 <h4>Nihal Shaikh</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://kreditings.com/wp-content/uploads/2021/04/Picsart-Edit-Background-Full-HD-34.jpg')`}}>
                 <Avatar src="https://scontent.fnag1-3.fna.fbcdn.net/v/t1.6435-1/s320x320/38084950_2120620248262019_9069900030596349952_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=LinnR_KcQxcAX_0e3TL&_nc_ht=scontent.fnag1-3.fna&oh=0f341ec5abe53c4279eb2fdf9ebdc775&oe=61890089" />
                 <h4>Imran Shaikh</h4>
            </div>

           
            <div className="story" style={{backgroundImage:`url('https://m.media-amazon.com/images/I/71+o6MI9iHL._SY550_.jpg')`}}>
                 <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AnOLEzGuvO-mwX8U_z8u3oAI4AMUfyqDbw&usqp=CAU"/>
                 <h4>Jorden</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqB43fwmCQbXA7MJDXrseBqMhdqyH8ED8KQ&usqp=CAU')`}}>
                 <Avatar src="data:image/png;base64,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"/>
                 <h4>Newton School</h4>
            </div>

                       


        </div>
    )
}

export default Storyreel
