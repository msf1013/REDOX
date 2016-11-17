arrEquations = [
    // Ecuacion 0
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂ &rarr; C₄H₉OH</h1>
        
                <h2 class="center small_padding">Paso 1: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion1/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CHO<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "1", "-2"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂ &rarr; C₄H₉OH</h1>
        
                <h2 class="center small_padding">Paso 2: Agregar uno de los hidrógenos a donde está el doble enlace del carbono</h2>
                <p class="center"><img src="img/pasos/reaccion1/paso1.png"></p>
                <p class="center">Ese carbono quedará con un <span style="color: #F95759">enlace simple</span> y con dos <span style="color: #F95759">hidrógenos</span>.</p>
                <p class="center">Escribe la ecuación con el <span style="color: #F95759">hidrógeno agregado</span>:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - <input id="answer" type="text" class="big_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["CH2O"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂ &rarr; C₄H₉OH</h1>
        
                <h2 class="center small_padding">Paso 3: Asignar la carga formal de los átomos</h2>
                <p class="center">Escribe la carga formal del <span style="color: #F95759">oxígeno</span>:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - CH₂ - O <input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂ &rarr; C₄H₉OH</h1>
        
                <h2 class="center small_padding">Paso 4: Agregar el otro hidrógeno al oxígeno</h2>
                <p class="center">En este caso tiene un electrón disponible y puede crear <span style="color: #F95759">otro enlace</span>.</p>
                <p class="center">Escribe cómo quedaría el oxígeno <span style="color: #F95759">enlazado</span> al hidrógeno:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - CH₂ - <input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["OH"]
        },
        {
            "num" : 4,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂ &rarr; C₄H₉OH</h1>
        
                <h2 class="center small_padding">Paso 5: Asignar el número de oxidación del producto</h2>
                <p class="center"><img src="img/pasos/reaccion1/paso5.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula:</p>
                
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    OH<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "-2", "0"]
        },
        {
            "num" : 5,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂ &rarr; C₄H₉OH</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion1/paso6.png"></p>
                <p class="center">
                    En este caso, la reacción pasa de tener -8 a -9 de carga, significa que gana electrones,
                    entonces se trata de una <span style="color: #F95759">reducción</span>.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 1
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; C₄H₈Cl₂</h1>
        
                <h2 class="center small_padding">Paso 1: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion2/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                <p class="center"><span style="color: #F95759">PISTA:</span> En el caso de los halógenos, su número de oxidación será 0 ya que son iones. Cuando están formando una molécula es cuando aplica su número de oxidación.</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    Cl₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-1", "-1", "-3", "0"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; C₄H₈Cl₂</h1>
        
                <h2 class="center small_padding">Paso 2: Agregar los dos cloros a donde están los dos carbonos que comparten el doble enlace</h2>
                <p class="center"><img src="img/pasos/reaccion2/paso1.png"></p>
                <p class="center">Ese carbono quedará con un <span style="color: #F95759">enlace simple</span>, con un hidrógeno y con un cloro.</p>
                <p class="center">Escribe la ecuación con el <span style="color: #F95759">hidrógeno agregado</span>:</p>
                
                <div class="center big_text small_padding">
                    CH₃ - <input id="answer" type="text" class="big_input big_text"> -
                    <input id="answer" type="text" class="big_input big_text"> - CH₃
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["CHCl", "CHCl"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; C₄H₈Cl₂</h1>
        
                <h2 class="center small_padding">Paso 3: Asignar los números de oxidación del producto</h2>
                <p class="center"><img src="img/pasos/reaccion2/paso3.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula:</p>
                
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CHCl<input id="answer" type="text" class="small_input big_text">
                    CHCl<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "0", "0", "-3"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + Cl₂ &rarr; C₄H₈Cl₂</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion2/paso4.png"></p>
                <p class="center">
                    La reacción pasa de tener los CH en -1 a CHCl en 0 por lo que
                    ocurre una <span style="color: #F95759">oxidación</span>, ya que gana electrones.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 2
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂O &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Paso 1: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion3/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CHO<input id="answer" type="text" class="small_input big_text">
                    H₂O<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "1", "-1"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂O &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Paso 2: Agregar el OH y/o el hidrógeno al carbono que tiene el doble enlace con el oxígeno</h2>
                <p class="center">
                    La molécula de agua se separa en <span style="color: #F95759">H-OH</span>.
                    El átomo de oxígeno se va a unir con el CH que tiene el <span style="color: #F95759">doble enlace</span> con el oxígeno.
                </p>
                <p class="center">
                    Escribe la ecuación con el <span style="color: #F95759">OH</span>
                    y/o <span style="color: #F95759">hidrógeno</span> agregado:
                </p>
                <div class="center big_text small_padding">
                    CH₃ - CH₂ - CH₂ - <input id="answer" type="text" class="big_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["COOH"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂O &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Paso 3: Asignar los números de oxidación del producto</h2>
                <p class="center"><img src="img/pasos/reaccion3/paso3.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo si el número de oxidación es diferente de 0):</p>
                
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    COOH<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "2", "0"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O + H₂O &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion3/paso4.png"></p>
                <p class="center">
                    La reacción paso de tener -7 a -5, es decir, pierde electrones.
                    Por lo tanto, es una <span style="color: #F95759">oxidación</span>.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 3
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + H₂ &rarr; C₄H₁₀</h1>
        
                <h2 class="center small_padding">Paso 1: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion4/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-1", "-1", "-3", "-2"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + H₂ &rarr; C₄H₁₀</h1>
        
                <h2 class="center small_padding">Paso 2: Agregar los dos hidrógenos a donde están los carbonos que comparten el doble enlace</h2>
                <p class="center"><img src="img/pasos/reaccion4/paso1.png"></p>                
                <p class="center">
                    Quedan esos dos carbonos con un <span style="color: #F95759">enlace simple</span>
                    y con dos <span style="color: #F95759">hidrógenos</span> enlazados a ellos.
                </p>
                <p class="center">
                    Escribe la ecuación con los <span style="color: #F95759">hidrógenos</span> agregados:
                </p>
                <div class="center big_text small_padding">
                    CH₃ - <input id="answer" type="text" class="big_input big_text"> - <input id="answer" type="text" class="big_input big_text"> - CH₃
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["CH2", "CH2"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + H₂ &rarr; C₄H₁₀</h1>
        
                <h2 class="center small_padding">Paso 3: Asignar los números de oxidación del producto</h2>
                <p class="center"><img src="img/pasos/reaccion4/paso3.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo si el número de oxidación es diferente de 0):</p>
                
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "-3"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈ + H₂ &rarr; C₄H₁₀</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion4/paso4.png"></p>
                <p class="center">
                    La reacción pasó de tener -8 a -10, es decir, gana electrones.
                    Por lo tanto, es una <span style="color: #F95759">reducción</span>.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 4
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>CH₄ + []O₂ &rarr; CO₂ + []H₂O</h1>
        
                <h2 class="center small_padding">Paso 1: Balancear la reación</h2>
                <p class="center">Completa en cada campo de texto el coeficiente de la molécula:</p>
                        
                <div class="center big_text small_padding">
                    CH₄ + <input id="answer" type="text" class="small_input big_text">O₂ &rarr; CO₂ + <input id="answer" type="text" class="small_input big_text">H₂O
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["2", "2"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>CH₄ + 2O₂ &rarr; CO₂ + 2H₂O</h1>
        
                <h2 class="center small_padding">Paso 2: Asignar los números de oxidación de cada molécula</h2>             
                <p class="center"><img src="img/pasos/reaccion5/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo):</p>
                        
                <div class="center big_text small_padding">
                    CH₄<input id="answer" type="text" class="small_input big_text">
                    2(O₂)<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-4", "0"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>CH₄ + 2O₂ &rarr; CO₂ + 2H₂O</h1>
        
                <h2 class="center small_padding">Paso 3: Agregar los oxígenos a los reactivos de la reacción</h2>
                <p class="center"><img src="img/pasos/reaccion5/paso2.png"></p>                
                <p class="center">
                    Se rompen los <span style="color: #F95759">doble enlaces</span> de los dos pares de oxígenos.
                    Dos de los oxígenos se van a ir con el <span style="color: #F95759">carbono</span>.
                    Los otros dos se van a unir con dos de los cuatro <span style="color: #F95759">hidrógenos libres</span> que quedan.
                </p>
                <p class="center">
                    Escribe como quedaría la reacción con los oxígenos ya <span style="color: #F95759">enlazados</span>:
                </p>
                <div class="center big_text small_padding">
                    <input id="answer" type="text" class="big_input big_text"> + <input id="answer" type="text" class="big_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["CO2", "H2O"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>CH₄ + 2O₂ &rarr; CO₂ + 2H₂O</h1>
        
                <h2 class="center small_padding">Paso 4: Asignar los números de oxidación del producto</h2>
                <p class="center"><img src="img/pasos/reaccion5/paso3.png"></p>
                <p class="center">Completa en cada campo de texto el <span style="color: #F95759">número de oxidación</span> de la molécula (recuerda escribir el signo si el número de oxidación es diferente de 0):</p>
                
                <div class="center big_text small_padding">
                    CO₂<input id="answer" type="text" class="small_input big_text">
                    2(H₂O)<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["2", "-2"]
        },
        {
            "num" : 4,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>CH₄ + 2O₂ &rarr; CO₂ + 2H₂O</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion5/paso4.png"></p>
                <p class="center">
                    La reacción paso de tener -4 a 0, es decir, pierde electrones.
                    Por lo tanto, es una <span style="color: #F95759">oxidación</span>.
                </p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 5
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O  + H₂O &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Ejercicio 1:</h2>             
                <p class="center"><img src="img/pasos/reaccion6/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los reactivos de la reaccion:</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CHO<input id="answer" type="text" class="small_input big_text">
                    H₂O<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "1", "-1"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O  + H₂O &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">Ejercicio 1:</h2>             
                <p class="center"><img src="img/pasos/reaccion6/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los productos de la  reaccion:</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    COOH<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "2", "0"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₄H₈O  + H₂O &rarr; C₄H₈O₂ + H₂</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion6/paso1.png"></p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],

    // Ecuacion 6
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₅H₁₀O + H₂ &rarr; C₅H₁₂O</h1>
        
                <h2 class="center small_padding">Ejercicio 2:</h2>             
                <p class="center"><img src="img/pasos/reaccion7/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los reactivos de la reaccion:</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    C=O<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "2", "-3", "0"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₅H₁₀O + H₂ &rarr; C₅H₁₂O</h1>
        
                <h2 class="center small_padding">Ejercicio 2:</h2>             
                <p class="center"><img src="img/pasos/reaccion7/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los productos de la  reaccion:</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    OH<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-2", "-2", "-1", "0", "-3"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₅H₁₀O + H₂ &rarr; C₅H₁₂O</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion7/paso1.png"></p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],

    // Ecuacion 7
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₆H₁₂ + H₂O  &rarr; C₆H₁₄O</h1>
        
                <h2 class="center small_padding">Ejercicio 3:</h2>             
                <p class="center"><img src="img/pasos/reaccion8/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los reactivos de la reaccion:</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    C=C<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    H₂O<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-3", "0", "-3", "-3", "-1"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₆H₁₂ + H₂O  &rarr; C₆H₁₄O</h1>
        
                <h2 class="center small_padding">Ejercicio 3:</h2>             
                <p class="center"><img src="img/pasos/reaccion8/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los productos de la  reaccion:</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH-C<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    OH<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-3", "-1", "-3", "-3", "0"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₆H₁₂ + H₂O  &rarr; C₆H₁₄O</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion8/paso1.png"></p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],

    // Ecuacion 8
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>HC­≡CH + H₂ &rarr; CH₂=CH₂ + H₂ &rarr; CH₃-CH₃</h1>
        
                <h2 class="center small_padding">Ejercicio 4:</h2>             
                <p class="center"><img src="img/pasos/reaccion9/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los reactivos de la reacción:</p>
                        
                <div class="center big_text small_padding">
                    CH<input id="answer" type="text" class="small_input big_text">
                    CH<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-1", "-1", "0"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>HC­≡CH + H₂ &rarr; CH₂=CH₂ + H₂ &rarr; CH₃-CH₃</h1>
        
                <h2 class="center small_padding">Ejercicio 4:</h2>             
                <p class="center"><img src="img/pasos/reaccion9/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los intermediarios de la  reacción:</p>
                        
                <div class="center big_text small_padding">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    CH₂<input id="answer" type="text" class="small_input big_text">
                    H₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-2", "-2", "0"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>HC­≡CH + H₂ &rarr; CH₂=CH₂ + H₂ &rarr; CH₃-CH₃</h1>
        
                <h2 class="center small_padding">Ejercicio 4:</h2>             
                <p class="center"><img src="img/pasos/reaccion9/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los reactivos de la  reacción:</p>
                        
                <div class="center big_text small_padding">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                    CH₃<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-3", "-3"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>HC­≡CH + H₂ &rarr; CH₂=CH₂ + H₂ &rarr; CH₃-CH₃</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion9/paso1.png"></p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],

    // Ecuacion 9
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
        
                <h2 class="center small_padding">Ejercicio 5:</h2>             
                <p class="center">Balancea la reacción:</p>
                        
                <div class="center big_text small_padding">
                    C₃H₈ + <input id="answer" type="text" class="small_input big_text">
                    O₂ &rarr; <input id="answer" type="text" class="small_input big_text">
                    CO₂ + <input id="answer" type="text" class="small_input big_text">
                    H₂O
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["5", "3", "4"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₈ + 5O₂ &rarr; 3CO₂ + 4H₂O</h1>
        
                <h2 class="center small_padding">Ejercicio 5:</h2>             
                <p class="center"><img src="img/pasos/reaccion10/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los reactivos de la reaccion:</p>
                        
                <div class="center big_text small_padding">
                    C₃H₈<input id="answer" type="text" class="small_input big_text">
                    5(O₂)<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-8", "0"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₈ + 5O₂ &rarr; 3CO₂ + 4H₂O</h1>
        
                <h2 class="center small_padding">Ejercicio 5:</h2>             
                <p class="center"><img src="img/pasos/reaccion10/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los productos de la  reaccion:</p>
                        
                <div class="center big_text small_padding">
                    3(CO₂)<input id="answer" type="text" class="small_input big_text">
                    4(H₂O)<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["6", "-4"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₃H₈ + 5O₂ &rarr; 3CO₂ + 4H₂O</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion10/paso1.png"></p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
    // Ecuacion 10
    [
        {
            "num" : 0,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
        
                <h2 class="center small_padding">Ejercicio 6:</h2>             
                <p class="center">Balancea la reacción:</p>
                        
                <div class="center big_text small_padding">
                    C₁₆H₃₄ + (<input id="answer" type="text" class="small_input big_text">
                    /<input id="answer" type="text" class="small_input big_text">
                    )O₂ &rarr; <input id="answer" type="text" class="small_input big_text">
                    CO₂ + <input id="answer" type="text" class="small_input big_text">
                    H₂O 
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["49", "2", "16", "17"]
        },
        {
            "num" : 1,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₁₆H₃₄ + (49/2)O₂ &rarr; 16CO₂ + 17H₂O</h1>
        
                <h2 class="center small_padding">Ejercicio 6:</h2>             
                <p class="center"><img src="img/pasos/reaccion11/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los reactivos de la reaccion:</p>
                        
                <div class="center big_text small_padding">
                    C₁₆H₃₄<input id="answer" type="text" class="small_input big_text">
                    (49/2)O₂<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["-34", "0"]
        },
        {
            "num" : 2,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₁₆H₃₄ + (49/2)O₂ &rarr; 16CO₂ + 17H₂O</h1>
        
                <h2 class="center small_padding">Ejercicio 6:</h2>             
                <p class="center"><img src="img/pasos/reaccion11/paso1.png"></p>
                <p class="center">Completa en cada campo de texto el número de oxidación de los productos de la  reaccion:</p>
                        
                <div class="center big_text small_padding">
                    16CO₂<input id="answer" type="text" class="small_input big_text">
                    17H₂O<input id="answer" type="text" class="small_input big_text">
                </div>
                <div>
                    <p id="feedback" class="feedback">placeholder</p>
                    <button id="regresar" class="big_left normal">Regresar</button>
                    <button id="avanzar" class="big_right normal">Avanzar</button>
                </div>
            </div>
        `,
            "answers" : ["32", "-17"]
        },
        {
            "num" : 3,
            "attempts" : 0,
            "content" : `
            <div id="slide" class="container">
                <button id="salir" class="small_right danger">Salir</button>
                <button id="recordatorio" class="small_left normal">Ver recordatorio</button>
                <h1>C₁₆H₃₄ + (49/2)O₂ &rarr; 16CO₂ + 17H₂O</h1>
        
                <h2 class="center small_padding">¡Muy bien! Has terminado con esta reacción</h2>
                <p class="center"><img src="img/pasos/reaccion11/paso1.png"></p>
                
                <div>
                    <button id="regresar" class="big_left normal">Regresar</button>
                </div>
            </div>
        `,
            "answers" : []
        }
    ],
];