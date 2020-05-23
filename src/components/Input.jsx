import React, {createRef, useRef, useEffect} from 'react'

export default function InputBox(props) {
    /**
     * inputRef = {current: 存储dom元素对象}
     *      createRef()刚创建current=null
     *      当组件渲染的时候会识别 ref={inputRef} 把当前元素获取到赋值给current,所以在渲染完成后通过inputRef获取到dom 对象
     * 
     * createRef、useRef区别：
     *  createRef每次重新渲染都会重新创建一个新的ref对象
     *  useRef只第一次渲染创建
     */
    const inputRef = createRef()

    useEffect(() => {
        console.log(inputRef)
    }, [])

    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={ev => {
            inputRef.current.focus()
        }}>自动聚焦</button>
    </div>
}