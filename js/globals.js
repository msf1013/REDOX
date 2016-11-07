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

var modal = `
    <div class="modal" id="modal" style="display:none;">
        <p class="small_font">
            El <span style="color: #F95759">estado de oxidación</span> para cada átomo de carbono en una molécula orgánica
            se obtiene agregando cada uno de los siguientes valores para cada uno de sus cuatros enlaces:
        </p>

        <table class="small_font" style="text-align: center; margin-right: auto; margin-left: auto">
            <tr>
                <th>Para cada enlace con:</th>
                <th>Número de oxidación</th>
            </tr>
            <tr>
                <td>H o metales</td>
                <td>-1</td>
            </tr>
            <tr>
                <td>C</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Hetereoátomos (N, X, O, S)</td>
                <td>+1</td>
            </tr>
        </table>

        <ul>
            <li class="small_font"><span style="color: #F95759">Oxidación</span> en una molécula orgánica ocurre cuando son removidos hidrógenos o se añaden oxígenos o heteroátomos.</li>
            <li class="small_font"><span style="color: #F95759">Reducción</span> (ganancia de electrones) en una molécula ocurre al añadir hidrógenos o remover oxígenos.</li>
            <li class="small_font">La adición de otros heteroátomos sobre una molécula es también <span style="color: #F95759">oxidación</span> (a menos que el hidrógeno también se agregue) y remover heteroátomos es <span style="color: #F95759">reducción</span> (sin remover hidrógenos).</li>
        </ul>
    </div>
`;

