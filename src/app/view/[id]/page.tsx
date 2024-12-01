import { CopyButton } from '@/components/button'
import { getContentCss, getContentHtml, listContentIds } from '@/contents'
import clsx from 'clsx'
import { ReadonlyURLSearchParams } from 'next/navigation'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<ReadonlyURLSearchParams>
}

export default async function View(props: Props) {
  const { id } = await props.params
  const style = await getContentCss(id)
  const html = await getContentHtml(id)

  return (
    <div className={clsx('flex flex-col gap-2')}>
      <div>
        <style>{style}</style>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      <div>
        <CopyButton text={html}></CopyButton>
        <SyntaxHighlighter
          language='html'
          style={dark}
          className={clsx('border rounded', 'p-2')}
        >
          {html}
        </SyntaxHighlighter>
      </div>
      <div>
        <CopyButton text={style}></CopyButton>
        <SyntaxHighlighter
          language='css'
          style={dark}
          className={clsx('border rounded', 'p-2')}
        >
          {style}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export const dynamicParams = false

export async function generateStaticParams() {
  const ids = await listContentIds()

  return ids.map((id) => ({
    id,
  }))
}
