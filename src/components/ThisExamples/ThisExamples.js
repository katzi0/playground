import React from 'react'

class myTestClass {
    constructor(props) {
        this.test = 'test'
    }

    printThisTest() {
        return this.test
    }
}

function testFunction() {
    const test = 'test in testFunction()'
    console.log(`${this.test}`)
}

const testArrowFunction = () => {
    const test = 'test in testArrowFunction()'
    console.log(`${this.test} arrow function`)
}

const testObj = {
    test: 'test in testObj',
    printTest: () => console.log(this.test)
}


const ThisExamples = () => {
    const classInstance = new myTestClass()
    const testClass = classInstance.printThisTest()
    return (
        <div>
            <h1><i>this</i> all makes sense now</h1>
            <p><code>class myTestClass printThisTest() output:</code>{testClass}</p>
            <p><code>testFunction printTest() output:</code>{testFunction()}</p>
            <p><code>testFunction printTestArrowFunc() output:</code>{testArrowFunction()}</p>
            <p><code>testObj printTest() output:</code>{testObj.printTest()}</p>
        </div>
    )
}

export default ThisExamples
