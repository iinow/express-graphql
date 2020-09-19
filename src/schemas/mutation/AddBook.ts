import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'
import { BookType } from '~/schemas/type'
import { Author, Books } from '~/mock'
import { Book } from '~/model'

export const AddBook: GraphQLFieldConfig<any, any> = {
  type: BookType,
  description: 'Add a book',
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) }
  },
  resolve: (parent, args) => {
    const book: Book = {
      id: Books.books.length + 1,
      name: args.name,
      authorId: args.authorId,
      createAt: new Date()
    }
    Books.books.push(book)
    return book
  }
}
