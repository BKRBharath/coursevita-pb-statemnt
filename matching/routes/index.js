
var express = require('express');
var router = express.Router();
const Student = require('../modal/student');
const Mentor = require('../modal/mentor');
const Match = require('../modal/match');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/students', async (req, res) => {
  try {
    const { name, email, goals, preferredAreas, availability } = req.body;

    // Validate required fields 
    if (!name || !email || !goals || !preferredAreas || !availability) {
      return res.status(400).json({ error: 'All fields are required: name, email, goals, preferredAreas, availability.' });
    }

    // Create a new student document
    const student = new Student({
      name,
      email,
      goals,
      preferredAreas,
      availability
    });


    await student.save();

    // Send a success response
    res.status(201).json({ message: 'Student profile created successfully', student });
  } catch (error) {
    console.error(error); // Log the error for debugging

    // Handle specific errors
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // General server error
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/mentor', async (req, res) => {
  try {
    const { name, email, expertise, availability, teachingStyle } = req.body;

    // Create a new mentor document
    const newMentor = new Mentor({
      name,
      email,
      expertise,
      availability,
      teachingStyle
    });

    // Save the new mentor to the database
    await newMentor.save();

    res.status(201).json({ message: 'Mentor profile created successfully', mentor: newMentor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// POST route to create a new match
router.post('/matches', async (req, res) => {
  try {
    const { studentId, mentorId, expertise } = req.body;

    // Validate required fields
    if (!studentId || !mentorId || !expertise) {
      return res.status(400).json({ error: 'All fields are required: studentId, mentorId, preferredAreas.' });
    }

    // Create a new match document
    const match = new Match({
      studentId,
      mentorId,
      expertise
    });

    // Save the match document to the database
    await match.save();

    // Send a success response 
    res.status(201).json({ message: 'Match created successfully', match });
  } catch (error) {
    console.error(error); // Log the error for debugging

    // Handle server errors
    res.status(500).json({ error: 'Server error' });
  }
});
// GET route to retrieve matches
router.get('/matches', async (req, res) => {
  try {
    // Extract query parameters (optional filtering)
    const { studentId, mentorId, preferredAreas } = req.query;

    // Build a query object to filter matches
    let query = {};

    if (studentId) {
      query.studentId = studentId;
    }
    if (mentorId) {
      query.mentorId = mentorId;
    }
    if (expertise) {
      query.preferredAreas = preferredAreas;
    }

    // Find matches based on the query
    const matches = await Match.find(query);

    // Send the found matches as a response
    res.status(200).json(matches);
  } catch (error) {
    console.error(error); // Log the error for debugging

    // Handle server errors
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/schedule/:id', async (req, res) => {
  const matchId = req.params.id;
  // Logic to schedule the session
  res.send({ message: 'Session scheduled' });
});

module.exports = router;


