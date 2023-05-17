const imagenes=document.querySelectorAll(".slide-in")

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

function checkSlide(e){
    imagenes.forEach(imagen=>{
        const yScroll=(window.scrollY+window.innerHeight)-imagen.height/2;
        console.log(yScroll)
        const finImagen=imagen.offsetTop + imagen.height;
        const estaLaMitad=yScroll > imagen.offsetTop;
        const noSePaso= window.scrollY < finImagen;
        estaLaMitad && noSePaso ? imagen.classList.add("active") : imagen.classList.remove("active")
    })
}

window.addEventListener("scroll", debounce(checkSlide, 500))