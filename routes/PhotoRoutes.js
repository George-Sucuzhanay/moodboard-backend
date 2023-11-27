const express = require('express');
const router = express.Router();

const PhotoFavorite = require('../models/Model1');
const PhotoCaption = require('../models/Model2');


// CREATE
// Create a new favorite photo
router.post('/favorites', async (req, res) => {
    try {
        const newFavorite = await PhotoFavorite.create(req.body);
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// READ
// Get all favorited photos
router.get('/favorites', async (req, res) => {
    try {
        const favorites = await PhotoFavorite.findAll();
        res.json(favorites);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET all photo captions
router.get('/captions', async (req, res) => {
    try {
        const captions = await PhotoCaption.findAll();
        res.json(captions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// UPDATE
// Update an existing photo caption
router.put('/captions/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        // Find the caption by id and update it
        const [updatedRows] = await PhotoCaption.update(updatedData, {
            where: { caption_id: id }
        });

        if (updatedRows > 0) {
            // If the caption was updated, fetch the updated caption and return it
            const updatedCaption = await PhotoCaption.findByPk(id);
            res.status(200).json(updatedCaption);
        } else {
            // If no rows were updated, then the caption was not found
            res.status(404).send('Caption not found');
        }
    } catch (error) {
        // Handle any errors
        res.status(500).send(error.message);
    }
});

// DELETE
// Delete a favorite photo
router.delete('/favorites/:id', async (req, res) => {
    try {
        const deleted = await PhotoFavorite.destroy({
            where: { photo_id: req.params.id }
        });

        if (deleted) {
            res.status(200).send('Favorite photo deleted successfully');
        } else {
            res.status(404).send('Favorite photo not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;

