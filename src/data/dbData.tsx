import * as db from '../services/firebase'

export const createDataEntry = (
  id: string,
  data: any,
  category: string,
  bookId?: string,
  chapterId?: string
) => {
  switch (category) {
    case 'tale':
      db.setDoc(db.doc(db.database, 'tales', id), data)
      break
    case 'storybook':
      db.setDoc(db.doc(db.database, 'books', id), data)
      break
    case 'storychapter':
      db.setDoc(db.doc(db.database, `/books/${bookId}/chapters`, id), data)
      break
    case 'storypage':
      db.setDoc(
        db.doc(db.database, `/books/${bookId}/chapters/${chapterId}/pages`, id),
        data
      )
      break
  }
}
