//your code here
let text = document.getElementById("evaluatedText");
let count = document.getElementById("wordCount");
let cnt=0;
evaluatedText.addEventListener('keyup', (e) => {

    if(e.key == " "){
      cnt=cnt+1;
      wordCount.innerHTML = cnt;
      console.log(cnt);
    }
    else{
        
    }
})
