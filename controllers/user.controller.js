const userService = require('../services/user.services');

class UserController {
    async signup(req, res) {
        try {
            const user = await userService.userSignup(req.body);
            return res.status(201).json({ message: 'Signup successful', user });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await userService.loginUser(email, password);
            return res.status(200).json({ message: 'Login successful', ...result });
        } catch (error) {
            return res.status(401).json({ message: error.message });
        }
    }

    async getAllStudents(req, res) {
        try {
            const students = await userService.getAllStudents();
            return res.status(200).json({ students });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getStudentById(req, res) {
        try {
            const student = await userService.getStudentById(req.params.id);
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            return res.status(200).json({ student });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getAllTeachers(req, res) {
        try {
            const teachers = await userService.getAllTeachers();
            return res.status(200).json({ teachers });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getTeacherById(req, res) {
        try {
            const teacher = await userService.getTeacherById(req.params.id);
            if (!teacher) {
                return res.status(404).json({ message: 'Teacher not found' });
            }
            return res.status(200).json({ teacher });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async updateProfile(req, res) {
        try {
            const user = await userService.updateProfile(req.user.id, req.body);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json({ user });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    async updateStudent(req, res) {
        try {
            const student = await userService.updateStudent(req.params.id, req.body);
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            return res.status(200).json({ student });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new UserController();
