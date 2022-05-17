export interface DogResponse {
  message: string
}

export interface BasicArticle {
  type: string
  imagePath?: string
  title: string
  summary?: string
}
export async function getRandomDog() {
  let resp = await fetch(`https://dog.ceo/api/breeds/image/random`)
  let data = (await resp.json()) as DogResponse
  let result: BasicArticle = {
    type: 'Dogs',
    title: 'Dogs',
    imagePath: data.message,
  }

  return result
}
