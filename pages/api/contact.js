

export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'alien4hire12@gmail.com',
          pass: 'Myfirst1'  //Keys.googlePassword,
        },
        secure: true,
      })

      const mailData = {
        from: 'alien4hire12@gmail.com',
        to: 'alien4hire12@gmail.com',
        subject: `Message From ${req.body.yourName}`,
        // message: req.body.message,
        html: `<div>
            <p>Name: ${req.body.yourName}</p>
            <p>email: ${req.body.email}</p>
            <p>Phone: ${req.body.phone}</p>
            <p>What they need help with: ${req.body.help}</p>
            <p>Requirments: ${req.body.description}</p>
            <p>Timeline: ${req.body.start}</p>
            <p>Skills: ${req.body.skill}</p>
            <p>Project Type: ${req.body.type}</p>
            <p>Company Name: ${req.body.companyName}</p>
            <p>Company Size: ${req.body.size}</p>
            <p>Project Name: ${req.body.projectName}</p>
            </div>`
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      
      res.status(200).send('success');
    }
