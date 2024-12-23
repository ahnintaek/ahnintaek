function nighthandler(self) {
var target = document.querySelector('body');
var links = document.querySelectorAll('a');
if(self.value === 'night'){
    target.style.backgroundColor='black';
    target.style.color='white';
    self.value = 'day';

    var i=0;
    while(i<links.length){
        links[i].style.color='lightblue';
        i=i+1;
    }
} else {
    target.style.backgroundColor='white';
    target.style.color='black';
    self.value = 'night';

    var i=0;
    while(i<links.length){
        links[i].style.color='blue';
        i=i+1;
    }
}
}