import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import DayBg from '../images/day.png'
import NightBg from '../images/night2.png'
interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }) => {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (theme == null) setTheme('light')
  }, [])

  return (
    <div className="overflow-hidden dark:bg-gray-900">
      <Head>
        <title>Beck Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="relative">
        <div className="h-[40vh] w-screen md:h-[80vh]">
          <Image
            layout="fill"
            src={theme === 'light' ? DayBg : NightBg}
            alt="banner"
          />
        </div>

        <div
          className="text-shadow absolute top-1/2 left-1/2 z-10  -translate-x-1/2 -translate-y-1/2 text-lg font-bold leading-10
        text-white md:text-3xl"
        >
          I never dreamed about success. I worked for it
        </div>
      </div>

      <h1 className="text- p-2 text-2xl font-semibold md:p-6">Latest Posts</h1>
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-md">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between bg-white p-5 dark:bg-zinc-900">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>

                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    slug,
    author -> {
    name,
    image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
