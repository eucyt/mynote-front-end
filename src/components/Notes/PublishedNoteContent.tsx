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
        <h1 className="text-3xl">{props.note.title}</h1>
        <div className="flex justify-end  mb-10">
          <p>
            公開日:
            <time dateTime={props.note.published_at} itemProp="datepublished">
              {props.note.published_at.substring(0, 10)}
            </time>
          </p>
          <p className="ml-4">
            更新日:
            <time
              dateTime={props.note.updated_at.substring(0, 19)}
              itemProp="modified">
              {props.note.updated_at.substring(0, 10)}
            </time>
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: marked(props.note.body ?? '') }}
        />
      </article>
    </>
  )
}

export default PublishedNoteContent
