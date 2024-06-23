const User = require("../models/User");
const Cart = require("../models/Cart");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// Create Cart
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newCart =  Cart(req.body);
  try {
    
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    console.log(newCart);
  
    res.status(500).json({ message: err.message });
  }
});

// Update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.deleteOne({"_id" : req.params.id});
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Cart by ID
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error finding cart:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/find/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.find();
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (err) {
    console.error("Error finding cart:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});






module.exports = router;
