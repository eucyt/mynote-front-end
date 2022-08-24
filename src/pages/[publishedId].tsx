import { NoteItem } from '@/types/NoteItem'
import axios from '@/lib/axios'
import GuestLayout from '@/components/Common/Layouts/GuestLayout'
import PublishedNoteContent from '@/components/Notes/PublishedNoteContent'

interface Props {
  note: NoteItem
}

const PublishedNote = (props: Props) => (
  <GuestLayout>
    <PublishedNoteContent note={props.note} />
  </GuestLayout>
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
