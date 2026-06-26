function renderProcess(process){

return `

<div class="process-canvas">

    <div class="process-header">

        <h1>${process.name}</h1>

        <div class="process-meta">

            <span>Código: ${process.code}</span>
            <span>Responsable: ${process.owner}</span>
            <span>Versión: ${process.version}</span>

        </div>

    </div>

    <div class="process-tabs">

        <button class="tab-btn active"
            onclick="showProcessTab('general')">

            📋 General

        </button>

        <button class="tab-btn"
            onclick="showLMS('${process.code}')">

            🎓 LMS

        </button>

        <button class="tab-btn"
            onclick="showProcessTab('indicators')">

            📊 Indicadores

        </button>

        <button class="tab-btn"
            onclick="showProcessTab('risks')">

            ⚠️ Riesgos

        </button>

        <button class="tab-btn"
            onclick="showProcessTab('quality')">

            ✅ Calidad

        </button>

        <button class="tab-btn"
            onclick="showProcessTab('documents')">

            📁 Documentos

        </button>

    </div>

    
        <div id="tab-general"
            class="tab-content active">

        <h2>0. FLUJO CRÍTICO</h2>

            <div class="section-content">

                <ul>

                    ${process.flow
                        .map(item => `
                            <li>
                                ${item.step} -
                                ${item.description}
                            </li>
                        `)
                        .join("")
                    }

                </ul>

            </div>

        </div>

        <div class="canvas-section">

            <h2>1. REQUISITOS DE ENTRADA</h2>

            <div class="section-content">

                <ul>

                    ${process.inputs
                        .map(item => `
                            <li>
                                ${item.item}
                                (${item.source})
                            </li>
                        `)
                        .join("")
                    }

                </ul>

            </div>

        </div>

        <div class="canvas-section">

            <h2>2. REQUISITOS DE SALIDA</h2>

            <div class="section-content">

                <ul>

                    ${process.outputs
                        .map(item => `
                            <li>
                                ${item.item}
                                (${item.destination})
                            </li>
                        `)
                        .join("")
                    }

                </ul>

            </div>

        </div>

        <div class="canvas-section">

            <h2>3. PROCESOS QUE INTERACTÚAN</h2>

            <div class="section-content">

                <ul>

                    ${process.interactions
                        .map(item => `
                            <li>
                                ${item.process}
                                -
                                ${item.relationship}
                            </li>
                        `)
                        .join("")
                    }

                </ul>

            </div>

        </div>

        <div class="canvas-section">

            <h2>4. OBJETIVO</h2>

            <div class="section-content">

                ${process.objective}

            </div>

        </div>

        <div class="canvas-section">

            <h2>5. ALCANCE</h2>

            <div class="section-content">

                ${process.scope}

            </div>

        </div>

        <div class="canvas-section">

            <h2>6. RESPONSABILIDAD Y AUTORIDAD</h2>

            <div class="section-content">

                <ul>

                    ${process.responsibilities
                        .map(item => `
                            <li>
                                <b>${item.role}</b>
                                :
                                ${item.authority}
                            </li>
                        `)
                        .join("")
                    }

                </ul>

            </div>

        </div>

        <div class="canvas-section">

            <h2>7. DEFINICIONES</h2>

            <div class="section-content">

                <ul>

                    ${process.definitions
                        .map(item => `
                            <li>
                                <b>${item.term}</b>
                                :
                                ${item.description}
                            </li>
                        `)
                        .join("")
                    }

                </ul>

            </div>

        </div>

        <div class="canvas-section">

        
        <div class="canvas-section">

            <h2>8. ACTIVIDADES</h2>

            <div class="section-content">

                <ul>

                    ${process.activities.map(activity => `

                        <li>

                            <strong>${activity.id}</strong>
                            -
                            ${activity.name}

                        </li>

                    `).join("")}

                </ul>

            </div>

        </div>

        
        <div class="canvas-section">

            <h2>9. INDICADORES</h2>

            <div class="section-content">

                ${process.indicators.map(indicator => `

                    <div class="indicator-card">

                        <strong>
                            ${indicator.indicator}
                        </strong>

                        <br>

                        Objetivo:
                        ${indicator.objective}

                        <br>

                        Fórmula:
                        ${indicator.formula || "-"}

                        <br>

                        Meta:
                        ${indicator.target}

                        <br>

                        Frecuencia:
                        ${indicator.frequency}

                        <br>

                        Responsable:
                        ${indicator.responsible}

                    </div>

                    <hr>

                `).join("")}

            </div>

        </div>

        
        <div class="canvas-section">

            <h2>10. DOCUMENTOS</h2>

            <div class="section-content">

                <ul>

                    ${process.documents.map(doc => `

                        <li>

                            ${typeof doc === "string"
                                ? doc
                                : doc.name}

                        </li>

                    `).join("")}

                </ul>

            </div>

        </div>

       
        <div class="canvas-section">

            <h2>11. CALIDAD</h2>

            <div class="section-content">

                <ul>

                    ${process.qualityControls.map(control => `

                        <li>

                            ${typeof control === "string"
                                ? control
                                : control.name}

                        </li>

                    `).join("")}

                </ul>

            </div>

        </div>

        <div class="canvas-section">

           <div class="canvas-section">

    <h2>12. ASPECTOS A CONTROLAR</h2>

    <div class="section-content">

        ${process.controlPoints.map(item => `

            <div class="control-card">

                <strong>${item.item}</strong>

                <br>

                ${item.criteria}

            </div>

            <hr>

        `).join("")}

    </div>

</div>

<div class="canvas-section">

    <h2>13. MEJORA CONTINUA</h2>

    <div class="section-content">

        ${process.improvements.map(item => `

            <div class="improvement-card">

                <strong>${item.action}</strong>

                <br>

                Responsable:
                ${item.responsible}

                <br>

                Estado:
                ${item.status}

            </div>

            <hr>

        `).join("")}

    </div>

</div>

<div class="canvas-section">

    <h2>14. ANEXOS</h2>

    <div class="section-content">

        ${process.annexes.map(item => `

            <div class="annex-card">

                <strong>${item.name}</strong>

                ${item.url ? `

                    <br>

                    <a href="${item.url}" target="_blank">

                        Abrir Documento

                    </a>

                ` : ""}

            </div>

            <hr>

        `).join("")}

    </div>

</div>

<div class="canvas-section">
            <h2>15. RIESGOS</h2>

        <div class="section-content">

            ${process.risks.map(risk => `

                <div class="risk-card">

                    <strong>

                        ${risk.risk}

                    </strong>

                    <br>

                    Impacto:
                    ${risk.impact}

                    <br>

                    Control:
                    ${risk.control}

                </div>

                <hr>

            `).join("")}

            </div>

        </div>

        <div class="canvas-section">

           <div class="canvas-section">

    <h2>16. FRECUENCIAS</h2>

    <div class="section-content">

        ${process.frequencies.map(item => `

            <div class="frequency-card">

                <strong>

                    ${item.activity}

                </strong>

                <br>

                Frecuencia:
                ${item.frequency}

            </div>

            <hr>

        `).join("")}

    </div>

</div>

        <div class="canvas-section">

            <h2>18. KPI / META</h2>

        <div class="section-content">

            ${process.kpis.map(kpi => `

                <div>

                    <strong>

                        ${kpi.name}

                    </strong>

                    -

                    Meta:
                    ${kpi.target}

                </div>

            `).join("")}

        </div>

    </div>

    <div id="tab-indicators"
        class="tab-content">

        <div class="canvas-section">

            <h2>📊 INDICADORES</h2>

            ${process.indicators.map(indicator => `

                <div class="indicator-card">

                    <strong>
                        ${indicator.indicator}
                    </strong>

                    <br>

                    Meta:
                    ${indicator.target}

                </div>

            `).join("")}

        </div>

    </div>

    <div id="tab-risks"
        class="tab-content">

        <div class="canvas-section">

            <h2>⚠️ RIESGOS</h2>

            ${process.risks.map(risk => `

                <div class="risk-card">

                    <strong>
                        ${risk.risk}
                    </strong>

                    <br>

                    Impacto:
                    ${risk.impact}

                </div>

            `).join("")}

        </div>

    </div>

    <div id="tab-quality"
        class="tab-content">

        <div class="canvas-section">

            <h2>✅ CALIDAD</h2>

            <ul>

                ${process.qualityControls.map(control => `

                    <li>${control}</li>

                `).join("")}

            </ul>

        </div>

    </div>

    <div id="tab-documents"
        class="tab-content">

        <div class="canvas-section">

            <h2>📁 DOCUMENTOS</h2>

            <ul>

                ${process.documents.map(doc => `

                    <li>${doc}</li>

                `).join("")}

            </ul>

        </div>

    </div>

</div>

`;

}

