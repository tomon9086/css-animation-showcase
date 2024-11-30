import { readFile, readdir } from 'fs/promises'
import { resolve } from 'path'

const docsPath = () => resolve(process.cwd(), 'src/contents')

export const listContentIds = async () => {
  return await readdir(docsPath())
}

const getContent = async (id: string, filename: string) => {
  const buffer = await readFile(resolve(docsPath(), id, filename))
  return buffer.toString()
}

export const getContentCss = async (id: string) => {
  return await getContent(id, 'main.css')
}

export const getContentHtml = async (id: string) => {
  return await getContent(id, 'index.html')
}
