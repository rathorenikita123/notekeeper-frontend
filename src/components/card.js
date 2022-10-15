import Edit from './edit.js';
import React, { useState } from "react";
import { deleteNote } from '../api.js';
import Notification, { notify } from 'react-notify-toast';
import { pinNote } from '../api.js';
import { IconCheckbox } from "react-icon-checkbox";

const Card = ({ title, tagline, description, id, pinned }) => {
    const [pin,setPin] = useState(pinned);
    
    const handlePin = async () => { 
        await pinNote(id, !pin);
        setPin(!pin);
        window.location.reload();

    }
    const handleDelete = async () => {
        try {
            console.log(id);
            const data = await deleteNote(id);
            console.log(data);
            if (data.data.success) {
                notify.show(data.data.message, 'success', 3000);
                window.location.reload();
            }
        }
        catch (err) {
            notify.show("Something went wrong!", 'error', 3000);
        }
    }
    return (
        <div className="card h-64 bg-primary text-primary-content text-left">
           
            <div className="card-body">
              {/* <input type="checkbox" checked={pin} className="checkbox" onChange={handlePin} /> */}
               
                <div className="flex w-full justify-between items-center">
                <h2 className="card-title">{title}</h2>
                 <IconCheckbox checked={pin} 
                    checkedIcon={<img src= {require('../images/pin-icon.png')} alt="pin" width="20" height="20" />} 
                    uncheckedIcon={<img src={require('../images/unpin.png')} alt="unpin"  width="20" height="20" />}
                    onClick={handlePin} />
                 </div>
                <p>{tagline}</p>
                <div className="card-actions justify-end items-center">
                    <button className="btn" onClick={handleDelete}>Delete</button>
                    <Edit title={title} tagline={tagline} description={description} id={id} />
                </div>
            </div>
            <Notification options={{ zIndex: 200, top: '20px' }} />
        </div>
    );
}

export default Card;