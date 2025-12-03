const express = require('express')
const cors = require('cors');
const pool = require('./db');
const app = express();
app.use(cors());
app.use(express.json());


app.post('/regist', async (req, res) => {
    const { id, pw, dob, name, gender } = req.body;

    try {
        // 아이디 중복 있는지 확인
        const [row] = await pool.query(
            'SELECT * FROM ex WHERE id = ?',
            [id]
        );
        if (rows.length > 0) {
            return res.json({ result : false}); // 아이디 중복됨
        }

        // 회원 추가
        await pool.query(
            'INSERT INTO ex(id, pw, dob, name, gender) VALUES(?,?,?,?,?)'
            [id,pw,dob,name,gender]
        );

        res.json({ result : true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result : false, error: '서버 오류' });
    }
});

app.post('/login', async (req,res) => {
    const {id, pw} = req.body;
try{
    const [rows] = await pool.query(
        'SELECT * FROM ex WHERE id = ? AND pw = ?',
        [id, pw]
    );

    if (rows.length > 0) {
        const users = rows[0];
        res.json({ result : true, name: users.name });
    }
    else {
        res.json({ result : false });
    }
} 
    catch (err) {
        console.error(err);
        res.status(500).json({ result : false, error: '서버 오류' });
    }

});

app.listen(8080,()=> {
    console.log("서버 실행: http://localhost:8080");
    
});