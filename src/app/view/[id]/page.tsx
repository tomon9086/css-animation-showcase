import { ReadonlyURLSearchParams } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<ReadonlyURLSearchParams>
}

export default async function View(props: Props) {
  return <div>Hello, {(await props.params).id || 'World'}!</div>
}
