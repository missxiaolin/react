/**
 * 存储当前板块需要派发行为的action对象
 */
export default {
    change() {
        // 基于reduxThunk处理异步的操作方式
        // return dispatch => {
        //     setTimeout(() => {
        //         dispatch({
        //             type: 'TEST',
        //             num: 10
        //         })
        //     }, 2000)
        // }
        // 基于reduxPromise处理异步的操作方法
        // =>action对象传输给reducer的值只能存储在payload中（其他名字不好使）
        return {
            type:'TEST',
            payload: new Promise(resolve => {
                setTimeout(() => {
                    resolve(2)
                }, 2000)
            }) 
        }

    }
}
