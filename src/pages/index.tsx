import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, {useEffect} from "react";
import {notesApi} from "@/hooks/notesApi";
import {useRouter} from "next/router";

const Index = () => {
    const {createNote, note} = notesApi()
    const router = useRouter()

    // redirect new note page if new note is created
    useEffect(() => {
        if (note) {
            console.log(note)
            router.push('/notes/' + note?.id)
        }
    }, [note])

    return (
        <AppLayout>

            <Head>
                <title>MyNote - Notes</title>
            </Head>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        createNote().then(() => {
                        })
                    }}>create new note
            </button>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Index
