import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, {useEffect} from "react";
import {notesApi} from "@/hooks/notesApi";
import {useRouter} from "next/router";

const Index = () => {
    const {fetchNotes, createNote, note, notes} = notesApi()
    const router = useRouter()

    useEffect(() => {
        fetchNotes()
    }, [])

    // redirect new note page if new note is created
    useEffect(() => {
        if (note) {
            router.push('/notes/' + note?.id)
        }
    }, [note])

    return (
        <AppLayout>

            <Head>
                <title>MyNote - Notes</title>
            </Head>


            <div
                className="m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
                <button
                    className="p-3 m-6 rounded transition duration-500 hover:opacity-50 border border-gray-200 bg-gray-100"
                    onClick={() => {
                        createNote().then(() => {
                        })
                    }}>create new note
                </button>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6">
                    {notes.map((note) => {
                        return (
                            <div
                                className="p-7 mx-6 mb-6 rounded overflow-hidden shadow-lg transition duration-500 hover:opacity-50 cursor-pointer border border-gray-200 h-32"
                                onClick={() => {
                                    router.push('/notes/' + note.id)
                                }}>
                                <p className="overflow-hidden h-full line-clamp-3">{note.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </AppLayout>
    )
}

export default Index
