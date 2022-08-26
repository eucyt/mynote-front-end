import { NoteItem } from '@/types/NoteItem'
import axios from '@/lib/axios'
import PublishedNoteContent from '@/components/Notes/PublishedNoteContent'
import PublicLayout from '@/components/Common/Layouts/PublicLayout'

interface Props {
  note: NoteItem
}

const PublishedNote = (props: Props) => (
  <PublicLayout>
    <div className="flex justify-center p-2">
      <div className="sm:my-12 mx-auto w-full sm:w-4/5 max-w-5xl bg-white rounded-lg shadow-lg py-8 p-6 sm:py-20 sm:px-12 flex justify-center">
        <PublishedNoteContent note={props.note} />
      </div>
    </div>
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
