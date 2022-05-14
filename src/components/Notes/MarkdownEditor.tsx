import React, { useEffect, useState } from 'react'
import SimpleMde from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { notesApi } from '@/hooks/notesApi'

type Props = {
  initialBody?: string
  id: Number
}

export const MarkdownEditor: React.VFC<Props> = (props) => {
  const [body, setBody] = useState('')
  const { updateBody } = notesApi()
  const [saveMessage, setSaveMessage] = useState('')

  useEffect(() => {
    if (props.initialBody) setBody(props.initialBody)
  }, [props.initialBody])

  return (
    <>
      <SimpleMde
        value={body}
        onChange={(value: string) => {
          setSaveMessage('')
          setBody(value)
        }}
      />
      <button
        className="px-2 py-1 rounded transition duration-500 hover:bg-blue-400 border border-blue-200 bg-blue-100"
        onClick={() => {
          setSaveMessage('保存中です...')
          updateBody(props.id, body).then(() =>
            setSaveMessage('保存中しました!')
          )
        }}>
        Save
      </button>
      <p className="mt-2">{saveMessage}</p>
    </>
  )
}

export default MarkdownEditor
