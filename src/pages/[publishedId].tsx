import { NoteItem } from '@/types/NoteItem'
import axios from '@/lib/axios'
import PublishedNoteContent from '@/components/Notes/PublishedNoteContent'
import PublicLayout from '@/components/Common/Layouts/PublicLayout'

interface Props {
  note: NoteItem
}

const PublishedNote = (props: Props) => (
  <PublicLayout>
    <PublishedNoteContent note={props.note} />
  </PublicLayout>
)

export default PublishedNote

export async function getServerSideProps({ params }: any) {
  const note = await axios
    .get('/api/notes/' + params.publishedId)
    .then((res) => res.data.data)
    .catch(console.error)

  if (!note) {
    return {
      notFound: true
    }
  }

  const props: Props = { note }

  return {
    props
  }
}
