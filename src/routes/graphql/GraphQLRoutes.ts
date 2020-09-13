import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { hello } from '../../RootValue'

// export const map = (app: express.Application): void => {
//   buildContext()
//   app.use('/graphql', (req: express.Request, res: express.Response) => {
//     graphqlHTTP({
//       schema: null,
//       rootValue: hello()
//     })
//   })
// }

const buildContext = (): void => {

}
