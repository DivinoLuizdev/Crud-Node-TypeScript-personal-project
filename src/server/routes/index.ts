import { Router } from "express";
import {StatusCodes} from 'http-status-codes'

const router = Router();

router.get("/cliente", (req, res) => {
  return res.status(StatusCodes.ACCEPTED).json("Olá, DEV!");
});

router.post("/cliente", (req, res) => {
  console.log(req.body);
  return  res.status(StatusCodes.ACCEPTED).json(req.body);
});

router.delete("/cliente/:id", (req, res) => {
  console.log(req.params.id);
  return res.status(StatusCodes.ACCEPTED).json(req.params.id);
});

router.put("/cliente/:id", (req, res) => {
  console.log(req.params.id);
  return res.json(req.params.id);
});



export { router };
