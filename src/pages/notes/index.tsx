import AuthenticatedLayout from '@/components/Common/Layouts/AuthenticatedLayout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { notesApi } from '@/hooks/notesApi'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NoteItem } from '@/types/NoteItem'
import FullSizeLoading from '@/components/Common/FullSizeLoading'

const Index = () => {
  const { fetchNotes, createNote } = notesApi()
  const router = useRouter()
  const [notes, setNotes] = useState<Array<NoteItem>>([])
  const [newNote, setNewNote] = useState<NoteItem>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNotes(setNotes).then(() => setLoading(false))
  }, [])

  // redirect new note page if new note is created
  useEffect(() => {
    if (newNote) {
      router.push('/notes/' + newNote.id)
    }
  }, [newNote])

  if (loading) {
    return <FullSizeLoading />
  } else {
    return (
      <AuthenticatedLayout>
        <Head>
          <title>MyNote - Notes</title>
        </Head>

        <div className="flex justify-center">
          <div className="m-2 sm:m-6 max-w-6xl w-full  p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
            <button
              className="p-3 m-6 rounded transition duration-500 hover:opacity-50 border border-gray-200 bg-gray-100"
              onClick={() => {
                setLoading(true)
                createNote(setNewNote)
              }}>
              create new note
            </button>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6">
              {notes.map((note) => {
                return (
                  <Link href={'/notes/' + note.id} key={'note' + note.id}>
                    <div className="p-7 mx-6 mb-6 rounded overflow-hidden shadow-lg transition duration-500 hover:opacity-50 cursor-pointer border border-gray-200 h-32">
                      <p className="overflow-hidden h-full line-clamp-3">
                        {note.title}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    )
  }
}

export default Index
