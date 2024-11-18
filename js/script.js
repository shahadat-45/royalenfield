    // Select the navbar
    const navbar = document.getElementById('navbar');
    const carousel = document.querySelectorAll('.carousel');
    const indicators = document.querySelectorAll('.carousel-indicators');
    const category = document.querySelectorAll('.category');
    const headding = document.querySelector('.headding');
    let lastScrollTop = 0;

    // const targetElement = document.getElementById('navbar'); 
    
    function getElementOffset(element) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.pageYOffset;  
    }
    function OffsetFromBottom(element) {
        const rect = element.getBoundingClientRect();
        return rect.bottom + window.pageYOffset;
    }
    const targetPosition = getElementOffset(category[0]);
    const targetPosition2 = getElementOffset(category[1]);
    const targetPosition3 = getElementOffset(category[2]);
    const targetPosition4 = OffsetFromBottom(category[2]);
    const headdingPosition = getElementOffset(headding);    

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > headdingPosition) {
            navbar.classList.add('position-absolute'); 
        } else {
            navbar.classList.remove('position-absolute'); 
        }
        if (scrollTop > (targetPosition + 200) && scrollTop < (targetPosition2 + 200 )) {
            carousel.forEach((element , index) => {
                if (index === 1) {
                    element.classList.add('position-static');
                        indicators.forEach((item , i)=>{
                            if (i === 1) { 
                                item.classList.add('active');
                            }
                        })                    
                }
                
            });            
        } 
        else if (scrollTop > (targetPosition2 + 200) && scrollTop < (targetPosition3 + 200 )) {
            carousel.forEach((element , index) => {
                if (index === 2) {
                    element.classList.add('position-static');
                        indicators.forEach((item , i)=>{
                            if (i === 2) { 
                                item.classList.add('active');
                            }
                        })                    
                }
                
            });            
        }
        else if (scrollTop > (targetPosition3 + 200) && scrollTop < (targetPosition4 + 200) ) {
            carousel.forEach((element , index) => {
                if (index === 3) {
                    element.classList.add('position-static');
                        indicators.forEach((item , i)=>{
                            if (i === 3) { 
                                item.classList.add('active');
                            }
                        })                    
                }
                
            });            
        }

        else{
            carousel.forEach((element , index) => {                
                if (element.classList.contains('position-static')) {
                    element.classList.remove('position-static');
                }
                indicators.forEach((item , i)=>{
                    if (item.classList.contains('active')) { 
                        item.classList.remove('active');
                    }
                }) 

            });

        }
    });