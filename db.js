import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube",
// 포트번호/database이름
// database가 저장되어있는지 확인
    {
        useNewUrlParser: true,
        useFindAndModify: false,
    }
);
// 새로운 mongose가 있는지 확인

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);