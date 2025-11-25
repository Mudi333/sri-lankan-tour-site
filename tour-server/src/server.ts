// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import dotenv from "dotenv":


// dotenv.config()

// const app = express();
// const PORT = 4000


// app.use(cors());
// app.use(express.json());



// app.post("/users/register", async (req: Request, res: Response) => {

//   const { fullname, username, password } = req.body;


//   console.log("we are in register endpoint", fullname, username, password);

//   res.status(201).json({ msg: "cool!" });

// })



// app.listen(PORT, () => console.log(`Server up http://localhost:${PORT}`));



//----------------------------------------------
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from "dotenv/config";
import {createError} from "./utilities/helpers";
import sequelize from "./utilities/db";
import userRouter from "./routes/users";


const app = express();
const secret = process.env.JWT_SECRET;
 if (!secret) {
   console.error("JWT_SECRET enviromet variable not defined")
       process.exit(3)
      }






sequelize.sync({alter:true})


//-------------------------------

app.use(cors({origin: "http://localhost:5173",credentials:true}));
app.use(express.json());

//--------------------------------

app.use("/users", userRouter);


//-----------------------------


app.use((req: Request, res: Response, next: any) => {
  next(createError(404, "Endpoint not found"));
});


  app.use((error: any, req: Request, res: Response, next: any) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong!";
    res.status(status).json({ msg: message });
  });



  //--------------------------------

  const port =  4000;

  app.listen(port, () => {
    console.log(`👻Server up http://localhost:${port}`);
  });


















