import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';

mongoose.Promise=global.Promise;
//const dbUrl = 'mongodb://localhost:27017/dbsistema2';
const dbUrl = 'mongodb+srv://GabrielPD:30270pa@gabrielpd.lg8jk.mongodb.net/dbsistema?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {useFindAndModify: false,useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
.then(mongoose=>console.log('Conectado a la base de datos MongoDB'))
.catch(err=>console.log(err));

const app=express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',router);

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log('Server on port' + app.get('port'));
}) 