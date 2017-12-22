const CurrentPath = '/webp2p_interface_mysql/'
// 请求的时候用到的路径参数
// export default {
//     HTTP:'http://',
//     SERVER_PATH:'10.194.61.136',
//     PORT:8080,
//     VERSION:'1.0.1'
// }
module.exports = {
    productPath:CurrentPath+'investment',//产品详情页
    qrcodePath:CurrentPath+'app',//二维码
    smsPath:CurrentPath+'sms',//短信验证码
    regPath:CurrentPath+'auth',//校验注册手机号
    userinfoPath:CurrentPath+'auth',//根据uuid获取用户信息
    signinPath:CurrentPath+'discovery',//签到
    activityPath:CurrentPath+'activity',//邀请记录接口
}
