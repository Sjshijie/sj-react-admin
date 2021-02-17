import React from 'react'
export default {
    home:React.lazy(()=>import('../../page/home')),
    qualificationReview:React.lazy(()=>import('../../page/qualificationReview')),
    varietyApplication:React.lazy(()=>import('../../page/qualificationReview/varietyApplication')),
} as any