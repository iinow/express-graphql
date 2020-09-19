import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchemaSync } from 'type-graphql'
import { BookResolver, NotiResolver } from '~/schemas/resolver'
import { createServer } from 'http'
import './test'
import 'reflect-metadata'

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
        BookResolver,
        NotiResolver
      ]
    }),
    subscriptions: {
      path: '/sub',
    },
    playground: true,
    context: ({ req, res }) => ({ req, res })
  })
  //
  apollo.applyMiddleware({ app })

  const httpServer = createServer(app)
  apollo.installSubscriptionHandlers(httpServer)

  // app.use('/users', Routers.User)

  httpServer.listen(process.env.serverPort, () => {
    console.log(`server listen!!, port: ${process.env.serverPort}`)
  })
})()
