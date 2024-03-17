import express from "express";
import router from "./router.js";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Define a route to serve the page.html file
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/page.html"); // Assuming page.html is in the root directory
});
app.use(router);
app.listen(3000, () => {
    console.log("Server is listening");
});
