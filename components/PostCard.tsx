import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../sanity'

function PostCard({ post }: any) {
  return (
    <Link  href={`/post/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md shadow-red-300">
        <div className="relative h-60 w-full">
          <Image
            className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
            layout="fill"
            src={urlFor(post.mainImage).url()!}
            alt=""
          />
        </div>
        <div className="flex h-full justify-between bg-white p-5 dark:bg-zinc-900">
          <div className="max-w-[80%]">
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              {post.description} by {post.author.name}
            </p>
          </div>

          <div className="relative h-12 w-12 ">
            <Image
              className="rounded-full"
              width={48}
              height={48}
              layout="responsive"
              src={urlFor(post.author.image).url()!}
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
