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

// Get all photo captions
router.get('/captions', async (req, res) => {
    try {
        const captions = await PhotoCaption.findAll();
        res.json(captions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get a single favorite photo by id
router.get('/favorites/:id', async (req, res) => {
    try {
        const favorite = await PhotoFavorite.findByPk(req.params.id);
        if (favorite) {
            res.json(favorite);
        } else {
            res.status(404).send('Favorite photo not found');
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

// UNFINISHED ROUTE!!! ROUTE TO BE MODIFED B/C ASSOCIATIONS ARE NEEDED
// LAST ROUTE TO COMPLETE
// Get a photo caption and all associated favorite photos
router.get('/captions/:id/favorites', async (req, res) => {
    try {
        const caption = await PhotoCaption.findByPk(req.params.id, {
            include: [{
                model: PhotoFavorite,
                as: 'favorites' // This assumes you have set up an association alias in your Sequelize models
            }]
        });

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
// Update an existing favorite photo
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

// Delete a photo caption
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

