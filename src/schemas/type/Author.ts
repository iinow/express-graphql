import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { Author, Books } from '~/mock'
import { BookType } from '~/schemas/type'

export const AuthorType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a book',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author: Author) => {
        return Books.books.filter((book) => book.authorId === author.id)
      },
    },
  }),
})
