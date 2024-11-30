import { getContentCss, getContentHtml, listContentIds } from '@/contents'
import clsx from 'clsx'
import { ReadonlyURLSearchParams } from 'next/navigation'

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
      <pre className={clsx('border rounded', 'p-2')}>{html}</pre>
      <pre className={clsx('border rounded', 'p-2')}>{style}</pre>
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
