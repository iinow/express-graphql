import { GraphQLFieldConfig, GraphQLInt, GraphQLList } from 'graphql'
import { AuthorType } from '~/schemas/type'
import { Books } from '~/mock'

export const FindAuthorsQuery: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(AuthorType),
  description: 'List of ALl Authors',
  resolve: () => Books.authors,
}
