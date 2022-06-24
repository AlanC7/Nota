window.addEventListener('load',()=>
{
    var loader=document.querySelector('.loading')
    var carrusel=document.querySelector('#carrusel').classList.remove("ocultarObjetos")
    var scrollbody=document.querySelector('#bodyscroll').classList.remove("ocultarScroll")
    var barraNav=document.querySelector('#barraNav').classList.remove("ocultarObjetos")
    var linea=document.querySelector('#linea').classList.remove("ocultarObjetos")
    loader.style.opacity= '0%' 
    loader.style.transition= 'all 1s' 
    
})
