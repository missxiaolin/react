/**
 * Promise A+: Promise的设计规范（基于原生js自己可以实现一套内置Promise具备的功能）
 */

 class MyPromise {
     constructor(executor) {
         // 初始参数
        this.status = 'pending'
        this.value = undefined
        
        let resolve = function (result) {

        }
        let reject = function(reason) {

        }
        executor(resolve, reject)
     }
}

module.exports = MyPromise