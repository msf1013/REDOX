// Clear document's body
function clearBody() {
    document.body.innerHTML = "";
}

// Element generator
function Element(selector, markup) {
    this.selector = selector;
    this.markup - markup;
}

// Animation generator
function AnimationStep (time, arrEffectsIn, arrSelectors) {
    this.time = time;
    this.arrEffectsIn = arrEffectsIn;
    this.arrSelectors = arrSelectors;
}

var arrSlides = [];

function runAnimation (arrEffectsIn, arrEffectsOut, arrSelectors, time, animationType) {
    setTimeout(function() {
        for (var j = 0; j < arrSelectors.length; j ++) {
            $(arrSelectors[j]).css("opacity", "1");
            if (animationType == "in") {
                $(arrSelectors[j]).addClass(arrEffectsIn[j]);
            } else if (animationType == "out") {
                $(arrSelectors[j]).removeClass(arrEffectsIn[j]);
                $(arrSelectors[j]).addClass(arrEffectsOut[j]);
            }
        }
        console.log(time);
    }, time);
}

// Slide generator
function Slide(arrElements, arrAnimationSteps, duration) {
    this.arrElements = arrElements;
    this.arrAnimationSteps = arrAnimationSteps;
    this.duration = duration;

    // Place Slide's elements in document's body
    this.initialize = function (isAnimated) {
        for (var i = 0; i < arrElements.length; i ++) {
            // Create element
            var dummyDiv = document.createElement("div");
            dummyDiv.innerHTML = arrElements[i].markup;
            var element = dummyDiv.firstElementChild;
            if (isAnimated == true) {
                element.style.opacity = "0";
            }
            // Append it to body
            document.body.appendChild(element);
        }
    }

    // Run Slide's animations in
    this.run = function (animationType) {
        var totalTime = 0;
        for (var i = 0; i < arrAnimationSteps.length; i ++){
            totalTime = parseInt(totalTime,10) + parseInt(arrAnimationSteps[i].time);
            var arrEffectsIn = arrAnimationSteps[i].arrEffectsIn;
            var arrEffectsOut = arrAnimationSteps[i].arrEffectsOut;
            var arrSelectors = arrAnimationSteps[i].arrSelectors;
            // Start running effects in current animation step
            runAnimation(arrEffectsIn, arrEffectsOut, arrSelectors, totalTime, animationType);
        }
        if (animationType == "in") {
            setTimeout(function() {
                arrSlides[currentSlideIndex].addButtons();
            }, duration + 1800);
        }
    }

    // Add Slide's transition buttons
    this.addButtons = function () {
        var divButtons = document.createElement("div");
        // Add "Regresar" button
        if (currentSlideIndex > 0) {
            var auxDiv = document.createElement("div");
            auxDiv.innerHTML = "<button id='btnRegresar' style='float: left; margin-left: 35%'>Regresar"+"_"+currentSlideIndex+"</button>";
            var boton = auxDiv.firstElementChild;
            divButtons.appendChild(boton);
        }
        // Add "Avanzar" button
        if (currentSlideIndex < (total - 1)) {
            var auxDiv = document.createElement("div");
            auxDiv.innerHTML = "<button id='btnAvanzar' style='float: right; margin-right: 35%'>Avanzar"+"_"+currentSlideIndex+"</button>";
            var boton = auxDiv.firstElementChild;
            divButtons.appendChild(boton);
        }
        document.body.appendChild(divButtons);
        // Add event listeners
        // Add "Regresar" button
        if (currentSlideIndex > 0) {
            document.getElementById("btnRegresar").addEventListener("click", function() {
                clearBody();
                currentSlideIndex = currentSlideIndex - 1;
                arrSlides[currentSlideIndex].initialize(false);
                arrSlides[currentSlideIndex].addButtons();
            });
        }
        // Add "Avanzar" button
        if (currentSlideIndex < (total - 1)) {
            document.getElementById("btnAvanzar").addEventListener("click", function() {
                if (currentSlideIndex == maxSlideIndex) {
                    arrSlides[currentSlideIndex].run("out");
                    setTimeout(function () {
                        clearBody();
                        currentSlideIndex = currentSlideIndex + 1;
                        maxSlideIndex = currentSlideIndex;
                        arrSlides[currentSlideIndex].initialize(true);
                        arrSlides[currentSlideIndex].run("in");
                    }, duration + 1500);
                } else {
                    clearBody();
                    currentSlideIndex = currentSlideIndex + 1;
                    arrSlides[currentSlideIndex].initialize(false);
                    arrSlides[currentSlideIndex].addButtons();
                }
            });
        }
    }

}

var total = arrRawData.length;
var maxSlideIndex = 0;
var currentSlideIndex = 0;

// Create Slide object array
for (var i = 0; i < total; i ++) {
    arrSlides.push(new Slide(arrRawData[i].arrElements, arrRawData[i].arrAnimationSteps, parseInt(arrRawData[i].duration, 10)));
}

console.log(arrSlides);

//clearBody();

// Load first slide
function start() {
    arrSlides[0].initialize(true);
    arrSlides[0].run("in");
}