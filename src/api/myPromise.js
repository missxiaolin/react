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
        }catch(error) {
            reject(error)
        }
     }

     /**
      * 返回
      * @param {*} resolvedFn 
      * @param {*} rejectedFn 
      */
     then(resolvedFn, rejectedFn) {
        this.resolvedArr.push(resolvedFn)
        this.rejectedArr.push(rejectedFn)
     }

    
}

module.exports = MyPromise