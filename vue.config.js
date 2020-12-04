// // 给项目配置别名 在项目下新建一个 vue.config.js  在里面设置相关配置  最终vue会把我们设配置的内容合并
// module.exports = {
//     configureWebpack: {
//         resolve: {
//             // 这个是对一些文件的后缀名进行配置,这样就可以在使用文件的时候不写后缀名
//             extendsions: [],
//             //开始配合别名
//             alias: {
//                 // 这个是默认配置的,我们这里不需要写
//                 '@': 'src',
//                 'assets': '@/assets',
//                 'components': '@/components',
//                 'commen': '@/commen',
//                 'network': '@/network',
//                 'views': '@/views',
//             }
//         }
//     }
// }