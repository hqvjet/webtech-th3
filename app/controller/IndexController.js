const number = require('../../model/Number')

class IndexController {
    connect(req, res) {
        res.send('')
    }

    getNumber(req, res) {
        const input = parseInt(req.body.number)
        console.log(input)
        const numberInput = new number(input)
        setTimeout(function(){
            let data = {
                value: numberInput.value,
                primary: numberInput.primary,
                perfect: numberInput.perfect
            }
            console.log(data)
            data = JSON.stringify(data)
            res.send(data)
        }, 100)

    }
}

module.exports = new IndexController()