let currentActivity = 0;

/* LOAD ACTIVITY */

function loadActivity(index) {

    document.getElementById(
        "steps-container"
    ).innerHTML = "";

    currentActivity = index;

    const activity =
    activities[index];

    /* LEFT */

    document.getElementById(
        "activity-number"
    ).innerText =
    activity.number;

    document.getElementById(
        "activity-name"
    ).innerText =
    activity.name;

    document.getElementById(
        "activity-description"
    ).innerText =
    activity.description;

    document.getElementById(
        "activity-responsible"
    ).innerText =
    activity.responsible;
    document.getElementById(
    "responsibility-box"
).innerHTML =

`
    <div class="responsible-name">

        ${activity.responsible}

    </div>

    <div class="responsible-description">

        ${activity.responsibilityDescription}

    </div>

`;

    document.getElementById(
        "activity-control"
    ).innerText =
    activity.control;
    const riskLevel =
document.getElementById(
    "risk-level"
);

riskLevel.className =
"risk-level";

if(activity.riskLevel === "ALTO"){

    riskLevel.classList.add(
        "risk-high"
    );

    riskLevel.innerHTML =
    "🔴 RIESGO ALTO";

}

else if(
    activity.riskLevel === "MEDIO"
){

    riskLevel.classList.add(
        "risk-medium"
    );

    riskLevel.innerHTML =
    "🟡 RIESGO MEDIO";

}

else if(
    activity.riskLevel === "BAJO"
){

    riskLevel.classList.add(
        "risk-low"
    );

    riskLevel.innerHTML =
    "🟢 RIESGO BAJO";

}

else{

        if(activity.riskLevel==="BAJO")
    {
        riskLevel.className="risk-badge risk-low";

        riskLevel.innerHTML=
        "🟢 RIESGO BAJO";
    }

    else if(activity.riskLevel==="MEDIO")
    {
        riskLevel.className="risk-badge risk-medium";

        riskLevel.innerHTML=
        "🟡 RIESGO MEDIO";
    }

    else if(activity.riskLevel==="ALTO")
    {
        riskLevel.className="risk-badge risk-high";

        riskLevel.innerHTML=
        "🔴 RIESGO ALTO";
    }

    else
    {
        riskLevel.className="risk-badge risk-critical";

        riskLevel.innerHTML=
        "⚫ RIESGO CRÍTICO";
    }

}

document.getElementById(
    "risk-description"
).innerHTML =

activity.riskDescription

.map(item =>

`<div class="impact-item">

• ${item}

</div>`

)

.join("");

document.getElementById(
    "eval-questions"
).innerText =
"Preguntas: " +
activity.evaluation.questions;

document.getElementById(
    "eval-score"
).innerText =
"Nota mínima: " +
activity.evaluation.passingScore +
"%";

document.getElementById(
    "eval-attempts"
).innerText =
"Intentos: " +
activity.evaluation.attempts;

document.getElementById(
    "competencies"
).innerHTML =

activity.competencies

.map(item =>

`
<div class="competency-item">

☑ ${item}

</div>
`

)

.join("");

    /* STEPS */

    const stepsContainer =
    document.getElementById(
        "steps-container"
    );

    stepsContainer.innerHTML = "";

    activity.steps.forEach(
        (step, i) => {

            const div =
            document.createElement(
                "div"
            );

            div.className =
            "step-item";

            let icon = "📎";

            if(step.resourceType === "image")
                icon = "🖼";

            if(step.resourceType === "pdf")
                icon = "📄";

            if(step.resourceType === "video")
                icon = "🎥";

            if(step.resourceType === "audio")
                icon = "🎧";

            if(step.resourceType === "url")
                icon = "🌐";

            div.innerHTML = `

<div class="step-title">

    ${icon} ${i + 1}. ${step.text}

</div>

<div class="step-actions">

    <div class="step-consequence">

    <div class="consequence-title">

        ⚠ CONSECUENCIAS OPERACIONALES

    </div>

    <div class="consequence-text">

        ${step.consequence}

    </div>

</div>

    <a
        href="${step.lmsLink}"
        target="_blank"
        class="step-lms-link">

        🔗 Enlace LMS

    </a>

</div>

`;

            div.onclick = function(){

    selectedStep = step;

    speakStep(

        step.text +

        ". Consecuencia. " +

        step.consequence,

        div

    );

};

            stepsContainer.appendChild(
                div
            );

        }
    );

    updateProgress();

}

/* NEXT */

function nextActivity(){

    if(
        currentActivity <
        activities.length - 1
    ){

        currentActivity++;

        loadActivity(
            currentActivity
        );

        renderActivitiesGrid();

        renderMobileSelect();

    }

}

/* PREVIOUS */

function previousActivity(){

    if(currentActivity > 0){

        currentActivity--;

        loadActivity(
            currentActivity
        );

        renderActivitiesGrid();

        renderMobileSelect();

    }

}

/* MOBILE SELECT */

function renderMobileSelect(){

    const select =
    document.getElementById(
        "activity-select"
    );

    if(!select) return;

    select.innerHTML = "";

    activities.forEach(
        (activity,index)=>{

            select.innerHTML +=
            `
            <option
            value="${index}"
            ${index === currentActivity ?
            "selected" : ""}>

            ${activity.number}
            - ${activity.name}

            </option>
            `;

        }
    );

}

/* MOBILE CHANGE */

function mobileActivitySelect(){

    const select =
    document.getElementById(
        "activity-select"
    );

    currentActivity =
    parseInt(
        select.value
    );

    loadActivity(
        currentActivity
    );

    renderActivitiesGrid();

}

/* GRID */

function renderActivitiesGrid(){

    const grid =
    document.getElementById(
        "activities-grid"
    );

    if(!grid) return;

    grid.innerHTML = "";

    activities.forEach(
        (activity,index)=>{

            grid.innerHTML +=
            `
            <div
            class="activity-card
            ${index === currentActivity ?
            "active-card" : ""}"

            onclick="
            goToActivity(${index})
            ">

                <div
                class="activity-card-number">

                    ${activity.number}

                </div>

                <div
                class="activity-card-name">

                    ${activity.name}

                </div>

            </div>
            `;

        }
    );

}

/* GO TO */

function goToActivity(index){

    currentActivity = index;

    loadActivity(index);

    renderActivitiesGrid();

    renderMobileSelect();

}

/* START */

window.onload = function(){

    loadActivity(0);

    renderActivitiesGrid();

    renderMobileSelect();

};

/* PROGRESS */

function updateProgress(){

    const percent =
    Math.round(

        (
            (currentActivity + 1)
            /
            activities.length
        ) * 100

    );

    document.getElementById(
        "progress-text"
    ).innerText =
    percent + "%";

    document.getElementById(
        "progress-fill"
    ).style.width =
    percent + "%";

}