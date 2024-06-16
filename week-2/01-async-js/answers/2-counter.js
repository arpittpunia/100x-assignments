let count = 1;
function counter() {
    setTimeout(()=>{
    console.log(count);
    count++;
    if (count<1000) {
        counter();
    }
    },1000)
    

}


counter();
