function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

var debounceFn = throttle(function () {
    var introText1 = document.querySelector('.feature__text-1');
    var introText2 = document.querySelector('.feature__text-2');
    var introText3 = document.querySelector('.feature__text-3');
    var introPosition1 = introText1.getBoundingClientRect().top;
    var introPosition2 = introText2.getBoundingClientRect().top;
    var introPosition3 = introText3.getBoundingClientRect().top; // 1018 (= window.innerHeight)
    var screenPosition = window.innerHeight / 1.5; // document height  682/ 1.6 = 426)  -->responsive  
    if (introPosition1 < screenPosition) {
        introText1.classList.add('home-toggle');
    } else {
        introText1.classList.remove('home-toggle');
    }
    if (introPosition2 < screenPosition) {
        introText2.classList.add('home-toggle');
    } else {
        introText2.classList.remove('home-toggle');
    }
    if (introPosition3 < screenPosition) {
        introText3.classList.add('home-toggle');
    } else {
        introText3.classList.remove('home-toggle');
    }
    console.log(debounceFn);
}, 200);

window.addEventListener('scroll', debounceFn);


function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top; //distance between window (top) and element
    var startPosition = window.pageYOffset; //document already scrolled 
    var distance = targetPosition - startPosition; // scroll distance 
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime; // startpoint
        var timeElapsed = currentTime - startTime; // (for example currenTime = 15:01 and startTime = 15:00)
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation); // function gets executed if time (elapsed) < duration
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var activateButton = document.querySelectorAll('.hero a');
for (i = 0; i < activateButton.length; i++) { //click event for all a Elements
    activateButton[i].addEventListener('click', function (event) {
        smoothScroll(event.currentTarget.getAttribute('href'), 1000); //Position, Duration
    })
}