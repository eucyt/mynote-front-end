import axios from '@/lib/axios';
import {useState} from "react";
import {NoteItem} from "@/types/NoteItem";

export const notesApi = () => {
    // const [notesApi, setNotes] = useState<Array<NoteItem>>([]);
    const [note, setNote] = useState<NoteItem>();

    const fetchNote = async (noteId: number) => {
        axios
            .get('/api/notes/' + noteId)
            .then(res => setNote(res.data.data))
            .catch(error => {
                // TODO
            })
    }

    return {
        fetchNote,
        note
    };
};