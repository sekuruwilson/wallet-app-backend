import { name, version, repository } from '../package.json';
import config from '../src/config/config';

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: `${name} API documentation`,
    version,
    license: {
      name: 'MIT',
      url: repository
    }
  },
  servers: [
    {
      url: `${config.appUrl}`
    },
    {
      url: `http://localhost:${config.port}/`
    }
  ]
};

export default swaggerDef;
