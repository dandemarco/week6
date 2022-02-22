alert("is this working?")   //just a test to see if the js and html are linked

let canvas = document.querySelector("#canvas")
let context = canvas.getContext("2d")

let input = document.querySelector("#image-text")
input.disabled = true

let image = new Image()
image.src = "radio.jpg"

image.addEventListener('load', function() {     //"load" listens for the image to load to the browser
    context.drawImage(image, 0, 0)
    input.disabled = false
})

//add text from text input to image
input.addEventListener("input", function() {
    let text = this.value                    //"this" means the thing that created the event being listened for
    context.fillStyle = "white"
    context.font = "40px Courier"
    context.drawImage(image, 0, 0)          //every time text is entered, the image is redrawn with the new text
    context.fillText(text, 30, 100)
})