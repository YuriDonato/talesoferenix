class Tale {
  id?: string
  releaseDate: string
  updateDate: string
  author: string
  title: string
  description: string
  tale: string

  constructor(
    id: string,
    releaseDate: string,
    updateDate: string,
    author: string,
    title: string,
    description: string,
    tale: string
  ) {
    this.id = id
    this.releaseDate = releaseDate
    this.updateDate = updateDate
    this.author = author
    this.title = title
    this.description = description
    this.tale = tale
  }
}

const emptyTale: Tale = {
  author: '',
  releaseDate: '',
  updateDate: '',
  description: '',
  title: '',
  tale: ''
}

export { Tale, emptyTale }
