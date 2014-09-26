angular.module("website",["ngAnimate","ngTouch"]).controller("MainCtrl",function(e){e.slides=[{image:"images/taco2.png",description:"The best taco of your entire life.",title:"Taco Tuesday",ingredient1:"1/2 C Onion",ingredient2:"1 C Cheese",ingredient3:"1/4 C Black Beans",ingredient4:"1/2 Avocado",ingredient5:"1 Pound Chicken",directions1:"1. Cook the onion and chicken. While warming beans. ",directions2:"2. Peel the avocado.",directions3:"3. Make taco and add avocado to the top."},{image:"images/blackham.png",description:"Thick and juice sandwhich.",title:"Blackham Sandwhich",ingredient1:"1 Tbs Ranch",ingredient2:"6 Slices Blackham",ingredient3:"Tomatos",ingredient4:"Lettuce",ingredient5:"Bacon",directions1:"1. Slice tomatoes and wash lettuce. ",directions2:"2. Cook the bacon",directions3:"3. Add all ingridients to wheat bread."},{image:"images/chickpea.png",description:"Chicken, peas and salad all in one.",title:"Chickpea Salad",ingredient1:"1 Pound Chicken",ingredient2:"1/2 Bag Peas",ingredient3:"1 Head of lettuce",directions1:"1. Cook chicken.",directions2:"2. Wash lettuce and peas.",directions3:"3. Add chicken to peas and lettuce."},{image:"images/ham.png",description:" A delectable ham and cheese.",title:"Ham Sandwhich",ingredient1:"6 slices ham",ingredient2:"2 slices cheese",ingredient3:"Tomatos",ingredient4:"Lettuce",directions1:"1. Slice tomatoes and wash lettuce. ",directions2:"2. Cook the bacon",directions3:"3. Add all ingridients to wheat bread."},{image:"images/hotdog.png",description:"What would life be without this hotdog?.",title:"Deluxe Hotdog",ingredient1:"Polish dogs",ingredient2:"1 Tbs Ketchup",ingredient3:"1 Medium Diced Tomato",ingredient4:"1 Medium Avocado",ingredient5:"1 Tbs Mayo",directions1:"1. Grill the polish dog. ",directions2:"2. Dice the tomato and avocado.",directions3:"3. Add tomato, avocado, mayo and ketchup to the top of the hotdog."},{image:"images/shrimppasta.png",description:"Mmmm shrimp and pasta on one plate!.",title:"Shrimp Pasta",ingredient1:"2 Pounds Shrimp",ingredient2:"1 Tbs Pepper",ingredient3:"1 Medium Tomato",ingredient4:"1 Medium Onion",ingredient5:"1/2 Bag Pasta",directions1:"1. Cook the shrimp and the pasta. ",directions2:"2. Dice the tomato and onion.",directions3:"3. Compbine the pasta and shrimp along with the tomato and onion."}],e.direction="left",e.currentIndex=0,e.setCurrentSlideIndex=function(i){e.direction=i>e.currentIndex?"left":"right",e.currentIndex=i},e.isCurrentSlideIndex=function(i){return e.currentIndex===i},e.prevSlide=function(){e.direction="left",e.currentIndex=e.currentIndex<e.slides.length-1?++e.currentIndex:0},e.nextSlide=function(){e.direction="right",e.currentIndex=e.currentIndex>0?--e.currentIndex:e.slides.length-1}}).animation(".slide-animation",function(){return{beforeAddClass:function(e,i,n){var t=e.scope();if("ng-hide"==i){var o=e.parent().width();"right"!==t.direction&&(o=-o),TweenMax.to(e,0,{left:o,onComplete:n})}else n()},removeClass:function(e,i,n){var t=e.scope();if("ng-hide"==i){e.removeClass("ng-hide");var o=e.parent().width();"right"===t.direction&&(o=-o),TweenMax.fromTo(e,0,{left:o},{left:0,onComplete:n})}else n()}}});