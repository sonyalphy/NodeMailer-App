var nodemailer = require('nodemailer');


var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9d86966f77c452", //example of generated by Mailtrap 
    pass: "647f75952e8a09" //example of generated by Mailtrap 
  }
});
 
var mailOptions = {
  from: 'ictfsdproject@gmail.com',
  to: 'scholarsonyalphy2022@gmail.com',
  subject: 'Test Nodemailer with Mailtrap',
  
  html: '<h1>A Story of love</h1>',
  attachments: [
    {   // utf-8 string as an attachment
        filename: 'text.txt',
        content: 'Attachments'
    },
	{
		filename: 'logo',
		path: 'newlogo.jpg'
	}
  ]
};
 
transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});