class Parent {
    test() {
        console.log('parent test method')
    }

    bar() {
        console.log('parent bar method')
    }
}

class Child extends Parent {
    constructor(name='') {
        super()
        this.name = name
    }

    test() {
        super.bar()
        console.log('child test method')
    }
}

const c = new Child()
c.test()