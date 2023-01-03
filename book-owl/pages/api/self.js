import jwt from 'jsonwebtoken';
import Database from '../../constants/db';

const db = new Database();

const JWT_SECRET = 'secret';

const handler = (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Method not allowed' });
    }
    try {
        if (!req.headers.authorization) {
            res.status(403).json({ message: 'You must be logged in' });
        }
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);

        const { password, ...user } = db.getUserById(decoded.id);

        if (!user) {
            res.status(403).json({ message: 'Your account might be deleted' });
        }

        res.status(200).json({ user });
    } catch {
        res.status(403).json({ message: 'Invalid token' });
    }
};

export default handler;