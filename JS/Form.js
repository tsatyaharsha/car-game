class Form{
constructor(){

}
display(){
var element=createElement('h2','car racing game')
element.position(130,0)

var input=createInput('name')
input.position(130,160)

var button=createButton('play')
button.position(130,200)

button.mousePressed(function(){
    input.hide()
    button.hide()
    element.hide()
    var greating=createElement('h4','hello')
greating.position(250,200)
})
}


}