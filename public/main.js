
let foodSelectedData = {
    selectFood : "請選擇",
    foodselected :[
        {val:"Noddle", item:"麵食"},
        {val:"Rice", item:"飯食"}
    ]
}


var app = new Vue({
    el: '#app',
    data: {
        foodSelectedData,
        placeSelected: ''
    }

})