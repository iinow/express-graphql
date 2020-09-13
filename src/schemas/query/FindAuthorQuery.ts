import { GraphQLFieldConfig, GraphQLInt } from 'graphql'
import { AuthorType } from '~/schemas/type'
import { Books } from '~/mock'

export const FindAuthorQuery: GraphQLFieldConfig<any, any> = {
  type: AuthorType,
  description: 'A Single Author',
  args: {
    id: {
      type: GraphQLInt,
      description: 'Author id 값',
    },
  },
  resolve: (parent, args) =>
    Books.authors.find((author) => author.id === args.id),
}
