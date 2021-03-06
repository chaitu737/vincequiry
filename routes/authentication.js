const Student = require('../models/student');
const config = require('../config/database');
const { check, validationResult } = require('express-validator/check');
const nodemailer = require('nodemailer');
const fs = require('fs');
const PDFDocument = require('pdfkit');



const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads/');
  },
  filename: function(req,file,cb){
    cb(null,new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname);
  }
});

const fileFilter = (req, file,cb)=>{
  if(file.mimetype ==='image/jpeg'|| file.mimetype ==='image/png'){
    cb(null, true);
  }else{   
  cb(null, false);
  }

}
const upload = multer({storage: storage, limits:{
  fileSize: 1024*1024*5
},
fileFilter:fileFilter
});





module.exports = (router)=>{


router.get('/',(req,res)=>{
    res.send('Hello world')
});






// router.post('/login',(req,res)=>{
//   if(!req.body.email){
//     res.json({success: false, message: 'Enter the valid email'})
//   }else{
//     if(!req.body.password){
//       res.json({success:false, message: 'Enter the password'})
//     }else{

//       if(req.body.email!==UserSchema.email){
//         res.json({ success: false, message: 'Enter the current email address'})
//       }else{
//         if(req.body.password!==UserSchema.password){
//           res.json({success: false, message: 'Enter the correct password'})
//         }else{
//           res.json({success: true, message: 'Login Successful'})
//         }
//       }
//   }
// }
// })







router.post('/register',upload.single('file'), [
    check('fullName').isAlphanumeric().isLength({mn:1}).withMessage('FullName is required'),
    check('email').isEmail().isLength({min:1}).withMessage('Email is required'),
    check('fatherName').isAlpha().withMessage('Father name is required'),
    check('motherName').isAlpha().withMessage('Mother name is required'),
    check('mobilenumber').isNumeric().isLength({min:10}).withMessage('Enter a valid Mobile Number')
],  

  (req,res)=>{
  


    const errors=validationResult(req);
     if(!errors.isEmpty()){
         return res.status(422).json({errors:errors.array()})
     }
     

     let student=new Student({
         email:req.body.email,
         fatherName:req.body.fatherName,
         motherName:req.body.motherName,
         mobilenumber:req.body.mobilenumber,
         fullName : req.body.fullName,
         file:req.file
         
     });


      student.save((err)=>{
         if(err){
              res.json({success:false, message:'Unable to save the user Error:', err})
         }else{
             const output =`
             FullName: ${req.body.fullName} 
             Email: ${req.body.email}
             Phone: ${req.body.mobilenumber}
             FatherName:${req.body.fatherName}
             MotherName: ${req.body.motherName}
            `;
               async function createPdf() {
              return new Promise((resolve, reject) => {
                  const doc = new PDFDocument({ size: 'A4' });  // Create a new instance 
                  const fileName = `./Studentpdf/${req.body.fullName}.pdf`;
                  let stream = fs.createWriteStream(fileName);
                  doc.pipe(stream);
                  doc.text(output)
                  var imagepath ="./uploads/" + req.file.filename ;
                  doc.image(imagepath,428,150,{
                    fit:[100,100],
                    align:'right',
                    valign: 'center',
                                   });
                  doc.end();
                  resolve({ fileName, stream });
              });
          
          }

          createPdf();
          var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'dummymail6674@gmail.com',
                  pass: 'santhu@51'
                }
              });
              
              var mailOptions = { 
                from: 'sahal737@gmail.com',
                to:  'vincampus@vinfocode.com',
                subject: 'Regarding Student Registration',
                text: 'A student is registered for Vincampus Artificial Intelligence Program Please Check the pdf attached.',
                html: output,
                attachments:[
                  {
                    filename: 'output.pdf',
                    path:'./Studentpdf/'+req.body.fullName+'.pdf',
                    contentType:'application/pdf'
        
                  }
                ]
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

              var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'dummymail6674@gmail.com',
                  pass: 'santhu@51'
                }
              });
              
              var mailOptions = {
                from: 'VinCampus <vincampus@vinfocode.com>',
                to:  req.body.email,
                subject: 'Regarding Student Registration',
                text: 'A student is registered for Vincampus Artificial Intelligence Program Please Take care of him.',
                html: '<h1>Congratualtions On registering for Vincampus</h1>'

              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

    
                
            res.json({success:true, message:'Student Registered '})

          }
     })

});
return router;
} 