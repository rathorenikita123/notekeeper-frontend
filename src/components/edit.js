import React, { useState } from "react";
import Notification, {notify} from "react-notify-toast";
import {updateNote} from '../api.js';

const Edit= ({title, tagline, description, id}) => {
    const [formData, setFormData] = useState({
        updateTitle: title,
        updateTagline: tagline,
        updateDescription: description,
    });
    const { updateTitle, updateTagline, updateDescription} = formData;
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try{
        const data = await updateNote(id, formData);
        console.log(data);
        if(data.data.success){
            notify.show(data.data.message, 'success', 3000);
            window.location.reload();
        }
    }
    catch(err){
        notify.show("Something went wrong!", 'error', 3000);
    }
    };
    return (
        <div className="p-2">
            <label htmlFor="my-modal" className="btn modal-button">Edit</label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal text-white">
                <div className="modal-box w-11/12 max-w-5xl flex flex-col h-1/2 items-center justify-between">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-4 top-4">✕</label>

                    <h3 className="font-bold text-lg">Edit Note</h3>
                    <input type="text" name="updateTitle" onChange={handleChange} value={updateTitle} placeholder="Enter Title" className="input input-bordered input-accent w-full mt-2 " />
                    <input type="text" name="updateTagline" onChange={handleChange} value={updateTagline} placeholder="Enter Tagline" className="input input-bordered input-primary w-full " />
                    <textarea onChange={handleChange} className="textarea textarea-bordered w-full h-1/3 " type="text" name="updateDescription" value={updateDescription} placeholder="Enter Description"></textarea>
                    <div className="modal-action" >
                        <label htmlFor="my-modal" className="btn" onClick={onSubmit}>Edit Note</label>
                    </div>
                </div>
            </div>
            <Notification  options={{zIndex: 200, top: '20px'}}/>
        </div>
    );
}

export default Edit;