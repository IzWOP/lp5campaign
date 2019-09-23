document.addEventListener('DOMContentLoaded', function () {
    let actionBar = document.getElementsByClassName('action-bar')[0];
    let actionFloat = actionBar.firstElementChild;
    var actionOrigin = actionBar.offsetTop;
    // let wrapper = document.createElement('div');

    window.onscroll = function () {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
        if (actionBar.offsetTop  <= currentScroll) {
            
            // actionBar.replaceChild(wrapper, actionFloat);
            // wrapper.appendChild(actionFloat);
            actionFloat.classList.add('active');
        }else if(currentScroll  <= actionOrigin){
            actionFloat.classList.remove('active');
            // // actionBar.replaceChild(actionFloat, wrapper);
            // actionBar.appendChild(actionFloat);
            // wrapper.remove();
        }
     
        
    }
})
