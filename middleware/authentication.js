const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token)
        { return res.status(401).json({error: 'Access Denied'});

        }else{
    try {
        const decode = jwt.verify(token,"Its's_My_Secret_key");
        req.user = await user.findById(decode.userId).select('-password');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json('Invalid Token');
    }
};
}

module.exports = authenticate;
