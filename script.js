var li= document.querySelector('nav li ')
var MenuBtn =document.querySelector('.Menu-Btn i')



function MenuShow() {

  
    if (li.classList.contains('open')) {
        li.classList.remove('open')
        document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
     
       
        
       
    }else{
        li.classList.add('open')
        document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
       
      
       
    }
}