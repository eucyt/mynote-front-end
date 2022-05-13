import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

type Props = {
  initialValue: string
  setFunc: (value: string) => void
  ref: React.RefObject<Editor>
}

const MarkdownEditor: React.VFC<Props> = (props) => {
  const editorRef = React.useRef<Editor>(null)
  const setValue = () => {
    const editorInstance = editorRef.current?.getInstance()
    if (editorInstance) {
      props.setFunc(editorInstance?.getMarkdown())
    }
  }

  return (
    <Editor
      ref={editorRef}
      initialValue={props.initialValue}
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      autofocus={false}
      // TODO: cursor jumping happened in onChange because this component is rendered
      onBlur={() => {
        setValue()
      }}
    />
  )
}

export default MarkdownEditor
