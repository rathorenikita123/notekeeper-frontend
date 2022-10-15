import { createNote } from "../api";
import React, { useState } from "react";
import Notifications, {notify} from 'react-notify-toast';
const AddNotes = () => {
    const [formData, setFormData] = useState({
        title: "",
        tagline: "",
        description: "",
    });
    const { title, tagline, description } = formData;
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
        const data = await createNote(formData);
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
        <div className="p-8">
            <label htmlFor="my-modal-5" className="btn modal-button"><span className="text-2xl mr-2">+</span> Create A New Note</label>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl flex flex-col h-1/2 items-center justify-between">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-4 top-4">✕</label>

                    <h3 className="font-bold text-lg">Create a Note</h3>
                    <input type="text" name="title" onChange={handleChange} value={title} placeholder="Enter Title" className="input input-bordered input-accent w-full mt-2 " />
                    <input type="text" name="tagline" onChange={handleChange} value={tagline} placeholder="Enter Tagline" className="input input-bordered input-primary w-full " />
                    <textarea className="textarea textarea-bordered w-full h-1/3 " type="text" name="description" onChange={handleChange} value={description} placeholder="Enter Description"></textarea>
                    <div className="modal-action" >
                        <label htmlFor="my-modal-5" className="btn" onClick={onSubmit}>Add Note</label>
                    </div>
                </div>
            </div>
            <Notifications  options={{zIndex: 200, top: '20px'}}/>
        </div>
    );
}

export default AddNotes;