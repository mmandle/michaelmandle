function makeX (x)  {
    x.classList.toggle("change");
    alert("This function is under construction!");
};


//NEXT AND PREV BUTTON FOR ARTICLES SECTION
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.article__item');
    document.getElementById('article__slide').appendChild(lists[0]);
  }
  document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.article__item');
    document.getElementById('article__slide').prepend(lists[lists.length - 1]);
  }
  
  //SEE MORE BUTTON FOR ARTICLES SECTION
 
