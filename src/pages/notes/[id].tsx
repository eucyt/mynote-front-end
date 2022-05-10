import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {notesApi} from "@/hooks/notesApi";
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from "next/dynamic";
import {Editor} from "@toast-ui/react-editor";


const Note = () => {
    const router = useRouter()
    const {fetchNote, updateNote, deleteNote, note, setNote} = notesApi()
    const MarkdownEditor = dynamic(() => import('@/components/MarkdownEditor'), {ssr: false})
    const [saveMessage, setSaveMessage] = useState<string>("")
    const editorRef = React.useRef<Editor>(null)

    useEffect(() => {
            if (router.isReady) {
                fetchNote(Number(router.query.id), router).then()
            }
        }, [router.query],
    )

    useEffect(() => {
        if (note) {
            updateNote(note).then(() => {
                setSaveMessage(new Date().toLocaleTimeString() + "に保存済み")
            })
        }
    }, [note])

    return (
        <AppLayout>
            <Head>
                <title>MyNote - Notes</title>
            </Head>


            <div
                className="m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
                <p>{saveMessage}</p>
                <div className="relative h-10">
                    <label className="text-xl pl-2 absolute bottom-0 inline-block">Title</label>
                    <button
                        className="px-2 py-1 absolute right-20 rounded transition duration-500 hover:bg-blue-400 border border-blue-200 bg-blue-100">
                        Save
                        {/* HACK: This is dummy. This note with latest body is saved by clicking this button because MarkdownEditor must be blur in this case. */}
                    </button>
                    <button
                        className="px-2 py-1 absolute right-0 rounded transition duration-500 hover:bg-red-400 border border-red-200 bg-red-100"
                        onClick={() => {
                            deleteNote(Number(router.query.id)).then(() => {
                                router.push('/')
                            })
                        }}>Delete
                    </button>
                </div>

                <input type="text" className="mb-6 w-full rounded border border-gray-200"
                       value={note?.title ?? ""}
                       onChange={(e) => {
                           note && setNote({...note, title: e.target.value})
                       }}
                />

                <label className="text-xl ml-2">Body</label>
                <MarkdownEditor
                    ref={editorRef}
                    initialValue={note?.body ?? ""}
                    setFunc={(body) => note && setNote({...note, body: body})}
                />
            </div>
        </AppLayout>
    )
}

export default Note
