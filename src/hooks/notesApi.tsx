import axios from '@/lib/axios';
import {useState} from "react";
import {NoteItem, NoteRequest} from "@/types/NoteItem";

export const notesApi = () => {
    // const [notesApi, setNotes] = useState<Array<NoteItem>>([]);
    const [note, setNote] = useState<NoteItem>();

    const csrf = (): Promise<void> => axios.get('/sanctum/csrf-cookie')

    const fetchNote = (noteId: number) => {
        axios
            .get('/api/notes/' + noteId)
            .then(res => setNote(res.data.data))
            .catch(error => {
                // TODO
            })
    }

    const updateNote = async (noteRequest: NoteRequest) => {
        await csrf()
        axios
            .put('/api/notes/' + noteRequest.id, noteRequest)
            .then(
                // TODO
            )
            .catch(error => {
                // TODO
            })
    }

    return {
        fetchNote,
        updateNote,
        note,
        setNote
    };
};