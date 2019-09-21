document.addEventListener('DOMContentLoaded', function () {
    let actionBar = document.getElementsByClassName('action-bar')[0];
    let containerBar = actionBar.firstElementChild;
    var actionOrigin = actionBar.offsetTop;
    let wrapper = document.createElement('div');

    window.onscroll = function () {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
        if (actionBar.offsetTop  <= currentScroll) {
            
            actionBar.replaceChild(wrapper, containerBar);
            wrapper.appendChild(containerBar);
            wrapper.classList.add('active');
        }else if(currentScroll - 75 <= actionOrigin){
            wrapper.classList.remove('active');
            // actionBar.replaceChild(containerBar, wrapper);
            actionBar.appendChild(containerBar);
            wrapper.remove();
        }
     
        
    }
})
