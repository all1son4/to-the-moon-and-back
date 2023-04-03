import { promises as fs } from 'fs'
import { join } from 'path'

export async function getSmsCode() {
  // const postsDir = join(process.cwd(), 'posts')
  // const filenames = await fs.readdir(postsDir)
  //
  // const posts = filenames.map(async (filename) => {
  //   const filePath = join(postsDir, filename)
  //   const fileContent = await fs.readFile(filePath, 'utf-8')
  //
  //   // Обычно, здесь выполняется преобразование контента,
  //   // например, разбор `markdown` в `HTML`
  //
  //   return {
  //     filename,
  //     content: fileContent
  //   }
  // })
  //
  // return {
  //   props: {
  //     posts: await Promise.all(posts)
  //   }
  // }

  const jsonFile = join(process.cwd(), "../../utils/backendImitation.json");
  // const fileName = await fs.readdir(jsonFile)

  console.log(jsonFile)

}
