const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { LocationModel } = require("./model/Location.model");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Location page");
});

app.post("/locations", async (req, res) => {
  const { locationname, address, lat, lng } = req.body;
  const locations = new LocationModel({
    locationname,
    address,
    lat,
    lng,
  });

  try {
    const savedLocation = await locations.save();
    res
      .status(200)
      .json({
        msg: "Location data saved successfully",
        location: savedLocation,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
});

app.get("/locations", async (req, res) => {
  try {
    const locations = await LocationModel.find();
    res
      .status(200)
      .json({ msg: "Location data retrieved successfully", locations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
});

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Not connected to DB");
      console.error(err);
    });
  console.log(`Listening on PORT ${PORT}`);
});
