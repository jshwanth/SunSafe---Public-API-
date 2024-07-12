import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const apiKey = process.env.OPENUV_API_KEY;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  const { lat, lng } = req.body;
  try {
    const response = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}`, {
      headers: {
        'x-access-token': apiKey
      }
    });
    const uvIndex = response.data.result.uv;
    const safeExposureTime = response.data.result.safe_exposure_time ? response.data.result.safe_exposure_time.st1 : null;

    let needSunscreen;
    if (uvIndex >= 3) {
      needSunscreen = true;
    } else {
      needSunscreen = false;
    }

    res.render("index", { uvIndex, safeExposureTime, needSunscreen });
  } catch (error) {
    console.error("Failed to fetch UV index data:", error.message);
    res.render("index", { error: "Could not retrieve UV index data. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
