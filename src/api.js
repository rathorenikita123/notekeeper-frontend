import axios from "axios";

export const listNotes = async () => {
    const data =  await axios.get('http://localhost:8000/notes');
    return data;
}

export const createNote = async (note) => {
    const data =  await axios.post('http://localhost:8000/notes', note);
    return data;
}

export const deleteNote = async (id) => {
    const data =  await axios.delete(`http://localhost:8000/notes/${id}`);
    return data;
}

export const updateNote = async (id, note) => {
    const data =  await axios.put(`http://localhost:8000/notes/${id}`, 
    {
        title: note.updateTitle,
        tagline: note.updateTagline,
        description: note.updateDescription
    });
    return data;
}

export const pinNote = async (id, pin) => {
    const data =  await axios.put(`http://localhost:8000/notes/pin/${id}`, 
    {
        pin
    });
    return data;
}

