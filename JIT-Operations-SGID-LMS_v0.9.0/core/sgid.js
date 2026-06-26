const SGID = {

    company:
    "JIT LOGISTICS",

    version:
    "1.0",

    processMap,

    processRegistry

};
function showSGID(){

    document.getElementById(
        "lms-view"
    ).style.display = "none";

    document.getElementById(
        "process-canvas"
    ).style.display = "none";

    document.getElementById(
        "sgid-view"
    ).style.display = "block";

    document.getElementById(
        "sgid-view"
    ).innerHTML =
        renderSGIDHome();

}

function openProcess(processId){

    console.log(
        "ABRIENDO:",
        processId
    );

    document.getElementById(
        "lms-view"
    ).style.display = "none";

    document.getElementById(
        "sgid-view"
    ).style.display = "none";

    document.getElementById(
        "process-canvas"
    ).style.display = "block";

    const process =
        processRegistry[processId];

    console.log(
        "PROCESS:",
        process
    );

    if(!process){

        alert(
            "Proceso no encontrado: "
            + processId
        );

        return;

    }

    document.getElementById(
        "process-canvas"
    ).innerHTML =
        renderProcess(process);

}
