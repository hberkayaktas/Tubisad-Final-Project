const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/authRoute");
const orderRoute = require("./routes/orderRoute");

const app = express();
const cors = require('cors')
//database bağlantısı
connectStringB = "mongodb://localhost/Tubisad-App";
mongoose
  .connect(connectStringB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connect!");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "smartEdu_session_string",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: connectStringB }),
  })
);

//midddleware
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.use("/", productRoute);
app.use("/", authRoute);
app.use("/", orderRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
