import express, {Request,Response,NextFunction} from "express";
import GuideApplication from "../models/GuidedApplication";
import  {authenticate, AuthRequest } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";


const router =express.Router();

router.post( "/apply", async (req:Request,res:Response,next: NextFunction) => {
    try{
        const {fullName,email,phone,Languages, message } = req.body;

        if (!fullName || !email) {
            return res.status(400).json({msg:"fullname and email are required"} );
        }
        const appRecord =await GuideApplication.create({
            fullName,
            email,
            phone: phone ?? null,
            languages: Array.isArray (Languages)? Languages :null,
            message : message ?? null,

        })
        res.status(201).json ({
            msg: "Application submitted",
                 application: appRecord,
      });

        } catch (err) {
            next(err);
        }
          }
);

 
router.get(
  "/applications",
  authenticate,
  authorize("ADMIN"),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const apps = await GuideApplication.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.json({ applications: apps });
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  "/applications/:id/approve",
  authenticate,
  authorize("ADMIN"),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const appRecord = await GuideApplication.findByPk(id);
      if (!appRecord) {
        return res.status(404).json({ msg: "Application not found" });
      }

      appRecord.status = "APPROVED";
      await appRecord.save();

      // TODO (later): upgrade related user to GUIDE if needed

      res.json({ msg: "Application approved", application: appRecord });
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  "/applications/:id/reject",
  authenticate,
  authorize("ADMIN"),
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const appRecord = await GuideApplication.findByPk(id);
      if (!appRecord) {
        return res.status(404).json({ msg: "Application not found" });
      }

      appRecord.status = "REJECTED";
      await appRecord.save();

      res.json({ msg: "Application rejected", application: appRecord });
    } catch (err) {
      next(err);
    }
  }
);

export default router;