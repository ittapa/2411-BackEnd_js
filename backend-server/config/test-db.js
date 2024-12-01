

const pool = require('./database');
// 환경 변수 파라미터 set
const dotenv = require('dotenv')
dotenv.config(); // .env 파일 로드

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to the MariaDB database!');
        connection.release(); // 연결 해제
    } catch (error) {
        console.error('Error connecting to MariaDB:', error.message);
    }
})();