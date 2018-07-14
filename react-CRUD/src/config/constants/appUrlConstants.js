import APIs from './endpoint';

export default {
  "env": process.env.REACT_APP_ENV,
  "backend": {
    "api": APIs,
    "local": {
      "baseUrl": "http://localhost:8080",
    },
  },
}

