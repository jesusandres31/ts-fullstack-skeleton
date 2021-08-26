import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import router from './routes';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set('port', config.port);
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(router);
  }

  async listen(): Promise<void> {
    var server = this.app.listen(this.app.get('port'));
    if (process.env.NODE_ENV === 'production') {
      console.log(process.env.NODE_ENV);
    } else {
      console.log('Server on port', this.app.get('port'));
    }
  }
}
