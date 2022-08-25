import AuthenticatedLayout from '@/components/Common/Layouts/AuthenticatedLayout'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Note = () => {
  const MarkdownEditor = dynamic(
    () => import('@/components/Notes/MarkdownEditor'),
    { ssr: false }
  )

  return (
    <AuthenticatedLayout>
      <Head>
        <title>MyNote - Notes</title>
      </Head>

      <div className="flex justify-center">
        <div className="m-2 sm:m-6 max-w-6xl w-full p-2 sm:p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
          <MarkdownEditor />
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Note
