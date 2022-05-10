import React from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from "@toast-ui/react-editor";

type Props = {
    ref: React.RefObject<Editor>
    initialValue: string
    onChange: (value: string) => void
}


const MarkdownEditor: React.VFC<Props> = (props) => {
    const editorRef = React.useRef<Editor>(null)

    // const Editor = dynamic(() =>
    //         require('@toast-ui/react-editor')
    //     , {
    //         ssr: false
    //     })

    return (
        <Editor
            ref={editorRef}
            // TODO: display initialed body
            initialValue={props.initialValue}
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            onChange={
                () => {
                    const editorInstance = editorRef.current?.getInstance()
                    if (editorInstance) {
                        props.onChange(editorInstance?.getMarkdown())
                    }
                }
            }
        />
    )
}

export default MarkdownEditor