import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getAllPosts = () => {
  const directory = path.join(process.cwd(), 'public/posts')
  const fileNames = fs.readdirSync(directory)

  const content = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      data,
      content,
    }
  })

  return content
}

// fs.writeFile('public/cache/posts.json', postFileContents, err => {
//   if (err) return console.log(err)
//   console.log('Posts cached.')
// })
