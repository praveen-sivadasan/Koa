import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';
import movieController from '../movie/movie.controller';
// For post requests
import * as bodyParser from 'koa-bodyparser';


const app: Koa = new Koa();

app.use(bodyParser());

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || HttpStatus.INTERNAL_SERVER_ERROR;
    ctx.body = { err };
    ctx.app.emit('error', err, ctx);
  }
});


app.use(movieController.routes());
app.use(movieController.allowedMethods());


// Application error logging.
app.on('error', console.error);

export default app;