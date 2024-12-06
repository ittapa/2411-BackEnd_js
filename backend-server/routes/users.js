const express = require('express');
const User = require('../models/User');
const router = express.Router();

// 사용자 목록 조회
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); // 모든 사용자 데이터 조회
    res.render('users', { users }); // users.ejs 템플릿에 데이터 전달
  } catch (error) {
    console.error('Failed to fetch users:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 사용자 단일 조회
router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// 사용자 생성
router.post('/user', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  //res.json(newUser);
  res.redirect('/users'); // 사용자 목록 페이지로 리디렉션
});

// 사용자 삭제
router.delete('/user/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await User.destroy({ where: { id } });
  if (deleted) {
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// 사용자 수정
router.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const user = await User.findByPk(id);
  if (user) {
    await user.update({ name, email, password });
    res.json({ message: 'User updated successfully', user });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

router.get('/create-user', (req, res) => {
  res.render('createUser');
});

module.exports = router;


