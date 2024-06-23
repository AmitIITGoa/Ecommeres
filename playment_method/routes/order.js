
const Order = require("../models/Order");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newProduct = new Order(req.body);  //  we  have creat  the diff section of the product in the data  base it save  automatically
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
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
router.delete("/:id", verifyTokenAndAuthorization , async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);  //  command in the mongodb  to  delete  the data 
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", verifyTokenAndAuthorization  , async (req, res) => {
	try {
	  const user = await Order.findById(req.params.id); // Ensure User model is properly implemented
	  if (!user) {
		return res.status(404).json({ message: "User not found" });
	  }
	 

	
	  res.status(200).json(user);
	} catch (err) {
	  console.error("Error finding user:", err); // Log specific error message for debugging
	  res.status(500).json({ message: "Internal server error" });
	}
});
  


router.get("/", async (req, res) => {
  const categories = req.query.categories;
  try {
    let products;
    if (categories) {
      products = await Order.find({
        categories: {
          $in: [categories],
        },
      });
    } else {
      products = await Order.find();
    }

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// make  a section for the admin for the income 

//  geted from the  template 
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
	try {
	  const income = await Order.aggregate([
		{ $match: { createdAt: { $gte: previousMonth } } },
		{
		  $project: {
			month: { $month: "$createdAt" },
			sales: "$amount",
		  },
		},
		{
		  $group: {
			_id: "$month",
			total: { $sum: "$sales" },
		  },
		},
	  ]);
	  res.status(200).json(income);
	} catch (err) {
	  res.status(500).json(data);
	}
  });

  


module.exports = router;
