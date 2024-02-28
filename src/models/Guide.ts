class Guide {
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

const emptyGuide: Guide = {
  author: '',
  releaseDate: '',
  updateDate: '',
  description: '',
  title: '',
  tale: ''
}

export { Guide, emptyGuide }
