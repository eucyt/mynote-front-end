import React, { useEffect, useState, useMemo } from 'react'
import SimpleMde from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { notesApi } from '@/hooks/notesApi'
import { useRouter } from 'next/router'
import { NoteItem } from '@/types/NoteItem'
import Loading from '@/components/Common/Loading'
import { useAuth } from '@/hooks/auth'
import { Options } from 'easymde'
import Button from '@/components/Common/Button'

export const MarkdownEditor: React.VFC = () => {
  const [saveMessage, setSaveMessage] = useState('')
  const router = useRouter()
  const { fetchNote, deleteNote, updateNote, publishNote, unpublishNote } =
    notesApi()
  const [note, setNote] = useState<NoteItem>()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [publishedId, setPublishedId] = useState('')
  const [isPublished, setIsPublished] = useState(false)
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
  }, []) as Options
  const confirmPreview = () => {
    if (
      confirm(
        '保存していないデータは消去されます。\n必ずSaveをしてからPreviewしてください。'
      )
    ) {
      router.push('/notes/' + router.query.id + '/preview')
    }
  }
  const confirmPublish = () => {
    if (confirm('公開しますか？')) {
      publishNote(Number(router.query.id)).then((data) => {
        setIsPublished(true)
        setPublishedId(data)
      })
    }
  }

  const saveBtn = (
    <Button
      designType="outline"
      onClick={() => {
        setSaveMessage('保存中です...')
        updateNote(Number(router.query.id), { title, body }).then(() =>
          setSaveMessage('保存しました!')
        )
      }}>
      Save
    </Button>
  )

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
        {user.is_publishable && isPublished && publishedId ? (
          <div className="ml-2 mb-3">
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
          {saveBtn}
          {user.is_publishable ? (
            isPublished ? (
              <Button
                className="absolute right-52"
                onClick={() => {
                  unpublishNote(Number(router.query.id)).then(() => {
                    setIsPublished(false)
                  })
                }}>
                Unpublish
              </Button>
            ) : (
              <Button className="absolute right-52" onClick={confirmPublish}>
                Publish
              </Button>
            )
          ) : (
            ''
          )}
          <Button className="absolute right-24" onClick={confirmPreview}>
            Preview
          </Button>
          <Button
            className="absolute right-0"
            onClick={() => {
              setLoading(true)
              deleteNote(Number(router.query.id)).then(() => {
                router.push('/notes/')
              })
            }}>
            Delete
          </Button>
        </div>

        <label className="text-xl pl-2">Title</label>
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

        {saveBtn}
        <p className="mt-2">{saveMessage}</p>
      </>
    )
  }
}

export default MarkdownEditor
