const Model = require('./main')

class Todo extends Model {
    constructor(form={}) {
        super()
        this.id = form.id
        this.title = form.title || ''
        this.done = false
        // this.user_id = form.user_id
        // 给 todo 增加两个属性 created_time 和 update_time,
        // 分别表示创建时间和更新时间
        // 这两个很常用, 所以用 ct 和 ut 的缩写表示
    }

    static update(form) {
        const id = Number(form.id)
        const t = this.get(id)
        t.title = form.title
        t.save()
    }
}

// 把 Model 提取出来之后, 就可以方便地对 model 进行测试
const testAdd = () => {
    const form = {
        title: '打豆豆',
    }
    const t = Todo.create(form)
    t.save()
}

const testDelete = () => {
    const form = {
        title: 'water',
        id: 0,
    }
    const t = Todo.create(form)
    t.remove(form.id)
}

const testUpdate = () => {
    const form = {
        title: '睡觉',
        id: 1,
    }
    const t = Todo.findOne('id', form.id)
    t.title = form.title
    t.done = false
    t.save()
}

const test = () => {
    // testAdd()
    // testDelete()
    testUpdate()
}

if (require.main === module) {
    test()
}

module.exports = Todo