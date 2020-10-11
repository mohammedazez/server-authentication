// Import dotenv
require("dotenv").config()

// Import jwt
const jwt = require("jsonwebtoken");

module.exports = {
    
    auth: (req, res, next) => {
        // si user kirim header isinya token
        const authHeader = req.headers.authorization
        console.log("Ini header", authHeader);

        // Ambil bearer xxxxxxxxxxx
        const token = authHeader.split(' ')[1]
        console.log("Ini token", token);

        // Jika token sama dengan null maka munculkan tanda "missing token"
        if(token == null) return res.json("Missing token")

        try {
            // jika token valid maka token akan verifikasi dengan secret keynya
            const isTokenValid = jwt.verify(token, process.env.SECRET_KEY)
            console.log("Isi Token", isTokenValid)

            // Jika token valid maka akan dieksekusi secara lanjut
            if(isTokenValid){
                let {password, ...rest} = isTokenValid
                req.body = rest
                next()
            }
            // Jika token tidak valid maka akan menampilkan "token is not valid"
        } catch (error) {
            res.json("Token is not valid")
            console.log("Token is not valid");
        }
    }
}