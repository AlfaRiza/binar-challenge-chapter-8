const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000
const swaggerJSON = require('./swagger.json')
const swaggerUI = require('swagger-ui-express')
const webRouter = require('./server/routes/web')
const path = require('path')
const expressLayouts = require('express-ejs-layouts');

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))
// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './server/views'))
app.use(expressLayouts);
app.set('layout', 'layouts/default')

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use(webRouter)
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})