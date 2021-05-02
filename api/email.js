
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer/lib/smtp-transport')

exports.handler = async (req, ctx, res) => {
    const {email, password, subject, body, emailList } = JSON.parse(req.body);
    const info = await main(email, password, subject, body, emailList ) ;

    res(null, {
      statusCode: 200,
      body: JSON.stringify(info),
      //body: JSON.stringify({"status": info ? "success" : "failure"}),
      headers: {"Access-Control-Allow-Origin": "*"}
    });
    
  };

  async function main(email, password, subject, body, emailList) {
    const domainName = getDomainName(email);
    let transporter = null;
    if(domainName != false){
          transporter = nodemailer.createTransport(new smtpTransport({
          name: domainName,
          host: domainName,
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: email, // generated ethereal user
            pass: password, // generated ethereal password
          },
        }));
    }else{
      return false;
    }
    var re = [];
    

    emailList.forEach(function (to, i , array) {
      var msg = {
            from: email, // sender address
            subject: subject, // Subject line
            text: body, // plaintext body  
        }
      msg.to=to;
      transporter.sendMail(msg, function (err) {
        if (err) { 
          re.push("Sending to " + to + " failed: " + err);
          console.log("Sending to " + to + " failed: " + err);
          return re;
        } else { 
          re.push("Sent to " + to);
          console.log("Sent to " + to);
          return re;
        }
        
      });
    });
  }

  function getDomainName(email){
    if(email.includes("gmail")){
        return "smtp.gmail.com";
    }else if(email.includes("csus")){
      return "smtp.csus.edu";
    }else if(email.includes("yahoo")){
      return "smtp.mail.yahoo.com";
    }else{
      return false;
    }
  }








