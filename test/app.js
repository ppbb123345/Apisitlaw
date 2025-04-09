const express = require('express')
const path = require('path');
const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// เส้นทางสำหรับหน้าหลัก
app.get('/', (req, res) => {
    res.render('Homepage')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
