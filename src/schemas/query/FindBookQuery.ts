import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { Books } from '~/mock'
import { Book } from '~/model'
import { BookType } from '~/schemas/type'

export const FindBookQuery: GraphQLFieldConfig<any, any> = {
  type: BookType,
  description: 'find book',
  args: {
    id: {
      type: GraphQLInt,
      description: 'Book Id',
    },
  },
  resolve: (parent, args) => Books.books.find((book) => book.id === args.id),
}
