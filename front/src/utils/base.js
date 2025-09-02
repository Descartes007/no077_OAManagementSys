const base = {
    get() {
        return {
            url : "http://localhost:8080/qiyeOAguanlixitong/",
            name: "qiyeOAguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qiyeOAguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业OA管理系统"
        } 
    }
}
export default base
