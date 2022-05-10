import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {notesApi} from "@/hooks/notesApi";
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from "@toast-ui/react-editor";
import MarkdownEditor from "@/components/MarkdownEditor";


const Note = () => {
    const router = useRouter()
    const {fetchNote, updateNote, deleteNote, note, setNote} = notesApi()
    const editorRef = React.useRef<Editor>(null);

    useEffect(() => {
            if (router.isReady) {
                fetchNote(Number(router.query.id), router).then()
            }
        }, [router.query],
    )

    useEffect(() => {
        if (note) {
            updateNote(note).then(() => {
                // TODO: display message "updated"
                console.log("updated")
            })
        }
    }, [note])

    return (
        <AppLayout>
            <Head>
                <title>MyNote - Notes</title>
            </Head>

            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            deleteNote(Number(router.query.id)).then(() => {
                                router.push('/')
                            })
                        }}>delete
                </button>
            </div>
            <div
                className="m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
                <textarea value={note?.title ?? ""} onChange={(e) => {
                    note && setNote({...note, title: e.target.value})
                }}
                />
                
                <MarkdownEditor
                    ref={editorRef}
                    initialValue={note?.body ?? ""}
                    onChange={(body) => note && setNote({...note, body: body})}
                />
            </div>
        </AppLayout>
    )
}

export default Note
