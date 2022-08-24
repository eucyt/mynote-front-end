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
        <div
          dangerouslySetInnerHTML={{ __html: marked(props.note.body ?? '') }}
        />
      </article>
    </>
  )
}

export default PublishedNoteContent
