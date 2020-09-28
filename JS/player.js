class Player{
    constructor(){
        
    }
getCount(){
database.ref('gameCount').on("value",function(){
    var playerCount=data.val()
})
}
updateCount(Count){
    database.ref('/').update({
        playerCount:Count
    })
}
}