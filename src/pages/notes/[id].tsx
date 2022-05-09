import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {notesApi} from "@/hooks/notesApi";


const Note = () => {
    const router = useRouter()
    const {fetchNote, updateNote, note, setNote} = notesApi()
    useEffect(() => {
            if (router.isReady) {
                fetchNote(Number(router.query.id))
            }
        }, [router.query],
    )

    useEffect(() => {
        if (note) {
            updateNote(note).then(() => {
                console.log("updated")
            })
        }
    }, [note])


    return (
        <AppLayout>
            <Head>
                <title>MyNote - Notes</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div data-color-mode="dark">
                                <textarea value={note?.title} onChange={(e) => {
                                    note && setNote({...note, title: e.target.value})
                                }}
                                />
                                <textarea value={note?.body} onChange={(e) => {
                                    note && setNote({...note, body: e.target.value})
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Note
