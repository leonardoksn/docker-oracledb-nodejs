import oracledb from 'oracledb'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.development.local' })

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const ownerConsinco = {
    user: process.env.OWNER_CONSINCO,
    password: process.env.PASS_CONSINCO,
    connectString: process.env.HOST_CONSINCO,
}

async function setTodayCalls(binds?: any[]) {
    let connection: any;
    try {
        const sql = `SELECT * FROM KOCH.TB_BASE_LIGACOES_UNIFIQUE`;

        connection = await oracledb.getConnection(ownerConsinco);

        const result = await connection.execute(sql, []);
        console.log(result)


    } catch (err) {
        console.log(err)
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.log(err)
            }
        }
    }
}

setTodayCalls() 