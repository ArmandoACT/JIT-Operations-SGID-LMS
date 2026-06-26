const activities = [

{

    id:1,

    number:"01",

    name:"Recepción de Programación desde Producción",

    description:
    "Recibir, validar y registrar la programación operativa enviada por el cliente, garantizando la correcta planeación de recursos, tiempos de ejecución y cumplimiento de los niveles de servicio establecidos para la operación logística.",

    responsible:
    "Coordinador Operativo",

    responsibilityDescription:
    "Responsable de validar la programación operativa recibida, garantizar la disponibilidad de recursos y asegurar el cumplimiento de los compromisos OTIF definidos con el cliente..",

   control:
    "Validación de programación contra E R P Cliente, órdenes de despacho y recursos operativos disponibles.",

riskLevel:
"ALTO",

riskDescription:[

"Afectación OTIF",

"Retrasos Operativos",

"Errores de Planeación",

"Afectación Nivel Servicio"

],

evaluation:
{
    questions:5,
    passingScore:80,
    attempts:3
},

competencies:[
    "ERP Cliente",
    "Planeación Operativa",
    "WMS",
    "Control de Producción"
],

steps:[

    {
        text:"Recibir programación diaria cliente",

        consequence:
        "Errores de planeación, retrasos operativos y afectación OTIF.",

        lmsLink:
        "#",

        resourceType:"image",

        resourceUrl:""
    },

    {
        text:"Validar referencias programadas",

        consequence:
        "Errores de referencias, diferencias de inventario y reprocesos.",

        lmsLink:
        "#",

        resourceType:"pdf",

        resourceUrl:""
    },

    {
        text:"Confirmar cantidades proyectadas",

        consequence:
        "Sobrecostos, faltantes de inventario y afectación al plan de producción.",

        lmsLink:
        "#",

        resourceType:"video",

        resourceUrl:""
    },

    {
        text:"Revisar prioridad despachos",

        consequence:
        "Incumplimiento de entregas críticas y afectación del nivel de servicio.",

        lmsLink:
        "#",

        resourceType:"audio",

        resourceUrl:""
    },

    {
        text:"Validar horarios recolección",

        consequence:
        "Retrasos en cargues, pérdida de citas y sobrecostos logísticos.",

        lmsLink:
        "#",

        resourceType:"url",

        resourceUrl:""
    },

    {
        text:"Registrar programación sistema",

        consequence:
        "Errores operativos, diferencias de inventario y pérdida de trazabilidad.",

        lmsLink:
        "#",

        resourceType:"pdf",

        resourceUrl:""
    }

],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com/file/d/1lWvzfTtcg2tdVt4XbV6Nk8No8B8fNZbN/view?usp=drive_link",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "https://drive.google.com/drive/u/1/folders/ACT1EVIDENCE",

    pod:
    "https://drive.google.com/drive/u/1/folders/ACT1POD",

    checklist:
    "https://drive.google.com/drive/u/1/folders/ACT1CHECK"

},

{

    id:2,

    number:"02",

    name:"Recepción Producto Terminado Planta",

    description:
    "Recibir, validar y liberar el producto terminado proveniente de producción, garantizando la integridad física, documental y la trazabilidad necesaria para continuar el proceso logístico.",

    responsible:
    "Supervisor Planta",

    responsibilityDescription:
    "Responsable de validar física y documentalmente el producto terminado antes de su liberación al transporte, garantizando cantidades, referencias, lotes y condiciones de calidad.",

    control:
    "Validación contra programación de producción, referencias SKU, cantidades fabricadas y estado físico de la mercancía.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Afectación OTIF",

        "Diferencias de Inventario",

        "Errores de Referencias",

        "Pérdida de Trazabilidad"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Control Producción",

        "ERP Cliente",

        "Trazabilidad",

        "Control Calidad"

    ],

    steps:[

        {

            text:"Recibir producto terminado",

            consequence:
            "Errores de recepción generan diferencias desde origen.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar referencia SKU",

            consequence:
            "Errores de identificación y trazabilidad del producto.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Verificar cantidades producidas",

            consequence:
            "Diferencias de inventario y reprocesos operativos.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Revisar estado físico del producto",

            consequence:
            "Ingreso de mercancía averiada al proceso logístico.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar condiciones del empaque",

            consequence:
            "Daños durante manipulación, transporte y almacenamiento.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Confirmar lote y trazabilidad",

            consequence:
            "Pérdida de control de producción y trazabilidad.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Autorizar liberación para transporte",

            consequence:
            "Retrasos operativos y afectación del cumplimiento OTIF.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act02",

    pod:
    "media/evidencias/act02/pod",

    checklist:
    "media/evidencias/act02/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},

{

    id:3,

    number:"03",

    name:"Cargue Vehículo Transporte",

    description:
    "Realizar el cargue físico de la mercancía en el vehículo asignado garantizando integridad, trazabilidad, seguridad de la carga y cumplimiento de la programación operativa.",

    responsible:
    "Coordinador Transporte",

    responsibilityDescription:
    "Responsable de coordinar y validar el cargue de la mercancía, asegurando el cumplimiento de los procedimientos de seguridad, control documental y trazabilidad operativa.",

    control:
    "Validación de cargue contra programación, remisión, referencias SKU y capacidad del vehículo.",

    evidenceRecord:
    "Planilla de cargue, fotografías y registro GPS.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Afectación OTIF",

        "Daño de mercancía",

        "Errores de despacho",

        "Pérdida de trazabilidad"

    ],

    competencies:[

        "Control de Cargue",

        "Seguridad Operacional",

        "Trazabilidad Logística",

        "Control Documental"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    steps:[

        {

            text:"Verificar vehículo asignado",

            consequence:
            "Asignación incorrecta de transporte y retrasos operativos.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar documentación de cargue",

            consequence:
            "Errores documentales y posibles devoluciones.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Confirmar referencias SKU",

            consequence:
            "Despachos incorrectos y diferencias de inventario.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Verificar cantidades programadas",

            consequence:
            "Faltantes, sobrantes y reclamos del cliente.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Realizar cargue de mercancía",

            consequence:
            "Daños físicos de producto y afectación operacional.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Asegurar carga para transporte",

            consequence:
            "Accidentes, pérdidas y averías durante el recorrido.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Autorizar salida vehículo",

            consequence:
            "Despachos no controlados y pérdida de trazabilidad.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:"",
    images:"",
    pdf:"",
    audio:"",
    url:"",

    evidence:
    "media/evidencias/act03",

    pod:
    "media/evidencias/act03/pod",

    checklist:
    "media/evidencias/act03/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:4,

    number:"04",

    name:"Transporte Planta CEDI",

    description:
    "Ejecutar el traslado seguro del producto terminado desde la planta de producción hasta el Centro de Distribución (CEDI), garantizando la integridad de la mercancía, trazabilidad del recorrido y cumplimiento de los tiempos establecidos.",

    responsible:
    "Conductor y Torre de Control",

    responsibilityDescription:
    "Responsables de garantizar el transporte seguro de la mercancía, monitorear el recorrido mediante GPS, reportar novedades y asegurar la entrega oportuna en el CEDI.",

    control:
    "Seguimiento GPS, control de ruta, validación de tiempos de tránsito y confirmación de llegada al CEDI.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Pérdida de trazabilidad",

        "Retrasos en tránsito",

        "Incumplimiento OTIF",

        "Daños de mercancía",

        "Desviación de ruta"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Transporte Logístico",

        "Trazabilidad GPS",

        "Seguridad de Carga",

        "Gestión de Novedades"

    ],

    steps:[

        {

            text:"Verificar documentación de salida",

            consequence:
            "Errores documentales generan retrasos y problemas de trazabilidad.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Iniciar ruta asignada",

            consequence:
            "Desviaciones operativas y afectación de la programación logística.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Activar tracking GPS",

            consequence:
            "Pérdida de visibilidad del transporte y falta de control operacional.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Monitorear recorrido",

            consequence:
            "Retrasos no detectados y afectación del nivel de servicio.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Reportar novedades operativas",

            consequence:
            "Escalamiento tardío de incidentes y pérdida de capacidad de reacción.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Validar tiempos de llegada",

            consequence:
            "Incumplimiento de programación y afectación OTIF.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Confirmar llegada al CEDI",

            consequence:
            "Pérdida de trazabilidad del proceso de recepción.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act04",

    pod:
    "media/evidencias/act04/pod",

    checklist:
    "media/evidencias/act04/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:5,

    number:"05",

    name:"Recepción Mercancía CEDI",

    description:
    "Recibir físicamente la mercancía proveniente de planta, verificando cantidades, referencias, documentación de transporte e integridad del producto antes de su ingreso al Centro de Distribución.",

    responsible:
    "Auxiliar de Bodega",

    responsibilityDescription:
    "Responsable de ejecutar la recepción física y documental de la mercancía, garantizando la exactitud de las cantidades recibidas, el estado del producto y la correcta generación de registros de ingreso.",

    control:
    "Validación contra remisión, orden de traslado, referencias SKU, cantidades físicas y estado de la mercancía.",

    evidenceRecord:
    "Formato de recepción, remisión firmada, registro fotográfico y acta de novedades.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Diferencias de inventario",

        "Ingreso de mercancía averiada",

        "Errores de recepción",

        "Pérdida de trazabilidad",

        "Afectación OTIF"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Recepción Logística",

        "Control Inventarios",

        "Validación Documental",

        "Trazabilidad Operacional"

    ],

    steps:[

        {

            text:"Recibir vehículo en muelle",

            consequence:
            "Retrasos operativos y congestión de recepción.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Verificar documentación de transporte",

            consequence:
            "Ingreso sin soporte documental y pérdida de trazabilidad.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Descargar mercancía",

            consequence:
            "Daños físicos al producto y pérdidas operativas.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Validar referencias SKU",

            consequence:
            "Errores de inventario y ubicación incorrecta.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Verificar cantidades recibidas",

            consequence:
            "Diferencias de inventario y reclamos posteriores.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Inspeccionar estado físico del producto",

            consequence:
            "Ingreso de mercancía averiada al inventario.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Registrar novedades encontradas",

            consequence:
            "Pérdida de evidencia y dificultades para reclamaciones.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Autorizar ingreso al CEDI",

            consequence:
            "Ingreso incorrecto de mercancía al inventario.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act05",

    pod:
    "media/evidencias/act05/pod",

    checklist:
    "media/evidencias/act05/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:6,

    number:"06",

    name:"Validación Documental y SKU",

    description:
    "Validar la consistencia documental y física de las referencias recibidas, garantizando la correcta identificación de SKU, lotes, unidades de empaque y trazabilidad antes de registrar el inventario en el sistema WMS.",

    responsible:
    "Líder de Inventarios",

    responsibilityDescription:
    "Responsable de verificar que la información física, documental y sistémica coincida plenamente antes de autorizar el ingreso formal al inventario del cliente.",

    control:
    "Validación cruzada entre remisión, ERP cliente, referencias SKU, lotes, cantidades y unidades logísticas.",

    evidenceRecord:
    "Formato validación SKU, reporte diferencias, registro fotográfico y acta de novedades.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Diferencias de inventario",

        "Errores de identificación SKU",

        "Pérdida de trazabilidad",

        "Ingreso incorrecto al WMS",

        "Afectación OTIF"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Administración Inventarios",

        "Control SKU",

        "ERP Cliente",

        "WMS",

        "Trazabilidad Logística"

    ],

    steps:[

        {

            text:"Recibir documentación de recepción",

            consequence:
            "Falta de soporte documental y pérdida de trazabilidad.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Validar referencias SKU recibidas",

            consequence:
            "Errores de identificación y ubicación incorrecta de producto.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Verificar lotes y trazabilidad",

            consequence:
            "Pérdida de control sobre producción y vencimientos.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Validar cantidades físicas contra remisión",

            consequence:
            "Diferencias de inventario y reclamaciones posteriores.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Confirmar unidades de empaque",

            consequence:
            "Errores en almacenamiento, picking y despacho.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Comparar información ERP y documentos físicos",

            consequence:
            "Errores de registro y afectación del inventario oficial.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Registrar diferencias detectadas",

            consequence:
            "Pérdida de control y ausencia de acciones correctivas.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Autorizar ingreso a inventario WMS",

            consequence:
            "Registro incorrecto del inventario del cliente.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act06",

    pod:
    "media/evidencias/act06/pod",

    checklist:
    "media/evidencias/act06/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:7,

    number:"07",

    name:"Registro Inventario WMS",

    description:
    "Registrar la mercancía validada en el sistema WMS garantizando exactitud de inventario, trazabilidad logística y disponibilidad para las operaciones de almacenamiento, picking y despacho.",

    responsible:
    "Auxiliar de Inventarios",

    responsibilityDescription:
    "Responsable de registrar correctamente las referencias, lotes, cantidades, ubicaciones y características logísticas de la mercancía en el sistema WMS, garantizando la integridad de la información.",

    control:
    "Validación de datos entre documentación física, ERP Cliente y sistema WMS antes de confirmar el registro.",

    evidenceRecord:
    "Registro WMS, reporte de inventario inicial, auditoría de ingreso y evidencia fotográfica.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Diferencias de inventario",

        "Errores de digitación",

        "Pérdida de trazabilidad",

        "Ubicaciones incorrectas",

        "Afectación de operaciones posteriores"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "WMS",

        "Inventarios",

        "ERP Cliente",

        "Trazabilidad Logística",

        "Control Operacional"

    ],

    steps:[

        {

            text:"Acceder al sistema WMS",

            consequence:
            "Imposibilidad de registrar mercancía y retrasos operativos.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Crear registro de ingreso",

            consequence:
            "Falta de trazabilidad y pérdida de control del inventario.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Registrar referencias SKU",

            consequence:
            "Errores de identificación y afectación de inventarios.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Registrar cantidades recibidas",

            consequence:
            "Diferencias de inventario y errores de abastecimiento.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Registrar lotes y trazabilidad",

            consequence:
            "Pérdida de control sobre mercancía y seguimiento operacional.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Asignar ubicación temporal",

            consequence:
            "Errores de almacenamiento y pérdida de productividad.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Validar información registrada",

            consequence:
            "Errores sistémicos y diferencias operativas.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Confirmar ingreso al inventario",

            consequence:
            "Inventario no disponible para operaciones posteriores.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act07",

    pod:
    "media/evidencias/act07/pod",

    checklist:
    "media/evidencias/act07/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:8,

    number:"08",

    name:"Ubicación y Almacenamiento de Mercancía",

    description:
    "Ubicar físicamente la mercancía en las posiciones definidas dentro del CEDI, garantizando trazabilidad, optimización de espacios, cumplimiento FIFO/FEFO y disponibilidad para futuras operaciones logísticas.",

    responsible:
    "Auxiliar de Almacenamiento",

    responsibilityDescription:
    "Responsable de asignar y registrar correctamente la ubicación física de la mercancía dentro del CEDI, garantizando la integridad del inventario y la trazabilidad operacional.",

    control:
    "Validación de ubicación WMS, cumplimiento FIFO/FEFO, control de capacidad y verificación física de posiciones.",

    evidenceRecord:
    "Registro WMS, fotografías de ubicación, auditoría de almacenamiento y confirmación de ubicación física.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Ubicación incorrecta",

        "Pérdida de trazabilidad",

        "Dificultad en picking",

        "Diferencias de inventario",

        "Afectación de productividad operativa"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "WMS",

        "Almacenamiento",

        "FIFO",

        "FEFO",

        "Trazabilidad Operacional"

    ],

    steps:[

        {

            text:"Consultar ubicación asignada en WMS",

            consequence:
            "Ubicación incorrecta y pérdida de control del inventario.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Validar capacidad disponible de la posición",

            consequence:
            "Sobrecarga de posiciones y riesgos operativos.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Trasladar mercancía al pasillo asignado",

            consequence:
            "Retrasos operativos y aumento de recorridos internos.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Verificar rack y posición destino",

            consequence:
            "Ubicación errónea y afectación de inventarios.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Aplicar criterio FIFO o FEFO",

            consequence:
            "Rotación incorrecta y riesgo de obsolescencia.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Ubicar físicamente la mercancía",

            consequence:
            "Daños al producto y pérdida de productividad.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Registrar ubicación definitiva en WMS",

            consequence:
            "Diferencias entre inventario físico y sistema.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Validar ubicación registrada",

            consequence:
            "Errores de picking y afectación del servicio.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act08",

    pod:
    "media/evidencias/act08/pod",

    checklist:
    "media/evidencias/act08/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},



{

    id:9,

    number:"09",

    name:"Inventario Cíclico y Control de Exactitud",

    description:
    "Ejecutar conteos cíclicos programados para garantizar la exactitud del inventario físico versus el inventario registrado en el sistema WMS, identificando diferencias, analizando causas y ejecutando acciones correctivas.",

    responsible:
    "Líder de Inventarios",

    responsibilityDescription:
    "Responsable de planificar, ejecutar y controlar los conteos cíclicos, garantizando la confiabilidad del inventario y la trazabilidad de los ajustes realizados.",

    control:
    "Conteo físico, conciliación WMS, análisis de diferencias, validación de ajustes y auditoría de inventarios.",

    evidenceRecord:
    "Formato conteo cíclico, reporte diferencias, acta ajuste inventario, evidencia fotográfica y reporte auditoría.",

    riskLevel:
    "CRITICO",

    riskDescription:[

        "Diferencias de inventario",

        "Pérdida de trazabilidad",

        "Errores de picking",

        "Errores de despacho",

        "Afectación OTIF",

        "Pérdidas económicas",

        "Ajustes no autorizados"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Administración Inventarios",

        "Conteos Cíclicos",

        "WMS",

        "Auditoría Operacional",

        "Análisis de Diferencias"

    ],

    steps:[

        {

            text:"Generar programación de conteo cíclico",

            consequence:
            "Falta de control periódico del inventario.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Identificar ubicaciones a auditar",

            consequence:
            "Cobertura insuficiente del inventario.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Bloquear ubicaciones en WMS",

            consequence:
            "Movimientos simultáneos y errores de conteo.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Realizar conteo físico",

            consequence:
            "Diferencias no detectadas y pérdida de confiabilidad.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Comparar conteo físico vs WMS",

            consequence:
            "Errores de inventario permanecen ocultos.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Analizar diferencias encontradas",

            consequence:
            "Repetición de errores operativos.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Generar reporte de hallazgos",

            consequence:
            "Ausencia de trazabilidad y mejora continua.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Solicitar aprobación de ajustes",

            consequence:
            "Modificaciones no autorizadas del inventario.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Ejecutar ajustes aprobados",

            consequence:
            "Persistencia de diferencias en inventario.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Cerrar conteo y actualizar indicadores",

            consequence:
            "Falta de información para toma de decisiones.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act09",

    pod:
    "media/evidencias/act09/pod",

    checklist:
    "media/evidencias/act09/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:10,

    number:"10",

    name:"Liberación Pedidos Clientes",

    description:
    "Validar, aprobar y liberar las órdenes de pedido recibidas desde el cliente para su procesamiento en el WMS, garantizando disponibilidad de inventario, prioridades de despacho y cumplimiento de los acuerdos de servicio.",

    responsible:
    "Servicio al Cliente y Coordinador Operativo",

    responsibilityDescription:
    "Responsables de validar la información de los pedidos, verificar disponibilidad de inventario y autorizar la generación de las tareas operativas para picking, packing y despacho.",

    control:
    "Validación de pedido contra ERP cliente, inventario disponible, restricciones comerciales y programación de despachos.",

    evidenceRecord:
    "Orden liberada, reporte WMS, autorización despacho y registro de trazabilidad del pedido.",

    riskLevel:
    "ALTO",

    riskDescription:[

        "Pedidos incorrectos",

        "Inventario insuficiente",

        "Incumplimiento OTIF",

        "Errores de facturación",

        "Retrasos operativos",

        "Liberación no autorizada"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "ERP Cliente",

        "WMS",

        "Servicio al Cliente",

        "Gestión de Pedidos",

        "Planeación Operativa"

    ],

    steps:[

        {

            text:"Recibir pedido del cliente",

            consequence:
            "Pérdida de solicitudes y retrasos operativos.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar información comercial del pedido",

            consequence:
            "Errores de procesamiento y devoluciones.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Verificar disponibilidad de inventario",

            consequence:
            "Promesas incumplidas al cliente.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Validar prioridades de despacho",

            consequence:
            "Afectación de clientes prioritarios y OTIF.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Confirmar condiciones de entrega",

            consequence:
            "Errores logísticos y reprocesos.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Generar orden operativa en WMS",

            consequence:
            "Imposibilidad de ejecutar picking.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Liberar pedido para preparación",

            consequence:
            "Retrasos en el flujo operativo.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Registrar trazabilidad del pedido",

            consequence:
            "Pérdida de control y seguimiento.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act10",

    pod:
    "media/evidencias/act10/pod",

    checklist:
    "media/evidencias/act10/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},

{

    id:11,

    number:"11",

    name:"Picking Operacional",

    description:
    "Preparar los pedidos liberados mediante la recolección física de mercancía desde las ubicaciones definidas en WMS, garantizando exactitud, trazabilidad, cumplimiento FIFO/FEFO y productividad operativa.",

    responsible:
    "Auxiliar Picking",

    responsibilityDescription:
    "Responsable de ejecutar la preparación física de pedidos, garantizando la exactitud de referencias, cantidades, lotes y condiciones del producto antes de pasar a packing.",

    control:
    "Validación WMS, control FIFO/FEFO, verificación de cantidades, revisión de lotes y doble validación de pedidos preparados.",

    evidenceRecord:
    "Orden de picking, registro WMS, checklist de validación, fotografías y reporte de productividad.",

    riskLevel:
    "CRITICO",

    riskDescription:[

        "Error de referencias",

        "Faltantes de producto",

        "Sobrantes de producto",

        "Pérdida de trazabilidad",

        "Incumplimiento OTIF",

        "Reprocesos operativos",

        "Reclamos de clientes"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Picking",

        "WMS",

        "FIFO",

        "FEFO",

        "Control Inventarios",

        "Productividad Operativa"

    ],

    steps:[

        {

            text:"Recibir orden de picking",

            consequence:
            "Imposibilidad de iniciar la preparación del pedido.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Validar información del pedido",

            consequence:
            "Preparación incorrecta y errores de despacho.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Identificar ubicaciones en WMS",

            consequence:
            "Incremento de recorridos y pérdida de productividad.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Aplicar criterio FIFO o FEFO",

            consequence:
            "Rotación incorrecta y riesgo de obsolescencia.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Extraer mercancía de ubicación",

            consequence:
            "Daños al producto y diferencias de inventario.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar referencia SKU",

            consequence:
            "Despacho de producto incorrecto.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Validar cantidades requeridas",

            consequence:
            "Faltantes o sobrantes para el cliente.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Confirmar lote y trazabilidad",

            consequence:
            "Pérdida de control y seguimiento de producto.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Registrar confirmación en WMS",

            consequence:
            "Descuadres entre inventario físico y sistema.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Entregar pedido a proceso de packing",

            consequence:
            "Retrasos en despacho y afectación OTIF.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act11",

    pod:
    "media/evidencias/act11/pod",

    checklist:
    "media/evidencias/act11/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},



{

    id:12,

    number:"12",

    name:"Packing y Etiquetado",

    description:
    "Ejecutar el proceso de empaque, embalaje, etiquetado y validación final de los pedidos preparados, garantizando la integridad de la mercancía, exactitud documental y cumplimiento de los requisitos de despacho.",

    responsible:
    "Auxiliar de Packing",

    responsibilityDescription:
    "Responsable de validar el pedido preparado, ejecutar el empaque adecuado, generar etiquetas logísticas y asegurar que la mercancía cumpla los estándares de despacho establecidos por el cliente y JIT Logistics.",

    control:
    "Validación contra orden de picking, control de cantidades, revisión de referencias, inspección física y validación documental de despacho.",

    evidenceRecord:
    "Checklist packing, fotografías del pedido, etiquetas generadas, validación documental y registro WMS.",

    riskLevel:
    "CRITICO",

    riskDescription:[

        "Error de etiquetado",

        "Despacho incorrecto",

        "Daño de mercancía",

        "Faltantes de producto",

        "Pérdida de trazabilidad",

        "Incumplimiento OTIF",

        "Reclamos del cliente"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Packing",

        "Etiquetado Logístico",

        "Control Calidad",

        "WMS",

        "Trazabilidad Operacional"

    ],

    steps:[

        {

            text:"Recibir pedido desde picking",

            consequence:
            "Retrasos operativos y afectación del flujo de despacho.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar referencias preparadas",

            consequence:
            "Despacho incorrecto al cliente.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Verificar cantidades del pedido",

            consequence:
            "Faltantes o sobrantes en la entrega.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Inspeccionar estado físico de la mercancía",

            consequence:
            "Entrega de producto averiado al cliente.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Seleccionar material de empaque",

            consequence:
            "Daños durante transporte y manipulación.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Empacar mercancía",

            consequence:
            "Pérdida de integridad del producto durante distribución.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Generar etiquetas logísticas",

            consequence:
            "Errores de identificación y trazabilidad.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Aplicar etiquetas al pedido",

            consequence:
            "Despacho a destino incorrecto.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar documentación de despacho",

            consequence:
            "Problemas administrativos y devoluciones.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Liberar pedido para despacho",

            consequence:
            "Retrasos en transporte y afectación OTIF.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act12",

    pod:
    "media/evidencias/act12/pod",

    checklist:
    "media/evidencias/act12/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:13,

    number:"13",

    name:"Despacho Nacional",

    description:
    "Coordinar, validar y ejecutar el despacho de mercancía hacia clientes finales mediante la asignación de transporte, generación de documentación logística y control de salida del Centro de Distribución.",

    responsible:
    "Coordinador de Despachos",

    responsibilityDescription:
    "Responsable de garantizar que los pedidos preparados sean cargados correctamente, asignados al transporte adecuado y despachados cumpliendo las condiciones operativas, comerciales y de servicio definidas.",

    control:
    "Validación contra orden de despacho, manifiesto de carga, rutas asignadas, transportador autorizado y documentación de transporte.",

    evidenceRecord:
    "Manifiesto de carga, remisión, guía de transporte, registro fotográfico, control GPS y autorización de salida.",

    riskLevel:
    "CRITICO",

    riskDescription:[

        "Despacho incorrecto",

        "Pérdida de mercancía",

        "Incumplimiento OTIF",

        "Error documental",

        "Entrega a destino incorrecto",

        "Pérdida de trazabilidad",

        "Reclamos de clientes"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Despachos",

        "Distribución Nacional",

        "Trazabilidad Logística",

        "Control Documental",

        "Gestión de Transporte"

    ],

    steps:[

        {

            text:"Recibir pedidos liberados para despacho",

            consequence:
            "Retrasos operativos y afectación de la programación de entregas.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar documentación de despacho",

            consequence:
            "Errores administrativos y devoluciones de mercancía.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Asignar transportador autorizado",

            consequence:
            "Riesgos operativos y pérdida de control de la distribución.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Programar ruta de distribución",

            consequence:
            "Retrasos de entrega e incumplimiento OTIF.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Generar manifiesto de carga",

            consequence:
            "Falta de soporte legal y operativo del despacho.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Validar mercancía contra documentos",

            consequence:
            "Despachos errados y diferencias de inventario.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Realizar cargue del vehículo",

            consequence:
            "Daños de mercancía y pérdida de productividad.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Registrar salida en WMS",

            consequence:
            "Pérdida de trazabilidad del inventario.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Activar monitoreo de despacho",

            consequence:
            "Falta de seguimiento y control de entregas.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Autorizar salida del transporte",

            consequence:
            "Despachos sin control y riesgo de incumplimiento.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act13",

    pod:
    "media/evidencias/act13/pod",

    checklist:
    "media/evidencias/act13/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},


{

    id:14,

    number:"14",

    name:"Seguimiento y Control de Entregas",

    description:
    "Monitorear en tiempo real el proceso de distribución nacional mediante herramientas de seguimiento, control GPS, gestión de novedades y comunicación con clientes para garantizar el cumplimiento de los acuerdos de servicio establecidos.",

    responsible:
    "Torre de Control",

    responsibilityDescription:
    "Responsable de supervisar permanentemente las entregas en tránsito, gestionar novedades operativas, informar desviaciones y garantizar el cumplimiento de los indicadores OTIF.",

    control:
    "Monitoreo GPS, seguimiento de rutas, control de novedades, validación de tiempos de entrega y gestión de alertas operativas.",

    evidenceRecord:
    "Reporte GPS, registro de novedades, comunicaciones con transportadores, evidencias de seguimiento y dashboard operativo.",

    riskLevel:
    "CRITICO",

    riskDescription:[

        "Incumplimiento OTIF",

        "Pérdida de trazabilidad",

        "Retrasos de entrega",

        "Falta de comunicación con clientes",

        "Pérdida de mercancía",

        "Desviaciones de ruta",

        "Afectación nivel de servicio"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Torre de Control",

        "Tracking GPS",

        "Gestión de Novedades",

        "Servicio al Cliente",

        "Control OTIF",

        "Análisis Operacional"

    ],

    steps:[

        {

            text:"Recibir despachos liberados para monitoreo",

            consequence:
            "Pérdida de visibilidad sobre entregas programadas.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar activación de tracking GPS",

            consequence:
            "Imposibilidad de monitorear la operación en tránsito.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Monitorear rutas activas",

            consequence:
            "Retrasos y desviaciones no detectadas oportunamente.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Controlar tiempos estimados de llegada",

            consequence:
            "Incumplimiento de compromisos de entrega.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Detectar novedades operativas",

            consequence:
            "Escalamiento tardío de incidentes logísticos.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Registrar novedades en sistema",

            consequence:
            "Pérdida de trazabilidad de incidentes.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Informar novedades al cliente",

            consequence:
            "Insatisfacción del cliente y pérdida de confianza.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Gestionar planes de contingencia",

            consequence:
            "Incremento del impacto operacional.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Actualizar dashboard de seguimiento",

            consequence:
            "Información desactualizada para toma de decisiones.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Confirmar cumplimiento de entrega",

            consequence:
            "Imposibilidad de cerrar el ciclo logístico.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act14",

    pod:
    "media/evidencias/act14/pod",

    checklist:
    "media/evidencias/act14/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},

{

    id:15,

    number:"15",

    name:"POD y Evidencias de Entrega",

    description:
    "Recopilar, validar y registrar las evidencias formales de entrega al cliente final mediante POD físico o digital, garantizando trazabilidad, soporte documental y cierre operativo del servicio.",

    responsible:
    "Conductor y Torre de Control",

    responsibilityDescription:
    "Responsables de obtener, validar y custodiar las evidencias de entrega, garantizando que toda entrega realizada cuente con soporte documental verificable.",

    control:
    "Validación de firma cliente, fotografías, coordenadas GPS, fecha, hora y documentos de entrega.",

    evidenceRecord:
    "POD firmado, fotografías, georreferenciación GPS, remisión sellada y registro digital de entrega.",

    riskLevel:
    "CRITICO",

    riskDescription:[

        "Entrega sin evidencia",

        "Reclamos del cliente",

        "Pérdida de trazabilidad",

        "Imposibilidad de facturación",

        "Incumplimiento contractual",

        "Disputas legales",

        "Afectación OTIF"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "Proof Of Delivery",

        "Servicio al Cliente",

        "Control Documental",

        "Trazabilidad Logística",

        "Gestión de Evidencias"

    ],

    steps:[

        {

            text:"Realizar entrega al cliente",

            consequence:
            "Incumplimiento del servicio contratado.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Solicitar validación de recepción",

            consequence:
            "Falta de aceptación formal de la entrega.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Obtener firma del receptor",

            consequence:
            "Ausencia de soporte legal de entrega.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Registrar fecha y hora de entrega",

            consequence:
            "Imposibilidad de validar cumplimiento OTIF.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Capturar evidencia fotográfica",

            consequence:
            "Falta de soporte visual ante reclamaciones.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Validar coordenadas GPS",

            consequence:
            "Pérdida de trazabilidad geográfica de la entrega.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Registrar POD en sistema",

            consequence:
            "Imposibilidad de cierre documental.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Reportar novedades de entrega",

            consequence:
            "Falta de gestión de incidencias.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Enviar evidencia a Torre de Control",

            consequence:
            "Retrasos en validación y cierre del servicio.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Confirmar cierre de entrega",

            consequence:
            "Imposibilidad de continuar al cierre OTIF.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act15",

    pod:
    "media/evidencias/act15/pod",

    checklist:
    "media/evidencias/act15/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

},

{

    id:16,

    number:"16",

    name:"Cierre OTIF y KPI Ejecutivo",

    description:
    "Consolidar, validar y analizar los resultados operativos de la operación logística integral 3PL mediante el cálculo de indicadores OTIF, productividad, exactitud de inventario, nivel de servicio y cumplimiento operativo para la toma de decisiones y mejora continua.",

    responsible:
    "Torre de Control y Gerencia Operativa",

    responsibilityDescription:
    "Responsables de consolidar la información operacional, validar el cumplimiento de los indicadores estratégicos y generar los reportes ejecutivos requeridos para el control de la operación.",

    control:
    "Validación de OTIF, POD, productividad, exactitud de inventario, nivel de servicio, novedades operativas y cumplimiento contractual.",

    evidenceRecord:
    "Dashboard KPI, reporte OTIF, informe gerencial, reporte productividad, reporte inventarios y plan de mejora.",

    riskLevel:
    "CRITICO",

    riskDescription:[

        "Indicadores incorrectos",

        "Toma de decisiones errónea",

        "Pérdida de trazabilidad",

        "Errores de facturación",

        "Incumplimiento contractual",

        "Afectación rentabilidad",

        "Falta de mejora continua"

    ],

    evaluation:
    {
        questions:5,

        passingScore:80,

        attempts:3
    },

    competencies:[

        "OTIF",

        "KPI Logísticos",

        "Business Intelligence",

        "Análisis Operacional",

        "Control de Gestión",

        "Mejora Continua"

    ],

    steps:[

        {

            text:"Consolidar entregas realizadas",

            consequence:
            "Indicadores incompletos y pérdida de confiabilidad.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Validar POD recibidos",

            consequence:
            "Entregas sin soporte documental.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Calcular indicador OTIF",

            consequence:
            "Medición incorrecta del nivel de servicio.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Analizar cumplimiento de entregas",

            consequence:
            "Desviaciones operativas no identificadas.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Evaluar productividad operativa",

            consequence:
            "Falta de control sobre eficiencia operativa.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Analizar exactitud de inventario",

            consequence:
            "Pérdida de control sobre inventarios.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        },

        {

            text:"Consolidar novedades operativas",

            consequence:
            "Repetición de errores y ausencia de mejora continua.",

            lmsLink:"#",

            resourceType:"audio",

            resourceUrl:""

        },

        {

            text:"Actualizar dashboard ejecutivo",

            consequence:
            "Información desactualizada para la gerencia.",

            lmsLink:"#",

            resourceType:"url",

            resourceUrl:""

        },

        {

            text:"Generar informe gerencial",

            consequence:
            "Falta de información para toma de decisiones.",

            lmsLink:"#",

            resourceType:"pdf",

            resourceUrl:""

        },

        {

            text:"Definir acciones de mejora",

            consequence:
            "Persistencia de desviaciones operativas.",

            lmsLink:"#",

            resourceType:"video",

            resourceUrl:""

        },

        {

            text:"Cerrar período operacional",

            consequence:
            "Falta de control formal del ciclo operativo.",

            lmsLink:"#",

            resourceType:"image",

            resourceUrl:""

        }

    ],

    video:
    "https://drive.google.com",

    images:
    "https://drive.google.com",

    pdf:
    "https://drive.google.com",

    audio:
    "https://drive.google.com",

    url:
    "https://www.jit.com.co",

    evidence:
    "media/evidencias/act16",

    pod:
    "media/evidencias/act16/pod",

    checklist:
    "media/evidencias/act16/checklist",

    version:"1.0",

    status:"ACTIVO",

    createdBy:"JIT Logistics",

    updatedDate:"2026-06-22"

}
];