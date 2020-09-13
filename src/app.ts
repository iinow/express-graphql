import express from 'express'
import * as Routers from '~/routes'
import { graphqlHTTP } from 'express-graphql'
import Schema from '~/schemas'
import './test'

let app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
)

app.use('/users', Routers.User)

app.listen(process.env.serverPort, () => {
  console.log(`server listen!!, port: ${process.env.serverPort}`)
})
