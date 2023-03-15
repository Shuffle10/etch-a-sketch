updateCanvas()

function drawPixels(){
    document.querySelectorAll(".child").forEach((e)=>{
        e.addEventListener("mouseover", ()=>{
            e.style.backgroundColor=`${updateColor()}`
        })
    })
}
    



function updateCanvas(){
    let canvas = document.getElementsByClassName("canvas")[0]
    let pixelSize = document.getElementById("pixel-size").value;
    document.getElementById("size-display").innerText = `${pixelSize} X ${pixelSize}`;
    canvas.innerHTML = "";
    canvas.style.cssText = `grid-template-columns: repeat(${pixelSize}, ${400/pixelSize}px)`;

    for(let i=0; i<(Number(pixelSize)*Number(pixelSize)); i++){
        let child = document.createElement("div");
        child.style.cssText = `height: ${400/pixelSize}px; width: ${400/pixelSize}px;`;
        child.classList.add("child")
        canvas.appendChild(child)
    }

    drawPixels();
}

function updateColor(){
    let penColor = document.getElementById("pen-color").value;
    return penColor
}


