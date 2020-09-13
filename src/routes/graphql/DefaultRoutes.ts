import * as express from 'express'

export const map = (app: express.Application): void => {
  app.get('/', (req: express.Request, res: express.Response) => {
    const { name, version, description } = require('../../../package.json')
    res.json({
      name,
      version,
      description
    })
  })
}
