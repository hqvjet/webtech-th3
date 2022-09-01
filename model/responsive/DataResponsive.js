const con = require('../../ config/db/db')

class DataResponsive {
    isExist(number, res, rej){
        const query = 'select * from number where number = ?'
        con.query(query, [number], function(err, result){
            if(err)
                rej(err)
            else
                res(result)
        })
    }

    insertToDatabase(value, pri, per){
        const query = 'insert into number(number, perfectNum, primaryNum) values (?, ?, ?)'
        con.query(query, [value, pri, per], function(err, result){
            if(err) throw err
            console.log(result.affectedRows + 'inserted')
        })
    }
}


module.exports = new DataResponsive