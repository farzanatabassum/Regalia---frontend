const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {createProduct,getProduct}=require('../controllers/product.controller')
//for files
const multer = require('multer');
const path = require('path');
const imgStorage = multer.diskStorage({
  destination: path.join(__dirname,'../productImages'),
  filename: (req, file, cb) => {
    return cb(
      null, 
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const uploadImage = multer({
  storage: imgStorage,
  fileFilter: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return cb(new Error('Only images are allowed'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});
router.use(express.static('../productImages'));

// router.use('/image', express.static('../productImages'));
// router.post('/image', uploadImage.single('image'), (req, res) => {
//   console.log(req.file)
//   res.json({
//     success: 1,
//     image_url: `http://localhost:5000/api/products/image/${req.file.filename}`,
//   });
// });
router.route('/create').post(uploadImage.single('image'),protect,createProduct)
router.route('/read').get(protect,getProduct)
// router.use((err, req, res, next) => {
//   console.log(err.message);
//   res.status(404).json({
//     msg: err.message,
//   });
// });
module.exports = router;
