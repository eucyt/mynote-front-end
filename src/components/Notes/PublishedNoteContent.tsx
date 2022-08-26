import React from 'react'
import { NoteItem } from '@/types/NoteItem'
import { marked } from 'marked'
import Head from 'next/head'

type Props = {
  note: NoteItem
}

const PublishedNoteContent: React.VFC<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>{props.note.title}</title>
      </Head>
      <article className="prose">
        <h1 className="text-3xl mb-20">{props.note.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: marked(props.note.body ?? '') }}
        />
      </article>
    </>
  )
}

export default PublishedNoteContent
