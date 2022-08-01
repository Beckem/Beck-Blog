import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import PostCard from '../../components/PostCard'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'

interface Props {
  posts: [Post]
}

const Category: NextPage<Props> = ({ posts }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="min-h-screen overflow-hidden dark:bg-gray-900">
      <Head>
        <title>{slug}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1 className="text- mt-4 p-2 text-2xl font-semibold capitalize md:p-6">
        {slug} Posts
      </h1>
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  )
}

export default Category

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "post" && $slug in categories[]->title] | order(_createAt desc)  {
    _id,
    title,
    slug,
    categories[] -> {
        title,
    },
    author -> {
    name,
    image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query, { slug: params?.slug })

  return {
    props: {
      posts,
    },
  }
}
