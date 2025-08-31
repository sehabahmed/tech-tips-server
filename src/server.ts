import app from "./app";
import mongoose from "mongoose";
import config from "./app/config/index";

async function main() {
  try {
    
    // if you are using MongoDB, uncomment the following lines
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`🚀 App is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();