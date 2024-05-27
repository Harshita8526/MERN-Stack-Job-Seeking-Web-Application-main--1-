import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "kashyapharshita719@gmail.com",
    pass: "ajxycvoxtkggdcgk",
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'kashyapharshita719@gmail.com', // sender address
    to,
    subject,
    text,
    html
  });
}


export default sendMail;
