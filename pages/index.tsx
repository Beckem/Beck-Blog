import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="dark:bg-gray-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="relative">
        <div className="">
          <Image
            layout="responsive"
            width="100vw"
            height="40vh"
            className=""
            src="https://static.vecteezy.com/system/resources/previews/001/105/389/large_2x/wireframe-landscape-banner-design-vector.jpg"
          />
        </div>

        <div
          className="absolute bottom-1/2 left-1/2 z-10 -translate-x-1/2  text-2xl font-bold leading-10
        text-white shadow-lg"
        >
          I never dreamed about success. I worked for it
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
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
  const query = `*[_type == "post"]{
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
