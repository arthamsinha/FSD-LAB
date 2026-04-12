const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/add', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send('Student Added');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// View all students
router.get('/view', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get a single student (for editing)
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update a student
router.put('/update/:id', async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send('Student Updated');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Delete a student
router.delete('/delete/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send('Student Deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
