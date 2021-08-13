
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import categoriesRoutes from './routes/categories.js';
import productsRoutes from './routes/products.js';
import watchistemsRoutes from './routes/watchitems.js'

const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);
app.use('/watchitems',watchistemsRoutes)

const CONNECTION_URL = 'mongodb+srv://nada:nada123@cluster0.eqeoh.mongodb.net/mazadat?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);