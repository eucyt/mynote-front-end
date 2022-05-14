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
  const onChange = (value: string) => {
    setBody(value)
  }

  useEffect(() => {
    updateBody(props.id, body).then((r) => console.log('updated'))
  }, [body])

  useEffect(() => {
    if (props.initialBody) setBody(props.initialBody)
  }, [props.initialBody])

  return <SimpleMde value={body} onChange={onChange} />
}

export default MarkdownEditor
