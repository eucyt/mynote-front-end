import axios from '@/lib/axios'
import { useState } from 'react'
import { NoteItem, NoteRequest } from '@/types/NoteItem'
import { NextRouter } from 'next/dist/client/router'

export const notesApi = () => {
  const [notes, setNotes] = useState<Array<NoteItem>>([])
  const [note, setNote] = useState<NoteItem>()

  const csrf = (): Promise<void> => axios.get('/sanctum/csrf-cookie')

  const fetchNotes = () => {
    axios.get('/api/notes').then((res) => setNotes(res.data.data))
  }

  const createNote = async () => {
    // TODO: csrf works?
    await csrf()
    await axios.post('/api/notes').then((res) => setNote(res.data))
  }

  const fetchNote = async (noteId: number, router: NextRouter) => {
    await axios
      .get('/api/notes/' + noteId)
      .then((res) => setNote(res.data.data))
      .catch((error) => {
        if (error.response.status !== 200) {
          // TODO: status code must be 404
          router.replace('/404')
        }
      })
  }

  const updateNote = async (noteRequest: NoteRequest) => {
    // TODO: csrf works?
    await csrf()
    await axios
      .put('/api/notes/' + noteRequest.id, noteRequest)
      .then
      // TODO
      ()
  }

  const deleteNote = async (noteId: number) => {
    // TODO: csrf works?
    await csrf()
    await axios
      .delete('/api/notes/' + noteId)
      .then
      // TODO
      ()
  }

  return {
    createNote,
    fetchNote,
    fetchNotes,
    updateNote,
    deleteNote,
    note,
    notes,
    setNote
  }
}
