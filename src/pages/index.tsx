import React from 'react'
import PublicLayout from '@/components/Common/Layouts/PublicLayout'
import ApplicationLogo from '@/components/Common/ApplicationLogo'
import Head from "next/head";

const Index = () => {
  return (
    <PublicLayout>
      <Head>
        <title>MyNote - Home</title>
      </Head>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <ApplicationLogo className="mx-auto" />
          <h1 className="font-serif text-7xl">MyNote</h1>
          <div className="flex justify-center">
            <a href="/register">
              <button className="mt-10 mx-auto px-8 py-4 text-xl border border-gray-900 bg-white hover:text-gray-100 hover:bg-gray-900 transition ease-in-out">
                Get Started!
              </button>
            </a>
          </div>
          <div className="flex justify-center">
            <a
              className="mt-6 text-gray-400 underline mx-auto hover:text-gray-300 transition ease-in-out"
              href="https://euchi.jp/"
              target="_blank"
              rel="nofollow noopener noreferrer">
              Creator&apos;s Portfolio Site
            </a>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}

export default Index
