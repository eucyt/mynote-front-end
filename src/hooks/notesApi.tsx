import axios from '@/lib/axios'
import { NextRouter } from 'next/dist/client/router'
import { NoteItem, NoteRequest } from '@/types/NoteItem'
import React from 'react'

export const notesApi = () => {
  const csrf = (): Promise<void> => axios.get('/sanctum/csrf-cookie')

  const createNote = async (
    setNote: React.Dispatch<React.SetStateAction<NoteItem | undefined>>
  ) => {
    // TODO: csrf works?
    await csrf()
    await axios.post('/api/notes').then((res) => setNote(res.data))
  }

  const fetchNotes = (
    setNotes: React.Dispatch<React.SetStateAction<NoteItem[]>>
  ) => {
    return axios.get('/api/notes').then((res) => setNotes(res.data.data))
  }

  const fetchNote = async (
    setNote: React.Dispatch<React.SetStateAction<NoteItem | undefined>>,
    noteId: number,
    router: NextRouter
  ) => {
    return await axios
      .get('/api/notes/' + noteId)
      .then((res) => setNote(res.data.data))
      .catch((error) => {
        if (error.response.status !== 200) {
          // TODO: status code must be 404
          router.replace('/404')
        }
      })
  }

  const updateNote = async (noteId: Number, note: NoteRequest) => {
    await csrf()
    await axios.put('/api/notes/' + noteId, note)
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
    deleteNote
  }
}
