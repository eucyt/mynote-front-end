import axios from '@/lib/axios';
import {useState} from "react";
import {NoteItem, NoteRequest} from "@/types/NoteItem";
import {NextRouter} from "next/dist/client/router";

export const notesApi = () => {
    // const [notesApi, setNotes] = useState<Array<NoteItem>>([]);
    const [note, setNote] = useState<NoteItem>();

    const csrf = (): Promise<void> => axios.get('/sanctum/csrf-cookie')

    const fetchNote = async (noteId: number, router: NextRouter) => {
        axios
            .get('/api/notes/' + noteId)
            .then(res => setNote(res.data.data))
            .catch(error => {
                if (error.response.status != 200) {
                    // TODO: status code must be 404
                    router.replace('/404')
                }
            })
    }

    const updateNote = async (noteRequest: NoteRequest) => {
        // TODO: csrf works?
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

    const deleteNote = async (noteId: number) => {
        // TODO: csrf works?
        await csrf()
        axios
            .delete('/api/notes/' + noteId)
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
        deleteNote,
        note,
        setNote
    };
};