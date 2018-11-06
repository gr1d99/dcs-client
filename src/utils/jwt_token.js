import jwt from 'jsonwebtoken';

export default (jwt_token) => {
    return jwt.decode(jwt_token)
}
