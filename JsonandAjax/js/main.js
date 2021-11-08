var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var animalContainer = document.getElementById('animal-info');
var pageCounter =1;

function Push(){ 
    var ourRequest = new XMLHttpRequest();
    var TheURL ='https://learnwebcode.github.io/json-example/animals-'+ pageCounter + '.json';
    ourRequest.open('GET',TheURL) ;
        // .open 操作
        // https://developer.mozilla.org/zh-TW/docs/Web/Guide/AJAX/Getting_Started
        // .onload 操作
        // https://ithelp.ithome.com.tw/articles/10196742
    ourRequest.onload=function(){
        //console.log(ourRequest.responseText);

        //要先把json格式轉成字串    
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
     btn.style.display='none'
     btn2.style.display='block'
    
    }
}
//add html to page
function  renderHTML(data){
    var htmlString=""; 
    for(let i=0;i < data.length;i++){
        htmlString += "<p class='space'>" + data[i].name +" is a " + data[i].species + " that likes to eat ";
        
        for(let j=0; j<data[i].foods.likes.length; j++){
          if(j == 0){
            htmlString += data[i].foods.likes[j];
          } 
          else{
            htmlString += " and " + data[i].foods.likes[j];
          } 
            
        }

        htmlString += ' and dislikes ';

        for(let j=0; j<data[i].foods.dislikes.length; j++){
            if(j == 0){
              htmlString += data[i].foods.dislikes[j];
            } 
            else{
              htmlString += " and " + data[i].foods.dislikes[j];
            } 
              
        }
        htmlString+='。</p>';
    }
    //beforeend 在 element 裡面，最後一個子元素之後
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}
