let selectedStep = null;

function speakStep(text, element){

    window.speechSynthesis.cancel();

    document
    .querySelectorAll(".step-item")
    .forEach(item => {

        item.classList.remove("step-active");

    });

    element.classList.add("step-active");

    setTimeout(()=>{

        element.classList.remove("step-active");

    },2000);

    const speech =
    new SpeechSynthesisUtterance(text);

    speech.lang = "es-CO";

    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);

}

function startActivity(){

    window.speechSynthesis.cancel();

    const activity =
    activities[currentActivity];

    const steps =
    document.querySelectorAll(".step-item");

    function speak(text, callback){

        const speech =
        new SpeechSynthesisUtterance(text);

        speech.lang = "es-CO";
        speech.rate = 0.9;

        speech.onend = function(){

            if(callback){
                callback();
            }

        };

        window.speechSynthesis.speak(speech);

    }

    function runStep(index){

        if(index >= activity.steps.length){
            return;
        }

        steps.forEach(item=>{

            item.classList.remove(
                "step-active"
            );

        });

        steps[index].classList.add(
            "step-active"
        );

        const step =
        activity.steps[index];

        speak(

    "Paso " +
    (index + 1) +
    ". " +

    step.text +

    ". Consecuencias operacionales. " +

    step.consequence,

    function(){

        steps[index].classList.remove(
            "step-active"
        );

        runStep(index + 1);

    }

);

    }

    speak(

        "Actividad " +
        activity.number +
        ". " +
        activity.name,

        function(){

            speak(

                "Descripción. " +
                activity.description,

                function(){

                    speak(

                        "Responsable. " +
                        activity.responsible,

                        function(){

                            speak(

                                "Control. " +
                                activity.control,

                                function(){

                                    runStep(0);

                                }

                            );

                        }

                    );

                }

            );

        }

    );

}

function nextActivity(){

    if(currentActivity < activities.length - 1){

        loadActivity(currentActivity + 1);

        renderActivitiesGrid();

    }

}

function previousActivity(){

    if(currentActivity > 0){

        loadActivity(currentActivity - 1);

        renderActivitiesGrid();

    }

}

function openVideo(){

    window.open(
        activities[currentActivity].video,
        "_blank"
    );

}

function openImages(){

    window.open(
        activities[currentActivity].images,
        "_blank"
    );

}

function openPDF(){

    window.open(
        activities[currentActivity].pdf,
        "_blank"
    );

}

function openAudio(){

    window.open(
        activities[currentActivity].audio,
        "_blank"
    );

}

function openLink(){

    window.open(
        activities[currentActivity].url,
        "_blank"
    );

}

function openEvidence(){

    window.open(
        activities[currentActivity].evidence,
        "_blank"
    );

}

function openPOD(){

    window.open(
        activities[currentActivity].pod,
        "_blank"
    );

}

function openChecklist(){

    window.open(
        activities[currentActivity].checklist,
        "_blank"
    );

}
/****************************************
PRUEBA CANVAS SGID
****************************************/

/*
document.getElementById(
    "process-canvas"
).innerHTML =

renderProcess(
    processOperacion3PL
);
*/

document
.getElementById("btn-sgid")

.addEventListener(
    "click",
    function(){

    document.getElementById("sgid-view").innerHTML =
        renderSGIDHome();

    document.getElementById("sgid-view").style.display =
        "block";

    document.getElementById("process-canvas").style.display =
        "none";

    document.getElementById("lms-view").style.display =
        "none";

}
);

document.addEventListener(
    "DOMContentLoaded",
    function(){

        document.getElementById("sgid-view").innerHTML =
            renderSGIDHome();

        document.getElementById("sgid-view").style.display =
            "block";

        document.getElementById("process-canvas").style.display =
            "none";

        document.getElementById("lms-view").style.display =
            "none";

    }
);

function showLMS(processId){

    document.getElementById(
        "process-canvas"
    ).style.display = "none";

    document.getElementById(
        "lms-view"
    ).style.display = "block";

    document.getElementById(
        "lms-op3pl-view"
    ).style.display = "block";

}
function showGeneral(){

    document.getElementById(
        "lms-op3pl-view"
    ).style.display = "none";

    document.getElementById(
        "process-canvas"
    ).style.display = "block";

}