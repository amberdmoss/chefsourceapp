angular.module("website",["ngAnimate","ngTouch"]).controller("MainCtrl",function(e){e.slides=[{image:"images/applespinach.png",description:"Your health drink is here.",title:"Apple Spinach Smoothie",ingredient1:"2 C spinach",ingredient2:"3 Apples",ingredient3:"1 Orange",ingredient4:"1 C Water",directions1:"1. Peel orange. Cut and prepare Apples and Orange. ",directions2:"2. Add all ingredients to the blender.",directions3:"3. Blend until smoothie consistency"},{image:"images/lemonade.png",description:"Best drink for a nice hot day.",title:"Lemonade",ingredient1:"2 C Sugar",ingredient2:"5 Lemons",ingredient3:"10 C Cold water",directions1:"1. Juice the lemons",directions2:"2. Add sugar and water"},{image:"images/mintmelon.png",description:"One of the most refreshing drinks.",title:"Mint Melon Smoothie",ingredient1:"1/4 C Mint",ingredient2:"2 Melons",ingredient3:"1 C Sugar",ingredient4:"12 C Water",directions1:"1. Prepare the melons for the blender. ",directions2:"2. Add the sugar, water and mint to the blender.",directions3:"3. Blend until its a smooth liquid."},{image:"images/orangejuice.png",description:" lobortis orci ac, varius magna. Duis posuere elit non turpis dignissim pharetra. Vivamus eget turpis ac.",title:"Orange Juice",ingredient1:"2 C Sugar",ingredient2:"5 Oranges",ingredient3:"10 C Cold water",directions1:"1. Juice the oranges",directions2:"2. Add sugar and water"},{image:"images/starwberriekiwi.png",description:"A fun mixture of fruit in a smoothie.",title:"Strawberry Kiwi Smoothie",ingredient1:"1 container of strawberries",ingredient2:"4 Kiwis",ingredient3:"6 C cold water",ingredient4:"3 C Sugar",directions1:"1. Peel kiwis and cut the tops off of the strawberries.",directions2:"2. Combine all of the ingredients in the blender.",directions3:"3. Blend until its a smooth mixture."}],e.direction="left",e.currentIndex=2,e.setCurrentSlideIndex=function(i){e.direction=i>e.currentIndex?"left":"right",e.currentIndex=i},e.isCurrentSlideIndex=function(i){return e.currentIndex===i},e.prevSlide=function(){e.direction="left",e.currentIndex=e.currentIndex<e.slides.length-1?++e.currentIndex:0},e.nextSlide=function(){e.direction="right",e.currentIndex=e.currentIndex>0?--e.currentIndex:e.slides.length-1}}).animation(".slide-animation",function(){return{beforeAddClass:function(e,i,n){var t=e.scope();if("ng-hide"==i){var r=e.parent().width();"right"!==t.direction&&(r=-r),TweenMax.to(e,0,{left:r,onComplete:n})}else n()},removeClass:function(e,i,n){var t=e.scope();if("ng-hide"==i){e.removeClass("ng-hide");var r=e.parent().width();"right"===t.direction&&(r=-r),TweenMax.fromTo(e,0,{left:r},{left:0,onComplete:n})}else n()}}});