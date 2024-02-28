class StoryBook {
  id?: string
  author: string
  coverImage: string
  description: string
  publishedYear: string
  title: string
  totalPages: string

  constructor(
    id: string,
    author: string,
    coverImage: string,
    description: string,
    publishedYear: string,
    title: string,
    totalPages: string
  ) {
    this.id = id
    this.author = author
    this.coverImage = coverImage
    this.description = description
    this.publishedYear = publishedYear
    this.title = title
    this.totalPages = totalPages
  }
}

const emptyStoryBook: StoryBook = {
  author: '',
  coverImage: '',
  description: '',
  publishedYear: '',
  title: '',
  totalPages: ''
}

class StoryChapter {
  id?: string
  description: string
  chapterNumber: string
  title: string

  constructor(
    id: string,
    description: string,
    chapterNumber: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.chapterNumber = chapterNumber
    this.title = title
  }
}

const emptyStoryChapter: StoryChapter = {
  chapterNumber: '',
  description: '',
  title: ''
}

class StoryPage {
  id?: string
  pageNumber: string
  text: string

  constructor(id: string, pageNumber: string, text: string) {
    this.id = id
    this.pageNumber = pageNumber
    this.text = text
  }
}

const emptyStoryPage: StoryPage = {
  id: '',
  pageNumber: '',
  text: ''
}

export {
  StoryBook,
  emptyStoryBook,
  StoryChapter,
  emptyStoryChapter,
  StoryPage,
  emptyStoryPage
}
