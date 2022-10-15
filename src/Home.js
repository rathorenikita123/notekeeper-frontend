import React, { useEffect, useState } from "react";
import Card from "./components/card";
import { listNotes } from "./api";
import AddNotes from "./components/addNote.js";
import Pagination from "./components/Pagination";
const Home = () => {
    const [notes, setNotes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [notesPerPage] = useState(6);

    useEffect(() => {
        getNotes();
    }, []);

   


    const getNotes = async () => {
        const data = await listNotes();
        setNotes(data.data.data);
    }

    const indexOfLastPost = currentPage * notesPerPage;
    const indexOfFirstPost = indexOfLastPost - notesPerPage;
    const currentNotes = notes.slice(indexOfFirstPost, indexOfLastPost)

    console.log(currentNotes);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-10 min-h-screen items-center flex flex-col" data-theme="night">
            <h1 className='text-4xl font-bold'>Note Keeper</h1>
            <div className="w-full">
                <AddNotes />
            </div>
            {currentNotes.length > 0 ?(
            <div className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 w-full gap-10 bg-[#1d283a]">
                {
                    currentNotes.map((note) => {
                        return (
                            <Card key={note._id} title={note.title} tagline={note.tagline} description={note.description} id={note._id} pinned={note.pin} />
                        )
                    }
                    )
                }
            </div>)
            :
            (<div className="flex flex-col items-center justify-center p-8 w-full  bg-[#1d283a]">
                <h1 className="text-2xl font-bold">No Notes Found</h1>
                </div>
            )
                }

     <Pagination
        notesPerPage={notesPerPage}
        totalNotes={notes.length}
        paginate={paginate}
        currentPage={currentPage}
      
      />
            {/* <div classN="btn-group ">
                <button class="btn">1</button>
                <button class="btn btn-active">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
            </div> */}
        </div>
    );
}

export default Home;