function moveToTutorial(offset) {
    var equations = document.getElementById("equations");
    var selectedIndex = equations.selectedIndex;
    window.location.href = "paso_uno.html?equation=" + (selectedIndex + offset);
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

