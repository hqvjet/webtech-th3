import React from 'react'
import axios from "axios";
import '../css/Calculator.css'

function Calculator(){
    axios
        .get('/calc')
        .then((req, res) => {

        })

    const convertToString = data => {
        let content = JSON.stringify(data.value)
        if(data.primary === 0 && data.perfect === 0)
            content += ' is a NORMAL number'
        else if(data.primary === 1)
            content += ' is PRIMARY number'
        else
            content += ' is PERFECT number'

        return content
    }

    const doSubmit = e => {
        e.preventDefault()
        const value = {
            number: document.getElementById('input').value
        }
        axios
            .post('/calc', value)
            .then(
                (res) => {
                    const output = document.getElementById('output')
                    output.innerHTML = convertToString(res.data)
                }
            )
    }

    return (
        <>
            <div className='main'>
                <h1>Input</h1>
                <form onSubmit={doSubmit}>
                    <label htmlFor='input'>Number</label>
                    <input type='text' id='input' name='input' placeholder='Please Give Me A Number'/>
                    <button type='submit' id='button'>Check</button>
                </form>
                <h1>Output</h1>
                <h3 id='output'>Waiting for number ...</h3>
            </div>
        </>
    )
}

export default Calculator