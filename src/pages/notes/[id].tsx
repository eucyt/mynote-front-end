import AppLayout from '@/components/Common/Layouts/AppLayout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { notesApi } from '@/hooks/notesApi'
import dynamic from 'next/dynamic'

const Note = () => {
  const router = useRouter()
  const { fetchNote, deleteNote, note, setNote } = notesApi()
  const MarkdownEditor = dynamic(
    () => import('@/components/Notes/MarkdownEditor'),
    { ssr: false }
  )
  const [saveMessage, setSaveMessage] = useState<string>('')

  useEffect(() => {
    if (router.isReady) {
      fetchNote(Number(router.query.id), router).then()
    }
  }, [router.query])

  useEffect(() => {
    if (note) {
      // updateNote(note).then(() => {
      //   setSaveMessage(new Date().toLocaleTimeString() + 'に保存済み')
      // })
    }
  }, [note])

  return (
    <AppLayout>
      <Head>
        <title>MyNote - Notes</title>
      </Head>

      <div className="m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
        <p>{saveMessage}</p>
        <div className="relative h-10">
          <label className="text-xl pl-2 absolute bottom-0 inline-block">
            Title
          </label>
          <button
            className="px-2 py-1 absolute right-0 rounded transition duration-500 hover:bg-red-400 border border-red-200 bg-red-100"
            onClick={() => {
              deleteNote(Number(router.query.id)).then(() => {
                router.push('/')
              })
            }}>
            Delete
          </button>
        </div>

        <input
          type="text"
          className="mb-6 w-full rounded border border-gray-200"
          value={note?.title ?? ''}
          onChange={(e) => {
            note && setNote({ ...note, title: e.target.value })
          }}
        />

        <label className="text-xl ml-2">Body</label>
        <MarkdownEditor initialBody={note?.body} id={Number(router.query.id)} />
      </div>
    </AppLayout>
  )
}

export default Note
