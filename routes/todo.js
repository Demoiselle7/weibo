const { log } = require('../utils')
const {
    currentUser,
    template,
    redirect,
    loginRequired,
    httpResponse,
} = require('./main')
const Todo = require('../models/todo')

const index = (request) => {
    const u = currentUser(request)
    const models = Todo.all()
    const body = template('todo_index.html', {
        todos: models,
    })
    return httpResponse(body)
}

const add = (request) => {
    // 用于增加新 todo 的路由函数
    if (request.method === 'POST') {
        const form = request.form()
        const u = currentUser(request)
        // form.user_id = u.id
        const t = Todo.create(form)
        t.save()
    }
    // 新增 todo 后, 重定向到 todo 的首页
    // 这样浏览器重新加载首页的时候, 就能拿到刚刚添加的数据
    return redirect('/todo')
}

const edit = (request) => {
    const u = currentUser(request)
    const id = Number(request.query.id)
    const todo = Todo.get(id)
    const body = template('todo_edit.html', {
        todo: todo
    })
    return httpResponse(body)
}

const del = (request) => {
    const id = Number(request.query.id)
    Todo.remove(id)
    return redirect('/todo')
}

const update = (request) => {
    if (request.method === 'POST') {
        const form = request.form()
        console.log('debug form', form)
        // 更新 todo 有三种方案
        // 方案1, 主流的做法, 但是非常野鸡
        // const id = form.id
        // const title = form.title
        // const t = Todo.get(id)
        // t.title = title
        // t.save()

        // 方案2, 算是比较好的一个方式

        // const id = Number(form.id)
        // const t = Todo.get(id)
        // t.update(form)

        // 方案3, 目前来说最好的方式
        // 写程序应该写 what, 而不是写 how
        // 我只要关心这里是更新 todo 这件事情就好了
        // 怎么更新的我不用也不想关心
        Todo.update(form)
    }
    return redirect('/todo')
}

const routeMapper = {
    '/todo': index,
    '/todo/add': add,
    '/todo/delete': del,
    '/todo/edit': edit,
    '/todo/update': update,
}

module.exports = routeMapper