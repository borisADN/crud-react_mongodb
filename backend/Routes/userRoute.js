import express from 'express';
import { create, deleteUser, getAll, getOne, update } from '../Controller/userController.js';
const route = express.Router();
route.post('/create',create);
route.get('/getAll',getAll);
route.get('/getOne/:id',getOne);
route.put('/update/:id',update);
route.delete('/delete/:id',deleteUser);

route.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express API by Boris!' });
});
export default route;


