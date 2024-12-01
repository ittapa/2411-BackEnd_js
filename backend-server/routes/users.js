const express = require('express');
const User = require('../models/User');
const router = express.Router();

// 사용자 목록 조회
router.get('/users', async (req, res) => {
  const users = await User.findAll();
  console.log(users);
  res.json(users);
});

// 사용자 one 조회


// 사용자 생성
router.post('/user', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  res.json(newUser);
});

// 사용자 삭제

// 사용자 수정

module.exports = router;


