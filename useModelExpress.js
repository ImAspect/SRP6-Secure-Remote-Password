module.exports = (_db) => {
    db = _db
    return UsersModels
}

const { createVerifier } = require('../custom_modules/SRP6') /* IMPORT createVerifier */
const crypto = require('crypto') /* INSTALL MODULE Crypto */

class UsersModels {
	static async createAccount(req) {
		const salt = crypto.randomBytes(32)
		const verifier = await createVerifier(req.body.username, req.body.password, salt)
		return db.query('INSERT INTO account (username, salt, verifier, email) VALUES (?, ?, ?, ?)', [req.body.username.toUpperCase(), salt, verifier, req.body.email])
		.then((result) => {
		    return result
		})
		.catch((err) => {
		    return err
		})
	}
}
