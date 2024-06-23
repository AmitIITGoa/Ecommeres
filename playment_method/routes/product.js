const User = require("../models/User");
const Product = require("../models/Product");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);  //  we  have creat  the diff section of the product in the data  base it save  automatically
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin , async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);  //  command in the mongodb  to  delete  the data 
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id" , verifyTokenAndAuthorization , async (req, res) => {
 
	try {
    console.log(req.params.id) ;
	  const user = await Product.findById(req.params.id); // Ensure User model is properly implemented
    
	  if (!user) {
		return res.status(404).json({ message: "User not found" });
	  }
	  res.status(200).json(user);
    
	} catch (err) {
	  console.error("Error finding user:", err); // Log specific error message for debugging
	  res.status(500).json({ message: "Internal server error" });
	}
});


router.get("/all" ,   verifyTokenAndAuthorization , async (req, res) => { 
  try {
    const users = await Product.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error finding users:", err);
    res.status(500).json({ message: "Internal server error" });
  }
})
  


router.get("/", async (req, res) => {
  const categories = req.query.categories;
  try {
    let products;
    if (categories) {
      products = await Product.find({
        categories: {
          $in: [categories],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
