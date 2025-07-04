import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Hero from '@/components/Hero'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 10

export default function Home({ posts }) {
  return (
    <>
      <div className="dark:divide-primary-200 divide-y divide-gray-200">
        <Hero />
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-200">
            LATEST INTEL
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-300">
            {siteMetadata.description}
          </p> */}
        </div>

        <ul className="dark:divide-primary-200 divide-y divide-gray-200">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, images, summary, tags, authors } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="dark:text-primary-400 text-base leading-6 font-medium text-gray-500">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                      <dd>
                        <Link
                          href={`/blog/${slug}`}
                          className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 transition-colors duration-200 dark:text-gray-100"
                        >
                          <img
                            src={images}
                            alt="…"
                            className="float-left mt-2 mr-4 mb-2 h-48 w-30 object-cover shadow-sm"
                          />
                        </Link>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 transition-colors duration-200 dark:text-gray-100"
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
                        <div className="prose max-w-none text-gray-500 dark:text-gray-300">
                          {/* <Link
                            href={`/blog/${slug}`}
                            className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 transition-colors duration-200 dark:text-gray-100"
                          >
                            <img
                              src={images}
                              alt="…"
                              className="float-left mt-2 mr-4 mb-2 h-48 w-30 object-cover shadow-sm"
                            />
                          </Link> */}
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
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
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
