import axios from '@/lib/axios'
import { NoteItem, NoteRequest } from '@/types/NoteItem'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const notesApi = () => {
  const csrf = (): Promise<void> => axios.get('/sanctum/csrf-cookie')
  const router = useRouter()
  const [error, setError] = useState<any>()

  const createNote = async (
    setNote: React.Dispatch<React.SetStateAction<NoteItem | undefined>>
  ) => {
    // TODO: csrf works?
    await csrf()
    await axios
      .post('/api/notes')
      .then((res) => setNote(res.data))
      .catch((error) => setError(error))
  }

  const fetchNotes = async (
    setNotes: React.Dispatch<React.SetStateAction<NoteItem[]>>
  ) => {
    return axios
      .get('/api/notes')
      .then((res) => setNotes(res.data.data))
      .catch((error) => setError(error))
  }

  const fetchNote = async (
    setNote: React.Dispatch<React.SetStateAction<NoteItem | undefined>>,
    noteId: number
  ) => {
    return await axios
      .get('/api/notes/' + noteId)
      .then((res) => setNote(res.data.data))
      .catch((error) => setError(error))
  }

  const updateNote = async (noteId: Number, note: NoteRequest) => {
    await csrf()
    await axios
      .put('/api/notes/' + noteId, note)
      .catch((error) => setError(error))
  }

  const deleteNote = async (noteId: number) => {
    // TODO: csrf works?
    await csrf()
    await axios
      .delete('/api/notes/' + noteId)
      .catch((error) => setError(error))
      .then
      // TODO
      ()
  }

  useEffect(() => {
    if (error) {
      if (error.response.status === 401) router.push('/login')
      if (error.response.status === 404) router.replace('/404')
    }
  }, [error])

  return {
    createNote,
    fetchNote,
    fetchNotes,
    updateNote,
    deleteNote
  }
}
