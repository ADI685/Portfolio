console.log("hello")
document.querySelector('.cross').style.display= "none";
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebargo");
    if(document.querySelector(".sidebar").classList.contains("sidebargo")){
        setTimeout(()=>{

            document.querySelector(".ham").style.display='inline';
        },300);
        // document.querySelector(".ham").style.display='inline';
        document.querySelector(".cross").style.display='none';

    }
    else{ document.querySelector(".ham").style.display='none';
    setTimeout(()=>{

        document.querySelector(".cross").style.display='inline';
    },300);


    }
})