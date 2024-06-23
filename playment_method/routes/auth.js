const  router  =  require ( 'express' ) . Router ( ) ;
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt  	= require("jsonwebtoken");

router.post("/register" , async (req, res) => {
	const newuser  =  new User({
		username :  req.body.username ,
		email : req.body.email ,
		password :CryptoJS.AES.encrypt( req.body.password , process.env.PASS_SEC).toString() //  it  is  the  password  which  is  encrypted  by the  crypto js  and  the  secret  key  is  in the  env  file  for  security  purpose,
		//  use the  crypto  js to  not visible the pass in the mongo 
	});
	try {
		const saveuser  =  await newuser.save();  // it not going to work  it  instantly  on and then again it go  to  the next  line not save  for it use async  and await  or  then  and catch

		// console.log(newuser);
		console.log(saveuser);
		res.status(200).send(saveuser);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error in  register , unqiue  user  name and email  required");
	}
	
})
// save the new user  
// Login  check 

router.post("/login" , async (req, res) => {
	try{
		const user = await User.findOne({username:  req.body.username});
		const  hashpass =  CryptoJS.AES.decrypt(user.password , process.env.PASS_SEC);
		const  psw = hashpass.toString(CryptoJS.enc.Utf8); // to  convert the  hash  pass  to  the  string  pass
		psw !== req.body.password && res.status(500).json(("wrong password")) ;
		
		//  when use want to updaye the info  
		const acesstoken =  jwt.sign({ 
			id:user._id 
		}, process.env.JWT_SEC , {expiresIn : "3d"}); //  the  token  is  valid for 3 days  and  it  is  the  secret  key  in the  env  file  for  security  purpose
		// with  the help of the access stoken it can update it  
		
		//  not send the password  encretion to to avoid it 
		const {password , ...others} = user._doc; 

		res.send({...others , acesstoken}) //  when all things  is correct    it show all  things  except password  
	}
	catch (err){
		res.status(500).send(err);
	}
})




module.exports  =  router ;