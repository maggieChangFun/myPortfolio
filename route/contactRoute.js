const router = require("express").Router()
const nodemailer = require("nodemailer")


router.post('/contact', (req, res)=>{
    let data = req.body;
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "please fill all the fields"})
    }

    //console.log(data.name);
    //res.status(200).json({msg: " Thank you for contacting Maggie!"}); 
    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port:456,
        auth:{
            user: 'maggiechang.p@gmail.com',
            pass: '###'
        }
    })

    let mailOptions = {
        from: data.email,
        to: 'maggiechang.p@gmail.com',
        subject: `message from ${data.name}`,
        html:`
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <p>${data.message}<p/>
        `
    }

    smtpTransporter.sendMail(mailOptions, (error)=>{
        try {
            if(error) return res.status(400).json({msg:"please fill other fields."});
            res.status(200).json({msg: " Thank you for contacting Maggie!"}); 
        } catch (error) {
            if(error) return res.status(500).json({
                msg: "There is server error."
            })
        }
    })
})

module.exports = router;