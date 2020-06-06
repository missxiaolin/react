/**
 * Promise A+: Promise的设计规范（基于原生js自己可以实现一套内置Promise具备的功能）
 */

class MyPromise {
    constructor(executor) {
        // 初始参数
        this.status = 'pending'
        this.value = undefined
        this.resolvedArr = []
        this.rejectedArr = []

        let changeStatus = (status, result) => {
            if (this.status !== 'pending') return
            this.status = status
            this.value = result
            let arr = status === 'rejected' ? this.rejectedArr : this.resolvedArr
            this.resolvedArr.forEach(item => {
                typeof item === 'function' ? item(this.value) : null
            })
        }

        let resolve = result => {
            if (this.resolvedArr.length > 0) {
                changeStatus('resolved', result)
                return
            }
            let delayTimer = setTimeout(() => {
                clearTimeout(delayTimer)
                changeStatus('resolved', result)
            }, 0)

        }
        let reject = reason => {
            if (this.rejectedArr.length > 0) {
                changeStatus('rejected', reason)
                return
            }
            let delayTimer = setTimeout(() => {
                clearTimeout(delayTimer)
                changeStatus('rejected', reason)
            }, 0)

        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    /**
     * 返回
     * @param {*} resolvedFn 
     * @param {*} rejectedFn 
     */
    then(resolvedFn, rejectedFn) {
        if (typeof resolvedFn !== 'function') {
            resolvedFn = result => {
                return result
            }
        }
        if (typeof rejectedFn !== 'function') {
            rejectedFn = reason => {
                // throw new Error(reason)
                return new MyPromise((resolve, reject) => {
                    reject()
                })
            }
        }
        // then链：返回一个新的promise实例
        // 1.resolvedArr/rejectedArr不直接存放resolvedFn/rejectedFn,因为要监听两个方法的返回结果和是否报错（因为只有这样才能控制新实例中到底执行resolve/reject）=> 先存放匿名函数在匿名函数中把传递的resolvedFn/rejectedFn执行
        // 2.捕获方法执行是否报错
        // 3.方法返回的结果如果是新的promise实例新实例成功或失败的状态也是我们执行resolve/reject的标准
        return new MyPromise((resolve, reject) => {

            this.resolvedArr.push(() => {
                try {
                    let x = resolvedFn(this.value)
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
            this.rejectedArr.push(() => {
                try {
                    let x = rejectedFn(this.value)
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }

    /**
     * 
     * @param {*} rejectedFn 
     */
    catch(rejectedFn) {
        // catch(rejectedFn) === then(null, rejectedFn)
        return this.then(null, rejectedFn)
    }


}

module.exports = MyPromise