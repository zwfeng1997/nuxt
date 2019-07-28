const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const session = require('koa-generic-session')
const Redis = require('koa-redis')
const json = require('koa-json')

const dbConfig = require('./dbs/config')
const passport = require('./interface/utils/passport')
const Users = require('./interface/users')
const geo = require('./interface/geo')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

app.keys = ['mt', 'keyskeys']
app.proxy = true

app.use(session({
  key: 'mt',
  prefix: 'mt:uid',
  store: new Redis()
}))

app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))

app.use(json())

mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true
})

app.use(passport.initialize())

app.use(passport.session())

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(Users.routes()).use(Users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
