import fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'
import { env } from './env'

const app = fastify()

app.register(fastifyCookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('HTTP Server Running!'))
