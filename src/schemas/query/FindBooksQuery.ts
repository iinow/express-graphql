import {
  GraphQLResolveInfo,
  GraphQLFieldConfig,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import { Books } from '~/mock'
import { BookType } from '~/schemas/type'

export const FindBooksQuery: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(BookType),
  description: 'find Books',
  resolve: () => Books.books,
}
