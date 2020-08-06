const express = require('express')
const router = express.Router();
const Urls = require('../models/Url.js')

router.get('/',async(req,res)=>{
	try{
		const urls = await Urls.find()
		res.json(urls)
	}catch(err){
		res.json({message:err})
	}
})
// all urls data
router.post('/',async(req,res)=>{
	const url = new Urls({
		username:req.body.username,
		url: req.body.url
	})
	try{
		const saved = await url.save()
		res.json(saved)
	}catch(err){
		res.json({message:err})
	}
})
// get specific user data
router.get('/u/:username',async(req,res)=>{
	 var regex = new RegExp(req.params.username, "i")
    ,   query = { username: regex };
	try{
		const url = await Urls.find(query)
		res.json(url)
	}catch(err){
		res.json({message:err})
	}
})
// delete user
router.delete('/u/:id',async(req,res)=>{
	try {
		const removeUrl = await Urls.deleteMany({_id: req.params.id})
		res.json(removeUrl)
	}catch(err){
		res.json({message:err})
	}
})

// update user mail
router.patch('/:id',async(req,res)=>{
	try{
		const updatePost = await Urls.updateOne(
			{ _id: req.params.id },
			{$set:{url: req.body.url}}
			)
		res.json(updateOne)
		}catch(err){
			res.json({message:err})
		}
})
module.exports = router