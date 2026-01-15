import { auth } from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://homefindr.vercel.app",
    issuerBaseURL: "https://dev-ls532ldoa0brzf46.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export const optionalJwtCheck = (req, res, next) => {
    // Try to authenticate, but continue if token is missing or invalid
    jwtCheck(req, res, (err) => {
        if (err) {
            console.log("JWT authentication failed, continuing without auth:", err.message)
            req.user = null
            req.auth = { sub: null }
        }
        next()
    })
}

export default jwtCheck
