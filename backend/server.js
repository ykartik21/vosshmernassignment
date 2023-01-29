const exppress = require("express");
const app = exppress();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
app.use(cors());
const userRoute = require("./routes/userRoutes.js");
const orderRoute = require("./routes/orderRoutes.js");
const connectDb = require("./config/db.js");
const { notFound, errorHandler } = require("./middleware/errormiddleware.js");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(exppress.json());

app.use("/api/users", userRoute);
app.use("/api/users", orderRoute);
app.use(notFound);
app.use(errorHandler);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
