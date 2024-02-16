const allowedOrigins = [
  'http://localhost:5173'
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