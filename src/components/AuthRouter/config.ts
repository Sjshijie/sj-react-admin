interface IRoute{
    name:string,
    path:string,
    children?:IRoute[],
    isWhite?:Boolean,
    title:string

}

const routes:IRoute[] = [
    
    {
        name:"systemManagement",
        path:"/systemMaintain",
        title:"系统维护",
        children:[{
            name:"pointOfSale",
            path:"/systemManagement/pointOfSale",
            title:"销售点维护",
        },{
            name:"purAcceptanceSetting",
            path:"/systemManagement/purAcceptanceSetting", 
            title:"采购收货检查设置",
        }]
    },
    {
        name:"qualificationReview",
        path:"/qualificationReview",
        title:"资质审查",
        children:[{
            name:"productFileMaintain",
            path:"/qualificationReview/productFileMaintain",
            title:"商品档案维护",
        },{
            name:"varietyApplication",
            path:"/qualificationReview/varietyApplication", 
            title:"首营品种申请",
        }]
    },
    {
        name:"wholesaleManagement",
        path:"/wholesaleManagement",
        title:"批发管理"
    }
]


export default routes;