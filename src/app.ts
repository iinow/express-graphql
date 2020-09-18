import express from 'express'
import * as Routers from '~/routes'
import { graphqlHTTP } from 'express-graphql'
import Schema from '~/schemas'
import './test'
import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { buildSchemaSync } from 'type-graphql'
import { BookResolver } from '~/schemas/resolver/BookResolver'

(async () => {
  let app = express()

  // app.use(
  //   '/graphql',
  //   graphqlHTTP({
  //     schema: Schema,
  //     graphiql: true
  //   })
  // )

  const apollo = new ApolloServer({
    schema: buildSchemaSync({
      resolvers: [
        BookResolver
      ]
    }),
    playground: true,
    context: ({ req, res }) => ({ req, res })
  })

  apollo.applyMiddleware({ app })

  // app.use('/users', Routers.User)

  app.listen(process.env.serverPort, () => {
    console.log(`server listen!!, port: ${process.env.serverPort}`)
  })
})()
