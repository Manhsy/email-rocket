import { Typography, TextField, Paper, Button } from "@material-ui/core";
import { useState } from "react"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


function App() {
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
  return <div style={{ textAlign: "center", marginTop: 40}}>
    <Typography variant="h2">Email Rocket 🚀</Typography>

    <form style= {{marginTop: 30}}>
      <TextField 
        id="standard-basic" 
        label="Email" 
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}/>
      <br/>  
      
      <TextField 
        style={{ marginTop: 20 }}id="standard-password-input"
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
          placeholder="Placeholder"
          multiline
        />
        <br/>
        <TextField 
          style={{ marginTop: 10 }}
          id="standard-textarea"
          label="Message"
          value = {message}
          onChange = {(e) => setMessage(e.target.value)}
          placeholder="Placeholder"
          multiline
          helperText={`Character count: ${message.length}`}
          error = {message.length>=1000}
        />
        <br/>
    </form>
    <Paper elevation={3} style={{ width: "20%", margin: "auto", marginTop: 20, padding: 20 }}>
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
        onChange={fileSelectHandler}
      />

      {emailList.length > 0 && (
      <Typography variant="subtitle2" style={{ marginTop: 20 }}>
        Email list loaded: {emailList.length}
      </Typography>
    )}

    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon></SendIcon>}
      >
        Send
      </Button>
    </Paper>

    </div>; 
}
export default App;
