import React from 'react';
import { Typography, TextField, Paper, Button } from "@material-ui/core";
import { useState } from "react"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

import * as EmailValidator from 'email-validator';

const axios = require('axios');
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

async function handleSubmit(email, password, subject, message, emailList){
  console.log(email);
  console.log(password);
  console.log(subject);
  console.log(message);
  console.log(emailList);
  const result = await axios.post('https://email-rocket.netlify.app/.netlify/functions/email', {
            "email" : email,
            "password" : password,
            "subject" : subject,
            "body" : message,
            "emailList" : emailList
          })
  console.log(result);
  return result;

}
function App() {
  const [results, setResult] = useState('');
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const fileSelectHandler = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.onload = function (e) {
    // The file's text will be printed here
    setEmailList(e.target.result.split("\n").map((email) => email.trim()));
  };
  
    reader.readAsText(file);
  };

  const hasValidInput = () => {
    return (
      email.length > 0 &&
      emailList.length > 0 &&
      password.length > 0 &&
      subject.length > 0 &&
      message.length > 0 &&
      message.length < 1000 && 
      emailList.every((email) => EmailValidator.validate(email))
    );
  };

  return <div style={{textAlign: "center", marginTop: 100 }}>

      <Typography style={{color: "#fff", fontWeight: 'bold', fontSize: 112, fontFamily: 'Brown Pro'}}> Email Rocket </Typography>
      <Typography variant = 'subtitle1' style={{color: "#D3D3D3", fontSize: 25}}> Ever wanted to send the same email to multiple receivers? Email Rocket is here for you! </Typography>


        <TextField 
          style={{ marginTop: 20 }}
          id="standard-basic" 
          label="Email" 
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}/>
        <br/>  
        
        <TextField 
            style={{ marginTop: 20 }}
            id="standard-password-input"
            label="Password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password" />
        <br/>
        <TextField 
          style={{ marginTop: 20 }}
          id="standard-textarea"
          label="Subject"
          value = {subject}
          onChange = {(e) => setSubject(e.target.value)}
          multiline/>
        <br/>
        <TextField 
          style={{ marginTop: 10 }}
          id="standard-textarea"
          label="Message"
          value = {message}
          onChange = {(e) => setMessage(e.target.value)}
          multiline
          helperText={`Character count: ${message.length}`}
          error = {message.length>=1000}
        />
        <br/>

    <Paper elevation={3} style={{ width: "30%", margin: "auto", marginTop: 20, padding: 20 }}>
      <Typography variant="subtitle1">Upload .txt file of emails (format: an email per line)</Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={() => document.getElementById("selectFile").click()}
        >
        Upload
      </Button>
      <br/>
      <input
        id="selectFile"
        hidden
        type="file"
        onChange={fileSelectHandler}/>

      {emailList.length > 0 && (
      <Typography variant="subtitle2" style={{ marginTop: 20 }}>
        {hasValidInput() ? `Emails Loaded: ${emailList.length}` : "Error parsing email"}
      </Typography>
    )}

      <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon></SendIcon>}        
          disabled={!hasValidInput()}
          onClick= {async () => await handleSubmit(email, password, subject, message, emailList)}
          value = {results}
          onChange = {(e) => setResult(e.target.value)}
        >
          Send
      </Button>

      <Typography variant="subtitle">{results}</Typography>

    </Paper>

    </div>; 
}
export default App;
