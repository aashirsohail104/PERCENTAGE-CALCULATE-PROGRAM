// If Statement

const ptr = prompt("Tell me Your Percentage")

if (ptr<= 50) {
    document.write("Your are Pass. Phr bhi prh le bhai")
} else if(ptr<= 60){
    document.write("Grade B")
}else if(ptr<= 70){
    document.write("Grade A")
}else if(ptr<= 80){
    document.write("Grade A-1")
}else if(ptr<= 100){
    document.write("Grade A-1+")
}else{
    document.write("Please Input the correct data")
}