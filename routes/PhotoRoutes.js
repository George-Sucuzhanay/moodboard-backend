//this file contains routes for handling CRUD operations for our models

//fulfills requirement "Write routes to add new instances to each model" b/c routes for adding favorites & captions are implemented here
//fulfills requirement "Write routes that return all instances from each model" b/c routes for getting all favorites & captions are implemented here 
//fulfills requirement "Write routes that return individual instances from each model based on their IDs" b/c routes for getting a single favorite or caption by ID are implemented here
//fulfills requirement "Write routes to update instances in each model" b/c routes for updating favorites & captions are implemented here
//fulfills requirement "Write routes to remove instances from each model, based on their IDs" b/c routes for deleting favorites & captions are implemented here
//SOOOOOON !! fulfills requirement "Write a route that returns one instance from a model, and all instances associated with it in a different model" b/c 

const express = require('express');
const router = express.Router();

const PhotoFavorite = require('../models/Model1');
const PhotoCaption = require('../models/Model2');


// CREATE
// Create a new favorite photo in the photofavorites table
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

// Get all photo captions
router.get('/captions', async (req, res) => {
    try {
        const captions = await PhotoCaption.findAll();
        res.json(captions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET all favorited photos with their associated captions
router.get('/favorites-with-captions', async (req, res) => {
    try {
        const favoritesWithCaptions = await PhotoFavorite.findAll({
            include: [{
                model: PhotoCaption,
                as: 'caption', // Ensure this alias matches the one used in your model association
                attributes: ['caption_text'] // Adjust this if you need more fields from PhotoCaptions
            }]
        });

        res.json(favoritesWithCaptions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get a single favorite photo by id and its associated caption
router.get('/favorites/:id', async (req, res) => {
    try {
        const photo = await PhotoFavorite.findByPk(req.params.id, {
            include: [{
                model: PhotoCaption,
                as: 'caption', // This alias should match the one used in association
                attributes: ['caption_text'] // Include only 'caption_text' field or more fields as needed
            }]
        });
        
        if (photo) {
            res.json(photo);
        } else {
            res.status(404).send('Photo not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get a single photo caption by id
router.get('/captions/:id', async (req, res) => {
    try {
        const caption = await PhotoCaption.findByPk(req.params.id);
        if (caption) {
            res.json(caption);
        } else {
            res.status(404).send('Caption not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// UPDATE
// Update an existing favorite photo by ID
router.put('/favorites/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const [updatedRows] = await PhotoFavorite.update(updatedData, {
            where: { photo_id: id }
        });

        if (updatedRows > 0) {
            const updatedFavorite = await PhotoFavorite.findByPk(id);
            res.status(200).json(updatedFavorite);
        } else {
            res.status(404).send('Favorite photo not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update an existing photo caption by ID
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
// Delete a favorite photo by ID
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

// Delete a photo caption by ID
router.delete('/captions/:id', async (req, res) => {
    try {
        const deleted = await PhotoCaption.destroy({
            where: { caption_id: req.params.id }
        });

        if (deleted) {
            res.status(200).send('Caption deleted successfully');
        } else {
            res.status(404).send('Caption not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = router;

