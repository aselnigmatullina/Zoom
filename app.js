(() => {
  class vanillaZoom {
      constructor(element){
        this.container = element;
        this.firstSmallImage = this.container.querySelector('.small-preview');
        this.zoomedImage = this.container.querySelector('.zoomed-image');
        this.init();
        this.changePhoto();
        this.mouseEnter();
        this.mouseLeave();
        this.mouseMove();
      }
      //отображение фотографии, которая будет первой-главной-зумовской
      init(){
          if(!this.container){
              console.error('Нет такого элемента');
          }
          if(!this.zoomedImage){
              console.error('И такого тоже нет!');
          }
          if(!this.firstSmallImage){
              console.error('Нет такого!');
          } else {
              this.zoomedImage.style.backgroundImage = `url( ${this.firstSmallImage.src})`;
          }
      }
      // меняю местами картинки
      changePhoto(){
          this.container.addEventListener('click', e => {
              const elem = e.target;
              if(elem.classList.contains('small-preview')){
                 this.zoomedImage.style.backgroundImage = `url(${elem.src})`;
              }
          })
      }
      //обработчики мыши
      mouseEnter(){
           this.zoomedImage.addEventListener('mouseenter', () => {
           this.zoomedImage.style.backgroundSize = '250%';
          })
      }
      mouseMove(){
          this.zoomedImage.addEventListener('mousemove', (e) => {
              let dimension = this.zoomedImage.getBoundingClientRect();
              let x = e.clientX - dimension.left;
              let y = e.clientY - dimension.top;
              let xPercent = Math.round(100 / (dimension.width / x));
              let yPercent = Math.round(100 / (dimension.height / y));
              this.zoomedImage.style.backgroundPosition = xPercent + '%' + yPercent + '%';

          })
      }
      mouseLeave(){
        this.zoomedImage.addEventListener('mouseleave', () => {
        this.zoomedImage.style.backgroundSize = 'cover';
        this.zoomedImage.style.backgroundPosition = 'center';
        })
   }
}
  let zoom = document.querySelectorAll('.vanilla-zoom');
  zoom.forEach( item => new vanillaZoom(item))
})();