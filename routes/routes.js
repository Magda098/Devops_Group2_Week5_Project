const express = require('express');
const Employee = require('../model/model');

const router = express.Router();

module.exports = router;

router.post('/', async (req, res) => {
    const data = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        ekNo: req.body.ekNo,
        email: req.body.email,
    });
    try {
        // db.teams.insertOne
        const savedData = await data.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// R - Read
router.get('/', async (req, res) => {
    try {
        const data = await Employee.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// U - Update
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const data = await Employee.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// D - Delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Employee.findByIdAndDelete(id);
        res.status(204).json({ message: `The employee named ${data.firstName} ${data.lastName} has been deleted` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});