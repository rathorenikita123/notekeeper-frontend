import axios from "axios";

export const listNotes = async () => {
    const data =  await axios.get('https://notekeeper-backend.herokuapp.com/notes');
    return data;
}

export const createNote = async (note) => {
    const data =  await axios.post('https://notekeeper-backend.herokuapp.com/notes', note);
    return data;
}

export const deleteNote = async (id) => {
    const data =  await axios.delete(`https://notekeeper-backend.herokuapp.com/notes/${id}`);
    return data;
}

export const updateNote = async (id, note) => {
    const data =  await axios.put(`https://notekeeper-backend.herokuapp.com/notes/${id}`, 
    {
        title: note.updateTitle,
        tagline: note.updateTagline,
        description: note.updateDescription
    });
    return data;
}

export const pinNote = async (id, pin) => {
    const data =  await axios.put(`https://notekeeper-backend.herokuapp.com/notes/pin/${id}`, 
    {
        pin
    });
    return data;
}

