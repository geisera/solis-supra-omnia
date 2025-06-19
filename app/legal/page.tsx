import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import LegalLayout from '@/layouts/LegalLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Legal' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'legal') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <LegalLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </LegalLayout>
    </>
  )
}
