export interface NoteItem {
  id: number
  title: string
  body: string
  created_at: string
  updated_at: string
}

export type NoteRequest = Pick<NoteItem, 'title' | 'body'>
