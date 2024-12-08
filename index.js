import express from 'express'
import {PORT} from './config/globalKey.js'
import './config/db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/route.js'

const app = express()
app.use(bodyParser.json({extended: true,limit: '500mb', parameterLimit: 500}))
app.use(bodyParser.urlencoded({extended: true,limit: '500mb', parameterLimit: 500}))
app.use(cors()) // hai sa mart hum Request jark Frontend


app.get('/api',(req,res)=>{
   res.send('hello')
})
app.use('/api',router)


app.listen(3000,()=>{
   console.log(`Server is running on port 3000`);
});