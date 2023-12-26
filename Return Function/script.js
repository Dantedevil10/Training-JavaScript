let area
let width
let height

width = window.prompt('Enter The Width')
height = window.prompt('Enter The Height') 

area = getArea(width,height)

alert('The Area Is:',area)

function getArea(width, height){
        return width * height
}