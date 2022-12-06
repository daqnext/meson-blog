import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 3

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const gradients = {
  '0': ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  '1': ' from-[#D8B4FE] to-[#818CF8]',
  '2': ' to-[#6EE7B7] from-[#6EE7F9]',
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="grid grid-cols-1 space-y-10 py-4 sm:space-y-5 sm:py-14 xl:grid-cols-5">
          <div className="col-span-3 justify-center space-y-5 align-middle">
            <span className="relative inset-y-4 ml-24 inline-block px-1 before:absolute before:-inset-1 before:block before:-skew-y-6 before:rounded-lg before:bg-blue-600 before:bg-opacity-20 sm:inset-y-7 sm:ml-40">
              <span className="relative inline-block -rotate-6 text-blue-500">
                <Link
                  href="https://twitter.com/NetworkMeson"
                  className="font-sans text-sm font-bold text-blue-500 transition hover:underline hover:underline-offset-8 sm:text-xl"
                >
                  @meson network
                </Link>
              </span>
            </span>
            <h1 className="pt-2 text-4xl font-bold leading-9 tracking-tight text-background-color dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-snug">
              Meson
              <span className="relative inset-y-8 ml-2 inline-block -rotate-12 font-sans text-blue-500 sm:inset-y-14">
                ^
              </span>
              Network
            </h1>
            <p className="font-titl text-black dark:text-white sm:pr-6 sm:text-xl sm:leading-8">
              We believe the design principle behind blockchain is to make the rights to everyone
              and not be governed by the giants. That’s why we practice the protocol model to build
              the marketplace and take it to the Raspberry Pi, Xbox, Playstation, and IoT as well.{' '}
              {/* In my
              free time, I like developing{' '}
              <Link
                href="/projects"
                className="text-black underline decoration-primary-500 underline-offset-4 hover:cursor-pointer hover:text-blue-500 dark:text-white hover:dark:text-blue-500"
              >
                <a>side projects</a>
              </Link>{' '}
              and{' '}
              <Link href="/blog">
                <a className="text-black underline decoration-primary-500 underline-offset-4 hover:cursor-pointer hover:text-blue-500 dark:text-white hover:dark:text-blue-500">
                  blogging
                </a>
              </Link>{' '}
              about my journey as an Entrepreneur. */}
              Have a good read! <span className="waving-hand text-2xl">👋🏻</span>
            </p>
            <p className="leading-7 text-gray-500 underline underline-offset-4 sm:pr-6 sm:text-lg">
              <Link
                href="https://meson.network/about.html"
                className="hover:cursor-pointer hover:text-blue-500 dark:text-gray-500 hover:dark:text-blue-500"
              >
                <a>Read the rest of my bio &rarr;</a>
              </Link>
            </p>
          </div>
          {siteMetadata.newsletter.provider !== '' && (
            <div className="col-span-2 flex xl:items-center xl:justify-center xl:pl-6">
              <NewsletterForm />
            </div>
          )}
        </div>

        <h1 className="my-4 mt-16 pb-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Recent Posts{' '}
        </h1>
        <div className="col-span-2 divide-y divide-gray-200 dark:divide-gray-700">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
