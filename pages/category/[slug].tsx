import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
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
