import React, { useState } from "react";
import img from "../assets/1452.jpg";
import Message from "./Message";

export default function MessengerBox() {
  const [message,setmessage]=useState(false)
  const [messgauser,stemessageuser]=useState({})
  const [users, setusers] = useState([
    {
      img: img,
      name: "Hasan",
      lastmessage: "Who",
      time: "time",
    },
    {
      img: img,
      name: "Imran",
      lastmessage: "Who",
      time: "time",
    },
    {
      img: img,
      name: "Ratul",
      lastmessage: "Who",
      time: "time",
    },
    {
      img: img,
      name: "Hasan",
      lastmessage: "Who",
      time: "time",
    },
    {
      img: img,
      name: "Hasan",
      lastmessage: "Who",
      time: "time",
    },
    {
      img: img,
      name: "Hasan",
      lastmessage: "Who",
      time: "time",
    },
    {
      img: img,
      name: "Hasan",
      lastmessage: "Who",
      time: "time",
    },
    {
      img: img,
      name: "Hasan",
      lastmessage: "Who",
      time: "time",
    },
  ]);

  return (
    <div className="messenger">

    {message? <Message user={messgauser} setmessage={setmessage} />
    
    
    :
    
    
    
    <div className="messenger_box">
      <div className="search_input">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            search
          </button>
        </div>
      </div>
      <div className="alluser">
        {users.map((item, index) => (
          <div key={index} className="userprofile" onClick={()=>
          {
          stemessageuser(item) 
          setmessage(true)
        }
          }>
            <img src={item.img} />
            <div className="user_detailes">
              <p>{item.name}</p>
              <div className="message_detailes">
                <p>{item.lastmessage}</p>
                <p> || {item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>}
    
  </div>
  );
}
