const dataResponsive = require('./responsive/DataResponsive')
const perfectNum = require('./../Algorithms/PerfectNumber')
const primaryNum = require('./../Algorithms/PrimaryNumber')

class Number{
    constructor(number) {
        this.value = number
        this.getAttribute(number)
        this.primary = null
        this.perfect = null
    }

    getAttribute(number) {
        const thisClass = this
        this.checkExist = new Promise((res, rej) => {
            dataResponsive.isExist(number, res, rej)
        })

        this.checkExist.then(
            function(result){
                if(result.length === 0){
                    const PiN = new primaryNum(thisClass.value)
                    const PeN = new perfectNum(thisClass.value)

                    if(PiN.isPrimaryNumber())
                        thisClass.primary = 1
                    else
                        thisClass.primary = 0

                    if(PeN.isPerfectNumber())
                        thisClass.perfect = 1
                    else
                        thisClass.perfect = 0

                    dataResponsive.insertToDatabase(thisClass.value, thisClass.primary, thisClass.perfect)

                }
                else{
                    thisClass.primary = result[0].primaryNum
                    thisClass.perfect = result[0].perfectNum
                }
        },
            function(err){
                console.log(err)
            })
    }
}

module.exports = Number
