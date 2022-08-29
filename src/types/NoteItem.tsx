export interface NoteItem {
  id: number
  title: string
  body: string
  created_at: string
  updated_at: string
  published_at: string
  published_id: string
}

export type NoteRequest = Pick<NoteItem, 'title' | 'body'>
