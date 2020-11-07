import app from "./app";
// app.js 에서 import 한 apllication 

const PORT = 3000;
const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
