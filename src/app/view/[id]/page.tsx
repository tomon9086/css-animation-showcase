import { AnimationBaseButton } from '@/components/animation-base/button'
import { ReadonlyURLSearchParams } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<ReadonlyURLSearchParams>
}

const dummyStyle = (id: string) =>
  new Promise<string>((resolve, reject) => {
    if (!id) {
      reject(new Error('empty id'))
    }

    resolve(`
      .anim-button {
        margin: 1em;
        padding: 0.8em 1.2em;
        color: #fff;
        background-color: #35b531;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
      }

      .anim-button:hover {
        transform: scale(1.1);
        background-color: #42e13d;
      }

      .anim-button:active {
        transform: rotate(5deg);
      }
    `)
  })

export default async function View(props: Props) {
  const { id } = await props.params
  const style = await dummyStyle(id)

  return (
    <div>
      <div>
        <style>{style}</style>
        <AnimationBaseButton className='anim-button'></AnimationBaseButton>
      </div>
    </div>
  )
}