function showProcessTab(tabId){

document
    .querySelectorAll(".tab-content")
    .forEach(tab => {

        tab.classList.remove("active");

    });

document
    .querySelectorAll(".tab-btn")
    .forEach(btn => {

        btn.classList.remove("active");

    });

const tab =
    document.getElementById(
        "tab-" + tabId
    );

if(tab){

    tab.classList.add("active");

}

}

function renderSGIDHome(){

    return `

    <div class="sgid-home">

        <div class="dashboard-header">

            <h1>
                SGID JIT LOGISTICS
            </h1>

            <h2>
                SISTEMA DE GESTIÓN INTEGRAL DIGITAL
            </h2>

            <p>
                Centro de Control Corporativo
            </p>

        </div>

        <div class="dashboard-kpis">

            <div class="kpi-card">

                <div class="kpi-value">8</div>

                <div class="kpi-label">
                    Procesos Activos
                </div>

            </div>

            <div class="kpi-card">

                <div class="kpi-value">16</div>

                <div class="kpi-label">
                    Actividades LMS
                </div>

            </div>

            <div class="kpi-card">

                <div class="kpi-value">98%</div>

                <div class="kpi-label">
                    OTIF
                </div>

            </div>

            <div class="kpi-card">

                <div class="kpi-value">4</div>

                <div class="kpi-label">
                    Riesgos Altos
                </div>

            </div>

        </div>

        <h2 class="dashboard-title">

            MAPA MAESTRO DE PROCESOS

        </h2>

        <div class="dashboard-process-grid">

        <div class="dashboard-process-card"
         onclick="openProcess('GERENCIA')">

            <div class="card-icon">👔</div>
            <div class="card-title">GERENCIA</div>

        </div>

            <div class="dashboard-process-card"
                onclick="openProcess('MARKETING')">

                <div class="card-icon">📢</div>
                <div class="card-title">MARKETING</div>

            </div>

            <div class="dashboard-process-card"
                onclick="openProcess('VENTAS')">

                <div class="card-icon">🤝</div>
                <div class="card-title">VENTAS</div>

            </div>

            <div class="dashboard-process-card"
                onclick="openProcess('RRHH')">

                <div class="card-icon">👥</div>
                <div class="card-title">RRHH</div>

            </div>

            <div class="dashboard-process-card"
                onclick="openProcess('OP3PL')">

                <div class="card-icon">🚚</div>
                <div class="card-title">OPERACIÓN 3PL</div>

            </div>

            <div class="dashboard-process-card"
                onclick="openProcess('FINANZAS')">

                <div class="card-icon">💰</div>
                <div class="card-title">FINANZAS</div>

            </div>

            <div class="dashboard-process-card"
                onclick="openProcess('CONTABILIDAD')">

                <div class="card-icon">📒</div>
                <div class="card-title">CONTABILIDAD</div>

            </div>

            <div class="dashboard-process-card"
                onclick="openProcess('CALIDAD')">

                <div class="card-icon">⚖️</div>
                <div class="card-title">CALIDAD</div>

            </div>

        </div>

    </div>

    `;

}
function showProcessTab(tabId){

    document
        .querySelectorAll(".tab-content")
        .forEach(tab => {

            tab.classList.remove("active");

        });

    document
        .querySelectorAll(".tab-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });

    document
        .getElementById(
            "tab-" + tabId
        )
        .classList.add("active");

}