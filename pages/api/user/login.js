import { login } from '../../../services/user'

export default function handle(req, res){
    try {
        const user = login(req.body)
        res.status(200).json(user)
    } catch (err){
        res.status(400).json(err.message) 
    }
}