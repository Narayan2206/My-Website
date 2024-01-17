let i=0;
let text="</Narayan Pal>";
let speed = 50; // speed in millisecond

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();