import React, { useEffect, useState, useMemo } from 'react'
import SimpleMde from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { notesApi } from '@/hooks/notesApi'
import { useRouter } from 'next/router'
import { NoteItem } from '@/types/NoteItem'
import Loading from '@/components/Common/Loading'
import { useAuth } from '@/hooks/auth'

export const MarkdownEditor: React.VFC = () => {
  const [saveMessage, setSaveMessage] = useState('')
  const router = useRouter()
  const { fetchNote, deleteNote, updateNote, publishNote, unpublishNote } =
    notesApi()
  const [note, setNote] = useState<NoteItem>()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [publishedId, setPublishedId] = useState('')
  const [isPublsihed, setIsPublished] = useState(false)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth({ middleware: 'auth' })
  const SimpleMdeOptions = useMemo(() => {
    return {
      spellChecker: false,
      toolbar: [
        'bold',
        'italic',
        'strikethrough',
        '|',
        'heading',
        'quote',
        'code',
        'unordered-list',
        'ordered-list',
        'link',
        'table',
        '|',
        'undo',
        'redo'
      ]
    }
  }, [])

  // loading init note
  useEffect(() => {
    if (router.isReady) {
      fetchNote(setNote, Number(router.query.id))
    }
  }, [router.query])

  // loaded init note
  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setBody(note.body)
      setPublishedId(note.published_id)
      setIsPublished(note.published_at != null)
      setLoading(false)
    }
  }, [note])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loading />
      </div>
    )
  } else {
    return (
      <>
        {user.is_publishable && isPublsihed && publishedId ? (
          <div className="ml-2">
            <a
              href={'/' + publishedId}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-gray-400 transition">
              公開先リンク
            </a>
          </div>
        ) : (
          ''
        )}
        <div className="relative h-10">
          <label className="text-xl pl-2 absolute bottom-0 inline-block">
            Title
          </label>
          {user.is_publishable ? (
            isPublsihed ? (
              <button
                className="px-2 py-1 absolute right-20 rounded transition duration-500 hover:bg-yellow-400 border border-yellow-400 bg-yellow-200"
                onClick={() => {
                  unpublishNote(Number(router.query.id)).then(() => {
                    setIsPublished(false)
                  })
                }}>
                Unpublish
              </button>
            ) : (
              <button
                className="px-2 py-1 absolute right-20 rounded transition duration-500 hover:bg-yellow-400 border border-yellow-400 bg-yellow-200"
                onClick={() => {
                  publishNote(Number(router.query.id)).then((data) => {
                    setIsPublished(true)
                    setPublishedId(data)
                  })
                }}>
                Publish
              </button>
            )
          ) : (
            ''
          )}
          <button
            className="px-2 py-1 absolute right-0 rounded transition duration-500 hover:bg-red-400 border border-red-200 bg-red-100"
            onClick={() => {
              setLoading(true)
              deleteNote(Number(router.query.id)).then(() => {
                router.push('/notes/')
              })
            }}>
            Delete
          </button>
        </div>

        <input
          type="text"
          className="mb-6 w-full rounded border border-gray-200"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="text-xl ml-2">Body</label>
        <SimpleMde
          value={body}
          onChange={(value: string) => {
            setSaveMessage('')
            setBody(value)
          }}
          options={SimpleMdeOptions}
        />

        <button
          className="px-2 py-1 rounded transition duration-500 hover:bg-blue-400 border border-blue-200 bg-blue-100"
          onClick={() => {
            setSaveMessage('保存中です...')
            updateNote(Number(router.query.id), { title, body }).then(() =>
              setSaveMessage('保存しました!')
            )
          }}>
          Save
        </button>
        <p className="mt-2">{saveMessage}</p>
      </>
    )
  }
}

export default MarkdownEditor
