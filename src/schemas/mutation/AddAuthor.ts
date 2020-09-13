import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import { AuthorType } from '~/schemas/type'
import { Author, Books } from '~/mock'

export const AddAuthor: GraphQLFieldConfig<any, any> = {
  type: AuthorType,
  description: 'Add an author',
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const author: Author = {
      id: Books.authors.length + 1,
      name: args.name,
    }
    Books.authors.push(author)
    return author
  },
}
