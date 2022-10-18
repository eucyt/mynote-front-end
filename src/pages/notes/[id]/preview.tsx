import AuthenticatedLayout from '@/components/Common/Layouts/AuthenticatedLayout'
import Head from 'next/head'
import PreviewNoteContent from '@/components/Notes/PreviewNoteContent'
import { NoteItem } from '@/types/NoteItem'
import React, { useEffect, useState } from 'react'
import { notesApi } from '@/hooks/notesApi'
import { useRouter } from 'next/router'
import Loading from '@/components/Common/Loading'
import Link from 'next/link'

const Note = () => {
  const [note, setNote] = useState<NoteItem>()
  const { fetchNote } = notesApi()
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      fetchNote(setNote, Number(router.query.id))
    }
  }, [router.query])

  if (!note) {
    return (
      <div className="flex justify-center py-20">
        <Loading />
      </div>
    )
  } else {
    return (
      <AuthenticatedLayout>
        <Head>
          <title>MyNote - Notes</title>
        </Head>

        <div className="flex justify-center ">
          <Link href={'/notes/' + router.query.id}>
            <button className="mt-12 px-3 py-2 rounded transition duration-500 hover:bg-gray-400 border border-gray-400 bg-gray-200">
              Back to Edit Screen
            </button>
          </Link>
        </div>

        <div className="flex justify-center p-2">
          <div className="sm:my-12 mx-auto w-full sm:w-4/5 max-w-5xl bg-white rounded-lg shadow-lg py-8 p-6 sm:py-20 sm:px-12 flex justify-center">
            <PreviewNoteContent note={note} />
          </div>
        </div>
      </AuthenticatedLayout>
    )
  }
}

export default Note
