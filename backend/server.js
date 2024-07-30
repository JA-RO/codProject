const express = require('express');
const port = 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

connectDB();
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/todos', require('./routes/todoRoutes'))
//app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
