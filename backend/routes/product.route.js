const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {createProduct,getProduct}=require('../controllers/product.controller')
//for files
const multer = require('multer');
const {
  ref,
  uploadBytes,
  listAll,
  deleteObject,
} = require("firebase/storage");
const storage=require('../firebase/firebase');
const route = require('color-convert/route');
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });
//add picture
router.post("/addPicture", upload.single("image"), async (req, res) => {
  const file = req.file;
  const imageRef = ref(storage, file.originalname);
  const metatype = { contentType: file.mimetype, name: file.originalname };
  await uploadBytes(imageRef, file.buffer, metatype)
    .then((snapshot) => {
      res.send("uploaded!");
    })
    .catch((error) => console.log(error.message));
});
//get Image url
router.get("/pictures", async (req, res) => {
  const listRef = ref(storage);
  let productPictures = [];
  await listAll(listRef)
    .then((pics) => {
      productPictures = pics.items.map((item) => {
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${item._location.bucket}/o/${item._location.path_}?alt=media`;
        return {
          url: publicUrl,
          name: item._location.path_,
        };
      });
      res.send(productPictures);
    })
    .catch((error) => console.log(error.message));
});


router.route('/create').post(protect,createProduct)
router.route('/read').get(protect,getProduct)

module.exports = router;
