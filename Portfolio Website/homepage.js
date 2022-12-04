var anim = document.querySelector('.text .click-btn');
            
            anim.addEventListener('click',function(e) {             document.querySelector('.red').classList.toggle('red-expand');
                document.querySelector('.grey').classList.toggle('grey-expand');
                
                document.querySelector('.redtwo').classList.toggle('redtwo-expand');
                document.querySelector('.greytwo').classList.toggle('greytwo-expand');
            })
           
           