'use strict'
const fastify = require('fastify')()
const PORT=8000;
fastify.register(require('./routes/Routers'))
const start = async () => {
  try 
  {
    await fastify.listen(PORT);
    console.log("Server Running on PORT ",PORT);
  } 
  catch (err) 
  {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()