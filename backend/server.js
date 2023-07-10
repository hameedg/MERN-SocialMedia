const app = require("./app");

const { connectionReq } = require("./config/database");

connectionReq();

app.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
