import { Compressor } from './compressor';
import { HttpRequest } from './http-request';
import { Logger } from './logger';
import { Auth } from './auth';
import { WebServer } from './web-server';

const compressor = new Compressor(null);
const logger = new Logger(compressor);
const auth = new Auth(logger);

const server = new WebServer(auth);

server.handle(new HttpRequest('admin', 'admin'));
server.handle(new HttpRequest('admin', 'admin1'));
