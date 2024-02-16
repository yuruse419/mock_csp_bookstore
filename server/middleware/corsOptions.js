const allowedOrigins = [
  /*
    'http://localhost:3000' is the server's own URL when started from "npm run start" locally;
    necessary to specify because of the if-statement check implemented below

    'http://localhost:5173' is the development instance created from "vite" in "npm run dev"

    'mockcspbookstore-production.up.railway.app' is the server's own URL when started from "npm run start" on Railway
  */

  'http://localhost:5173',
  'http://localhost:3000',
  'https://mockcspbookstore-production.up.railway.app'
]

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if(allowedOrigins.includes(origin) || !origin) {
      callback(null, true)
    }
    else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

export default corsOptions