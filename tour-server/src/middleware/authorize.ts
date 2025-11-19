import type {Response,NextFunction} from 'express';
import { AuthRequest } from './authenticate';


export function authorize (...allowRoles:string[]){
    return (req:AuthRequest,res:Response,next:NextFunction)=>{
        if(!req.user){
            return res.status(401).json({error:'Unauthorized'});
        }
        if(!allowRoles.includes(req.user.role)){
            return res.status(403).json({error:'Forbidden: insufficient permissions'});
        }
        next();
    };
}