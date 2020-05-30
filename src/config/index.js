/**
 * 全局配置，不推荐在此import其他对象， 如需import之后配置 可以在App.js中调用setConfig配置
 */

let Config = {
    // 当前模式, 线上模式 | 单机模式  online | alone
    // 修改此属性后 还需要对应修改menu表中的配置中使用的接口地址
    // online接口 | alone接口
    // 2009000000IDRECO0A1E菜单 /corpPresetRole 改为 /presetRole, view改为col_commonND_list
    // 2009000000IDRECO0A1N菜单 /corpPresetRole/removeUser 改为 /organizes/batch/users
    type: "online",

    // 网站标题
    title: "COLYST",

    // 网站默认图标路径
    favicon: "/favicon.png",

    api: {
        // 后台api调用前缀
        // prefix: "/mock/5aa1f9f7106c1334ecc10387/example"
        prefix: "/i2connect"
    },
    menu: {
        // 菜单修改工具地址
        updateUrl: "http://mf.colyst.cn/index/index1#/project/COLYST2.0/editMenu/",
    },

    // 本地存储数据方式 主要用于登录和语言信息 可选值：localStorage | cookie  ie系列对localStorage支持有bug
    localDataType: "localStorage",

    form: {
        // form中子元素的布局设置 方案列表
        layoutList: {
            1: {xs: 24},
            2: {xs: 24, lg: 12},
            3: {xs: 24, lg: 12, xl: 8},
            4: {xs: 24, lg: 12, xl: 8, xxl: 6},
            // 6列状态 尽量不要用
            // 6: {xs: 24, md: 12, lg: 8, xl: 6, xxl: 4}
        },
        // formItem lable 和 输入组件区域 布局设置
        itemLayoutList: {
            // label和输入组件各占一行
            1: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 24 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 24 }
                }
            },
            // label和输入组件在同一行显示
            2: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 7 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 17 }
                }
            },
            // label和输入组件在同一行显示 label部分加宽 英文模式下使用
            3: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 9 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 15 }
                }
            },
        },
        // formItem默认布局方式
        defaultItemLayout: 2,
        // formItem英文默认布局方式
        defaultEnItemLayout: 3,
        // form子元素默认使用方案 DataForm有使用
        defaultLayout: 1,
        // 基本信息界面默认使用的form布局
        baseInfoLayout: 4,
        // 弹出对话框搜索form默认布局
        modalSearchLayout: 2
    },
    // redux state中存储数据的key
    storeKey: "app",
    // 前后台交互时间格式 使用moment.js解析

    // 日期
    dateFormat: "YYYY-MM-DD",
    // 日期时间
    dateTimeFormat: "YYYY-MM-DD HH:mm:ss",

    // 默认每页条数
    pageSize: 10,
    // 列头没有设置宽度的时候的默认占用宽度
    colWidth: 150,
    // 是否开启http缓存 视图，菜单 一般开发环境设置false， 正式环境设置true
    cache: true,
    // 项目信息 colyst核心库不需要该属性, 在被引用的情况下需要填写该属性
    project: null,

    // 配置附加项目
    // project: {
    //     // 项目名
    //     name: "uaes
    //
    //     /**
    //      * 项目单独的动态引入组件方法
    //      * 当 ImportUtil 中 importComponent 方法发现路径开头为 /项目名/... 则会调用该方法
    //      * @param path 组件路径 不包含项目名
    //      */
    //     importComponent: async (path) => {
    //         return await import(`./component${path}`)
    //     },
    //
    //     // 扩展redux
    //     redux: {
    //         // 所有reducer的基类
    //         baseReducer: ProjectReducer,
    //         // 所有实现类
    //         reducerIndex: ReducerIndex
    //     },
    //     // menuFlow方法扩展
    //     // 方法名命名规则 ext开头 如 extGetRow: function(){}
    //     menuFlowFn: {
    //         g: {
    //             extTest: function(){}
    //         },
    //         v: {},
    //         f: {},
    //         c: {}
    //     },
    //
    //     // FormItem扩展属性 扩展方法可使用this获取FormItem信息
    //     formItem: {
    //         // 增加支持的组件 {组件名称: 组件对象}
    //         coms: {},
    //
    //         /**
    //          * 获取输入组件方法 不返回或返回undefined则按原有逻辑走
    //          * 可参考FormItem中同名方法
    //          * @param type = 组件名称
    //          * @param Com = 组件对象
    //          * @param comProps = 组件Props
    //          * @param fieldParams = 原始配置对象
    //          */
    //         getInput: function(type, Com, comProps, fieldParams){
    //
    //         },
    //         /**
    //          * 格式化输入项初始值 也可以用来输出显示方式 不返回或返回undefined则按原有逻辑走
    //          * 可参考FormItem中同名方法
    //          * @param editData 初始值对象
    //          * @param fieldParams 原始配置对象
    //          * @param value 初始值
    //          */
    //         formatValue: function(editData, fieldParams, value){
    //
    //         }
    //     }
    // }
};
export default Config

function execuChange(newConfig, oldConfig){
    changeFnList.forEach(item => item(newConfig, oldConfig));
}

/**
 * 覆盖config
 * @param newConfig 改对象会和Config对象合并
 */
export function setConfig(newConfig){
    let oldConfig = {...Config};
    Object.assign(Config, newConfig);
    execuChange(Config, oldConfig);
}

// 监听config变化的方法集合
let changeFnList = [];

/**
 * 监听Config的变化 方法, 用于在初始化时 获取可能在分支项目中修改的配置项
 * @param fn function(newConfig, oldConfig)
 */
export function configChange(fn){
    changeFnList.push(fn);
    fn(Config);
}

/**
 * 设置新的project配置
 * @param newConfig 配置对象 会和 Config.project 合并
 */
export function setProjectConfig(newConfig){
    setConfig({
        project: {
            ...Config.project,
            ...newConfig
        }
    })
}