
    let infoShow = document.querySelector(`.levelInd`);
    let button = document.querySelector('.startButton');
    let info = document.querySelector('#lvl');
    let score = document.querySelector('.scoreInd');
    let startingBtn = document.querySelector('.startingBtn')
    let block = document.querySelector('.block')
    let blockGroup = document.querySelector('.blockGroup')
    let blockEasy = document.querySelector('.blockEasy')
    let blockMedium = document.querySelector('.blockMedium')
    let blockHard = document.querySelector('.blockHard')
    let blockers = document.querySelectorAll('.block')
    let rgbGuesser = document.querySelector('.rgbGuesser')
    let block1 = document.querySelector('.block1') 
    let block2 = document.querySelector('.block2')
    let block3 = document.querySelector('.block3')
    let block4 = document.querySelector('.block4')
    let block5 = document.querySelector('.block5')
    let block6 = document.querySelector('.block6')
    let block7 = document.querySelector('.block7')
    let block8 = document.querySelector('.block8')
    let block9 = document.querySelector('.block9')
    let end = document.querySelector(`.end`)

    
    info.addEventListener('change', function(){
        if (info.value != '0') {
            infoShow.innerHTML = (info[info.selectedIndex].text)
        } else {
            infoShow.innerHTML = '';
            blockEasy.style.visibility='hidden'
            blockMedium.style.visibility='hidden'
            blockHard.style.visibility='hidden'
        }
        
    })
    
   


    startingBtn.addEventListener('click', function () {
       
        
        end.style.visibility='hidden'
      
    let colors = []
    function colorGenerator() {
        
            let r = Math.floor(Math.random()*255)
            let g = Math.floor(Math.random()*255)
            let b = Math.floor(Math.random()*255)
            colors.push(`rgb(${r}, ${g}, ${b})`)
            return `rgb(${r}, ${g}, ${b})`
        
    }
    
    




let newarrr = []

    newarrr.push(block1 = colors[0])
    newarrr.push(block2 = colors[1])
    newarrr.push(block3 = colors[2])
    newarrr.push(block4 = colors[3])
    newarrr.push(block5 = colors[4])
    newarrr.push(block6 = colors[5])
    newarrr.push(block7 = colors[6])
    newarrr.push(block8 = colors[7])
    newarrr.push(block9 = colors[8])
    
    
   

        
let count = 0
score.innerHTML = count


        if (info.value == 3) {
            blockEasy.style.visibility='visible'
            blockMedium.style.visibility='hidden'
            blockHard.style.visibility='hidden'
            
            blockers.forEach(function(el) {
                el.style.backgroundColor=`${colorGenerator()}`           
                el.style.opacity='1'
            });
            
            
            rgbGuesser.style.visibility='visible'
            rgbGuesser.innerHTML = `${colors[Math.floor(Math.random()*info.value)]}`
            
            for (let i = 0; i < blockers.length; i++) {
                
                   
                blockers[i].addEventListener('click', function() {
                    
                    if (blockers[i].style.backgroundColor == rgbGuesser.textContent) {
                        
                        
                        swal({ icon: "success", title: "You Guess It Right"});
                        count++
                        score.innerHTML = count
                        blockEasy.style.visibility='hidden'
                        blockMedium.style.visibility='hidden'
                        blockHard.style.visibility='hidden'
                        end.innerHTML = `You Passed With ${count}`
                        end.style.visibility='visible'
                    } else {
                        swal ( "Oops" ,  "Wrong Guess" ,  "error" )
                        blockers[i].style.opacity='0.2'
                        count--
                        score.innerHTML = count
                    }
                })
                
            }
            
            
        } else if (info.value == 6){
            blockEasy.style.visibility='visible'
            blockMedium.style.visibility='visible'
            blockHard.style.visibility='hidden'
            blockers.forEach(function(el) {
                el.style.backgroundColor=`${colorGenerator()}`
                el.style.opacity='1'
            });
            rgbGuesser.style.visibility='visible'
            rgbGuesser.innerHTML = `${colors[Math.floor(Math.random()*info.value)]}`
            for (let i = 0; i < blockers.length; i++) {
                
                blockers[i].addEventListener('click', function() {
                    
                    if (blockers[i].style.backgroundColor == rgbGuesser.textContent) {
                        swal({ icon: "success", title: "You Guess It Right"});
                        count++
                        score.innerHTML = count
                        blockEasy.style.visibility='hidden'
                        blockMedium.style.visibility='hidden'
                        blockHard.style.visibility='hidden'
                        end.innerHTML = `You Passed With ${count}`
                        end.style.visibility='visible'

                    } else {
                        swal ( "Oops" ,  "Wrong Guess" ,  "error" )
                        blockers[i].style.opacity='0.2'
                        count--
                        score.innerHTML = count
                    }
                })
                
            }
        } else if (info.value == 9){
            blockEasy.style.visibility='visible'
            blockMedium.style.visibility='visible'
            blockHard.style.visibility='visible'
            blockers.forEach(function(el) {
                el.style.backgroundColor=`${colorGenerator()}`
                el.style.opacity='1'
            });
            rgbGuesser.style.visibility='visible'
            rgbGuesser.innerHTML = `${colors[Math.floor(Math.random()*info.value)]}`
            for (let i = 0; i < blockers.length; i++) {
                
                blockers[i].addEventListener('click', function() {
                    
                    if (blockers[i].style.backgroundColor == rgbGuesser.textContent) {
                        swal({ icon: "success", title: "You Guess It Right"});
                        count++
                        score.innerHTML = count
                        blockEasy.style.visibility='hidden'
                        blockMedium.style.visibility='hidden'
                        blockHard.style.visibility='hidden'
                        end.innerHTML = `You Passed With ${count}`
                        end.style.visibility='visible'
                    } else {
                        swal ( "Oops" ,  "Wrong Guess" ,  "error" )
                        blockers[i].style.opacity='0.2'
                        count--
                        score.innerHTML = count
                    }
                })
                
            }
        }   

        
    })
    


 


