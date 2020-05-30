class EventEmit {
    // 事件池 {事件名：【订阅方法，...】}
    pond = []
    $on(eventName, func) {
        if (!this.pond.hasOwnProperty(eventName)) {
            this.pond[eventName] = []
        }
        // 订阅方法去重
        if (this.pond[eventName].some(item => item == func)) return
        this.pond[eventName].push(func)
    }

    $emit(eventName, ...args) {
        let arr = this.pond[eventName] || []
        arr.forEach(item => {
            item.call(null, ...args)  
        })
    }
    
}

export default new EventEmit()