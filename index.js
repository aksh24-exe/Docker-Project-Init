const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

dotenv.config(); // ✅ fix here

const app = express();
app.use(express.json());

const PORT = process.env.PORT ?? 3012;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`✅ Listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}

main();
