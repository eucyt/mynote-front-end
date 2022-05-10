import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {notesApi} from "@/hooks/notesApi";
import '@toast-ui/editor/dist/toastui-editor.css';
import MarkdownEditor from "@/components/MarkdownEditor";


const Note = () => {
    const router = useRouter()
    const {fetchNote, updateNote, deleteNote, note, setNote} = notesApi()

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


            <div
                className="m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
                <div className="relative h-10">
                    <button
                        className="px-2 py-1 absolute right-0 rounded transition duration-500 hover:bg-red-400 border border-red-200 bg-red-100"
                        onClick={() => {
                            deleteNote(Number(router.query.id)).then(() => {
                                router.push('/')
                            })
                        }}>Delete
                    </button>
                    <label className="text-xl pl-2 absolute bottom-0 inline-block">Title</label>
                </div>

                <input type="text" className="mb-6 w-full rounded border border-gray-200"
                       value={note?.title ?? ""}
                       onChange={(e) => {
                           note && setNote({...note, title: e.target.value})
                       }}
                />

                <label className="text-xl ml-2">Body</label>
                <MarkdownEditor
                    initialValue={note?.body ?? ""}
                    onChange={(body) => note && setNote({...note, body: body})}
                />
            </div>
        </AppLayout>
    )
}

export default Note
