const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

// Public
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Students and teachers
router.get('/students', authenticate, authorize('student', 'teacher'), userController.getAllStudents);
router.get('/students/:id', authenticate, authorize('student', 'teacher'), userController.getStudentById);
router.patch('/updateprofile', authenticate, authorize('student', 'teacher'), userController.updateProfile);

// Teachers only
router.get('/teachers', authenticate, authorize('teacher'), userController.getAllTeachers);
router.get('/teachers/:id', authenticate, authorize('teacher'), userController.getTeacherById);
router.patch('/updatestudents/:id', authenticate, authorize('teacher'), userController.updateStudent);

module.exports = router;
