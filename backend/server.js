import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import medhaRoute from "./routes/medha.js";
import phishingRoute from "./routes/phishing.js";
import urlScannerRoute from "./routes/urlScanner.js";
import ipLookupRoute from "./routes/ipLookup.js";

app.use("/api/medha", medhaRoute);
app.use("/api/phishing", phishingRoute);
app.use("/api/urlscanner", urlScannerRoute);
app.use("/api/iplookup", ipLookupRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
