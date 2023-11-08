import React from 'react'
import img from "../assets/1452.jpg";
export default function Message({user,setmessage}) {
    
  return (
    <div className='user_message'>
       <div  className='user_heaging'>
        <i onClick={()=>setmessage(false)} className="fa-solid fa-arrow-left"></i>
        <h4>{user.name}</h4>
       </div>
       <div className='message'>
        <div className='client_message'>
           <img src={img}/>
           <p>this is your massage</p>
        </div>
        <p className='self_message'>
         this is my massage
        </p>
       </div>
       <div className="search_input_position">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded"
            placeholder="Message"
          />
          <button type="button" className="btn btn-outline-primary">
          <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
