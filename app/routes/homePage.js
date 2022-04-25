var express = require("express");
var router = express.Router();
var path = require("path");
var cloudinary = require("cloudinary").v2;
const homePage = require("../controllers/homePageController");

/* GET home page. */
router.get("/", homePage.renderHomePage);
router.get("/about", homePage.renderAbout);
router.get("/booktable", homePage.renderBooktable);
router.get("/menu", homePage.renderMenu);

// router.get("/user",homePage.renderUserPage);
router.get("/shoppingCart", homePage.renderShoppingCart);

//TEST here delete later
router.get("/test", homePage.renderTestPage);
// router.get("/:UserName'",homePage.renderUserPage);
router.post("/", homePage.renderUserPage); /////////////////////////////

// TODO: for upload file and img
// multer
// SET STORAGE
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});
// config cloudinary
cloudinary.config({
  cloud_name: "web-midterm",
  api_key: "441277646977747",
  api_secret: "p1fvcp_57qZp0LCRpUiGzQ8N39A",
});

var upload = multer({ storage: storage });
// test loadfile get
router.get("/loadfile", function (req, res) {
  console.log(__dirname);
  res.render("loadfile");
});
// post upload file

router.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  console.log(file);
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }

  cloudinary.uploader.upload(
    path.resolve(`uploads/${req.file.filename}`),
    function (error, result) {
      console.log(result.url, error);
    }
  );
  res.sendFile(path.resolve(`uploads/${req.file.filename}`));
});

module.exports = router;
