const db = require('../db'); // database connection

// GET /nuggets 
exports.getAllNuggets = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM nuggets');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching nuggets:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// GET /nuggets/random 
exports.getRandomNugget = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM nuggets');
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No nuggets found.' });
    }
    const randomIndex = Math.floor(Math.random() * rows.length);
    res.status(200).json(rows[randomIndex]);
  } catch (err) {
    console.error('Error fetching random nugget:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// POST /nuggets 
exports.addNugget = async (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) {
    return res.status(400).json({ error: 'Both text and author fields are required.' });
  }
  try {
    const [result] = await db.execute(
      'INSERT INTO nuggets (text, author) VALUES (?, ?)',
      [text, author]
    );
    const [newNugget] = await db.execute('SELECT * FROM nuggets WHERE id = ?', [result.insertId]);
    res.status(201).json(newNugget[0]);
  } catch (err) {
    console.error('Error adding nugget:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// DELETE /nuggets/:id 
exports.deleteNugget = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await db.execute('SELECT * FROM nuggets WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Nugget not found.' });
    }
    await db.execute('DELETE FROM nuggets WHERE id = ?', [id]);
    res.status(204).send();
  } catch (err) {
    console.error('Error deleting nugget:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
