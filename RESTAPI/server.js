const express=require('express');
const app = express();
const studentsRouter=require('./src/student/routes');
const PORT =3000;

app.use(express.json());
app.use('/api/v1/students',studentsRouter);

app.get('/',(req,res)=>{
    res.send('Hello');
});

app.listen(PORT,()=> console.log(`Listening on port ${PORT}`));