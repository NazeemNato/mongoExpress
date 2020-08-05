const express = require('express')
const router = express.Router();
const Users = require('../models/User.js')

router.get('/',async(req,res)=>{
	try{
		const users = await Users.find()
		res.json(users)
	}catch(err){
		res.json({message:err})
	}
})
// all users data
router.post('/',async(req,res)=>{
	const users = new Users({
		username:req.body.username,
		email: req.body.email
	})
	try{
		const saved = await users.save()
		res.json(saved)
	}catch(err){
		res.json({message:err})
	}
})
// get specific user data
router.get('/u/:email',async(req,res)=>{
	 var regex = new RegExp(req.params.email, "i")
    ,   query = { email: regex };
	try{
		const user = await Users.find(query)
		res.json(user)
	}catch(err){
		res.json({message:err})
	}
})
// delete user
router.delete('/u/:email',async(req,res)=>{
	try {
		const removeUser = await Users.deleteMany({email: req.params.email})
		res.json(removeUser)
	}catch(err){
		res.json({message:err})
	}
})

// update user mail
router.patch('/:id',async(req,res)=>{
	try{
		const updatePost = await Users.updateOne(
			{ _id: req.params.id },
			{$set:{email: req.body.email}}
			)
		res.json(updateOne)
		}catch(err){
			res.json({message:err})
		}
})
module.exports = router