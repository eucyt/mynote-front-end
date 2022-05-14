import AppLayout from '@/components/Common/Layouts/AppLayout'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Note = () => {
  const MarkdownEditor = dynamic(
    () => import('@/components/Notes/MarkdownEditor'),
    { ssr: false }
  )

  return (
    <AppLayout>
      <Head>
        <title>MyNote - Notes</title>
      </Head>

      <div className="m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200">
        <MarkdownEditor />
      </div>
    </AppLayout>
  )
}

export default Note
