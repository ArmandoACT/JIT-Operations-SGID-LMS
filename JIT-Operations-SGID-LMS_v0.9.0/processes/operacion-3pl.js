/* =========================================================

JIT LOGISTICS 3PL
SGID CORPORATIVO
PROCESO MAESTRO OP3PL
VERSIÓN 3.0

BLOQUES 0 - 5

========================================================= */

const processOperacion3PL = {

...processTemplate,

id:"P001",

code:"OP3PL",

version:"3.0",

name:
"Operación Logística Integral 3PL",

owner:
"Gerencia Operativa",

objective:
"Garantizar la administración integral de la operación logística 3PL mediante procesos estandarizados de recepción, almacenamiento, administración de inventarios, preparación de pedidos, despacho, distribución y control operacional, asegurando trazabilidad, cumplimiento OTIF, satisfacción del cliente, optimización de recursos y rentabilidad del servicio.",

scope:
"Aplica desde la recepción de la programación operativa emitida por el cliente, incluyendo recepción física de producto terminado, transporte, validación documental, almacenamiento, administración de inventarios, preparación de pedidos, despacho, seguimiento, entrega, gestión de evidencias, análisis de indicadores y cierre OTIF, finalizando con la consolidación de resultados operativos y reporte ejecutivo de desempeño.",



flow:[

    {
        step:"01",
        code:"ACT01",
        description:
        "Recepción Programación desde Producción",
        responsible:
        "Coordinador Operativo"
    },

    {
        step:"02",
        code:"ACT02",
        description:
        "Recepción Producto Terminado Planta",
        responsible:
        "Supervisor Operativo"
    },

    {
        step:"03",
        code:"ACT03",
        description:
        "Cargue Vehículo Transporte",
        responsible:
        "Supervisor Despachos"
    },

    {
        step:"04",
        code:"ACT04",
        description:
        "Transporte Planta CEDI",
        responsible:
        "Transportador"
    },

    {
        step:"05",
        code:"ACT05",
        description:
        "Recepción Mercancía CEDI",
        responsible:
        "Supervisor Recepción"
    },

    {
        step:"06",
        code:"ACT06",
        description:
        "Validación Documental y SKU",
        responsible:
        "Auxiliar Inventarios"
    },

    {
        step:"07",
        code:"ACT07",
        description:
        "Registro Inventario WMS",
        responsible:
        "Administrador WMS"
    },

    {
        step:"08",
        code:"ACT08",
        description:
        "Ubicación y Almacenamiento de Mercancía",
        responsible:
        "Auxiliar Bodega"
    },

    {
        step:"09",
        code:"ACT09",
        description:
        "Inventario Cíclico y Control de Exactitud",
        responsible:
        "Líder Inventarios"
    },

    {
        step:"10",
        code:"ACT10",
        description:
        "Liberación Pedidos Clientes",
        responsible:
        "Coordinador Operativo"
    },

    {
        step:"11",
        code:"ACT11",
        description:
        "Picking Operacional",
        responsible:
        "Auxiliar Picking"
    },

    {
        step:"12",
        code:"ACT12",
        description:
        "Packing y Etiquetado",
        responsible:
        "Auxiliar Packing"
    },

    {
        step:"13",
        code:"ACT13",
        description:
        "Despacho Nacional",
        responsible:
        "Coordinador Transporte"
    },

    {
        step:"14",
        code:"ACT14",
        description:
        "Seguimiento y Control de Entregas",
        responsible:
        "Torre de Control"
    },

    {
        step:"15",
        code:"ACT15",
        description:
        "POD y Evidencias de Entrega",
        responsible:
        "Torre de Control"
    },

    {
        step:"16",
        code:"ACT16",
        description:
        "Cierre OTIF y KPI Ejecutivo",
        responsible:
        "Gerencia Operativa"
    }

],




   inputs:[

   
    {
        item:
        "Programación Operativa Cliente",
        source:
        "Cliente"
    },

    {
        item:
        "Producto Terminado",
        source:
        "Planta Producción"
    },

    {
        item:
        "Órdenes de Venta",
        source:
        "ERP Cliente"
    },

    {
        item:
        "Maestro SKU",
        source:
        "ERP Cliente"
    },

    {
        item:
        "Base Clientes Destino",
        source:
        "Cliente"
    },

    {
        item:
        "Acuerdos de Nivel de Servicio SLA",
        source:
        "Contrato Comercial"
    },

    {
        item:
        "Política de Calidad",
        source:
        "SGI"
    },

    {
        item:
        "Política SST",
        source:
        "SGI"
    },

    {
        item:
        "Tarifario Logístico",
        source:
        "Finanzas"
    },

    {
        item:
        "Recursos Operativos",
        source:
        "JIT Logistics"
    }


   ],



outputs:[

    {
        item:
        "Producto Almacenado",
        destination:
        "CEDI"
    },

    {
        item:
        "Inventario Actualizado",
        destination:
        "WMS"
    },

    {
        item:
        "Pedido Preparado",
        destination:
        "Despacho"
    },

    {
        item:
        "Despacho Ejecutado",
        destination:
        "Cliente"
    },

    {
        item:
        "Entrega Confirmada",
        destination:
        "Cliente"
    },

    {
        item:
        "POD Consolidado",
        destination:
        "Archivo Operativo"
    },

    {
        item:
        "Indicadores OTIF",
        destination:
        "Gerencia"
    },

    {
        item:
        "Reporte Ejecutivo",
        destination:
        "Dirección"
    },

    {
        item:
        "Facturación Soportada",
        destination:
        "Finanzas"
    }

],



interactions:[

    {
        process:
        "Producción",
        relationship:
        "Suministro Producto Terminado"
    },

    {
        process:
        "Comercial",
        relationship:
        "Programación Cliente"
    },

    {
        process:
        "Servicio al Cliente",
        relationship:
        "Gestión Requerimientos"
    },

    {
        process:
        "Transporte",
        relationship:
        "Distribución Nacional"
    },

    {
        process:
        "Inventarios",
        relationship:
        "Control Existencias"
    },

    {
        process:
        "Calidad",
        relationship:
        "Auditoría Operacional"
    },

    {
        process:
        "Seguridad y Salud en el Trabajo",
        relationship:
        "Control Riesgos"
    },

    {
        process:
        "Finanzas",
        relationship:
        "Facturación y Rentabilidad"
    },

    {
        process:
        "Tecnología",
        relationship:
        "ERP WMS TMS"
    },

    {
        process:
        "Gerencia",
        relationship:
        "Control Estratégico"
    }

],


responsibilities:[

{
    role:"Gerencia Operativa",
    authority:"Dirección estratégica, aprobación de recursos, definición de indicadores y toma de decisiones operativas."
},

{
    role:"Coordinador Operativo",
    authority:"Planificación operativa, asignación de recursos y cumplimiento del servicio."
},

{
    role:"Supervisor Operativo",
    authority:"Control diario de la operación, seguimiento de actividades y gestión de novedades."
},

{
    role:"Líder Inventarios",
    authority:"Administración y exactitud de inventarios, control de ubicaciones y conteos cíclicos."
},

{
    role:"Administrador WMS",
    authority:"Parametrización, administración y control de movimientos en el sistema WMS."
},

{
    role:"Coordinador Transporte",
    authority:"Programación de vehículos, asignación de rutas y seguimiento de entregas."
},

{
    role:"Torre de Control",
    authority:"Monitoreo OTIF, seguimiento GPS, gestión de novedades y trazabilidad."
},

{
    role:"Auxiliar Recepción",
    authority:"Recepción física y documental de mercancías."
},

{
    role:"Auxiliar Inventarios",
    authority:"Validación SKU, conteos y registros operativos."
},

{
    role:"Auxiliar Picking",
    authority:"Preparación de pedidos según orden de despacho."
},

{
    role:"Auxiliar Packing",
    authority:"Empaque, etiquetado y aseguramiento de pedidos."
},

{
    role:"Auxiliar Despacho",
    authority:"Liberación física de pedidos y control documental."
},

{
    role:"Analista KPI",
    authority:"Consolidación y análisis de indicadores operativos."
},

{
    role:"Calidad",
    authority:"Auditoría de procesos y control de cumplimiento SGI."
},

{
    role:"SST",
    authority:"Control de riesgos operacionales y cumplimiento SST."
},

{
    role:"Tecnología",
    authority:"Soporte ERP, WMS, LMS y SGID."
}

],



definitions:[

{
    term:"3PL",
    description:"Third Party Logistics o Logística de Terceros."
},

{
    term:"CEDI",
    description:"Centro de Distribución."
},

{
    term:"WMS",
    description:"Warehouse Management System."
},

{
    term:"ERP",
    description:"Enterprise Resource Planning."
},

{
    term:"TMS",
    description:"Transportation Management System."
},

{
    term:"OTIF",
    description:"On Time In Full. Entrega completa y a tiempo."
},

{
    term:"POD",
    description:"Proof Of Delivery o evidencia de entrega."
},

{
    term:"SKU",
    description:"Código único de identificación de producto."
},

{
    term:"FIFO",
    description:"First In First Out."
},

{
    term:"FEFO",
    description:"First Expired First Out."
},

{
    term:"SLA",
    description:"Service Level Agreement."
},

{
    term:"Picking",
    description:"Proceso de preparación y selección de pedidos."
},

{
    term:"Packing",
    description:"Proceso de empaque y acondicionamiento."
},

{
    term:"Cross Docking",
    description:"Transferencia directa sin almacenamiento."
},

{
    term:"Inventario Cíclico",
    description:"Conteos programados para validar exactitud."
},

{
    term:"Tracking GPS",
    description:"Seguimiento satelital de vehículos."
},

{
    term:"SGID",
    description:"Sistema de Gestión Integral Digital."
},

{
    term:"LMS",
    description:"Learning Management System corporativo."
}


],



activities:[

{
    id:"ACT01",
    number:"01",
    name:"Recepción Programación desde Producción",
    responsible:"Coordinador Operativo",
    lmsReference:"activities.js -> id:1"
},

{
    id:"ACT02",
    number:"02",
    name:"Recepción Producto Terminado Planta",
    responsible:"Supervisor Operativo",
    lmsReference:"activities.js -> id:2"
},

{
    id:"ACT03",
    number:"03",
    name:"Cargue Vehículo Transporte",
    responsible:"Supervisor Despachos",
    lmsReference:"activities.js -> id:3"
},

{
    id:"ACT04",
    number:"04",
    name:"Transporte Planta CEDI",
    responsible:"Conductor",
    lmsReference:"activities.js -> id:4"
},

{
    id:"ACT05",
    number:"05",
    name:"Recepción Mercancía CEDI",
    responsible:"Supervisor Recepción",
    lmsReference:"activities.js -> id:5"
},

{
    id:"ACT06",
    number:"06",
    name:"Validación Documental y SKU",
    responsible:"Auxiliar Inventarios",
    lmsReference:"activities.js -> id:6"
},

{
    id:"ACT07",
    number:"07",
    name:"Registro Inventario WMS",
    responsible:"Administrador WMS",
    lmsReference:"activities.js -> id:7"
},

{
    id:"ACT08",
    number:"08",
    name:"Ubicación y Almacenamiento",
    responsible:"Auxiliar Bodega",
    lmsReference:"activities.js -> id:8"
},

{
    id:"ACT09",
    number:"09",
    name:"Inventario Cíclico y Control Exactitud",
    responsible:"Líder Inventarios",
    lmsReference:"activities.js -> id:9"
},

{
    id:"ACT10",
    number:"10",
    name:"Liberación Pedidos Clientes",
    responsible:"Coordinador Operativo",
    lmsReference:"activities.js -> id:10"
},

{
    id:"ACT11",
    number:"11",
    name:"Picking Operacional",
    responsible:"Auxiliar Picking",
    lmsReference:"activities.js -> id:11"
},

{
    id:"ACT12",
    number:"12",
    name:"Packing y Etiquetado",
    responsible:"Auxiliar Packing",
    lmsReference:"activities.js -> id:12"
},

{
    id:"ACT13",
    number:"13",
    name:"Despacho Nacional",
    responsible:"Coordinador Transporte",
    lmsReference:"activities.js -> id:13"
},

{
    id:"ACT14",
    number:"14",
    name:"Seguimiento y Control de Entregas",
    responsible:"Torre de Control",
    lmsReference:"activities.js -> id:14"
},

{
    id:"ACT15",
    number:"15",
    name:"POD y Evidencias de Entrega",
    responsible:"Torre de Control",
    lmsReference:"activities.js -> id:15"
},

{
    id:"ACT16",
    number:"16",
    name:"Cierre OTIF y KPI Ejecutivo",
    responsible:"Gerencia Operativa",
    lmsReference:"activities.js -> id:16"
}

],



indicators:[


{
    code:"IND-01",
    indicator:"OTIF",
    objective:"Medir el cumplimiento de entregas completas y a tiempo.",
    formula:"Entregas OTIF / Total Entregas * 100",
    frequency:"Diaria",
    target:"98%",
    responsible:"Torre de Control"
},

{
    code:"IND-02",
    indicator:"Exactitud Inventario",
    objective:"Controlar la precisión de los inventarios.",
    formula:"Conteos Correctos / Conteos Totales * 100",
    frequency:"Mensual",
    target:"99%",
    responsible:"Líder Inventarios"
},

{
    code:"IND-03",
    indicator:"Productividad Picking",
    objective:"Medir eficiencia del proceso de preparación.",
    formula:"Líneas Preparadas / Hora",
    frequency:"Diaria",
    target:"95%",
    responsible:"Supervisor Operativo"
},

{
    code:"IND-04",
    indicator:"Productividad Packing",
    objective:"Medir eficiencia del proceso de empaque.",
    formula:"Pedidos Empacados / Hora",
    frequency:"Diaria",
    target:"95%",
    responsible:"Supervisor Operativo"
},

{
    code:"IND-05",
    indicator:"Nivel de Servicio",
    objective:"Evaluar cumplimiento de SLA.",
    formula:"Pedidos Cumplidos / Pedidos Programados * 100",
    frequency:"Mensual",
    target:"98%",
    responsible:"Gerencia Operativa"
},

{
    code:"IND-06",
    indicator:"Diferencias Inventario",
    objective:"Controlar desviaciones de inventario.",
    formula:"Diferencias Detectadas / Total SKU *100",
    frequency:"Mensual",
    target:"<0.5%",
    responsible:"Líder Inventarios"
},

{
    code:"IND-07",
    indicator:"Tiempo Promedio Despacho",
    objective:"Controlar tiempos de salida.",
    formula:"Tiempo Total / Pedidos Despachados",
    frequency:"Diaria",
    target:"≤ SLA",
    responsible:"Coordinador Transporte"
}


],



documents:[


"Manual Corporativo SGID",
"Procedimiento Operación Logística 3PL",
"Procedimiento Recepción de Mercancías",
"Procedimiento Administración Inventarios",
"Procedimiento Picking",
"Procedimiento Packing",
"Procedimiento Despacho Nacional",
"Procedimiento Transporte",
"Procedimiento Gestión POD",
"Procedimiento OTIF",
"Política Calidad",
"Política SST",
"Manual WMS",
"Manual ERP",
"Manual LMS",
"Formato Recepción Mercancías",
"Formato Inventario",
"Formato Picking",
"Formato Packing",
"Formato Despacho",
"Formato POD",
"Formato Novedades",
"Formato OTIF",
"Checklist Recepción",
"Checklist Despacho"


],


qualityControls:[


"ERP Corporativo",
"WMS",
"TMS",
"LMS Corporativo",
"SGID",
"Tracking GPS",
"Scanner Código Barras",
"Radiofrecuencia RF",
"Handheld Inventarios",
"Etiquetadoras Zebra",
"Impresoras Térmicas",
"Básculas Certificadas",
"CCTV Operativo",
"Checklists Digitales",
"Dashboard KPI",
"Control FEFO",
"Control FIFO",
"Auditorías Internas",
"Conteos Cíclicos",
"Validaciones OTIF"

],


controlPoints:[

{
    item:"Cumplimiento OTIF",
    criteria:"Meta mínima 98%"
},

{
    item:"Exactitud Inventario",
    criteria:"Meta mínima 99%"
},

{
    item:"Estado de Mercancía",
    criteria:"Sin daños ni averías"
},

{
    item:"Trazabilidad SKU",
    criteria:"100% trazabilidad en WMS"
},

{
    item:"Cumplimiento SLA",
    criteria:"Cumplimiento contractual"
},

{
    item:"Productividad Picking",
    criteria:"Meta mínima 95%"
},

{
    item:"Productividad Packing",
    criteria:"Meta mínima 95%"
},

{
    item:"Tiempo de Despacho",
    criteria:"Dentro del SLA"
},

{
    item:"Tiempo de Recepción",
    criteria:"Dentro del estándar operativo"
},

{
    item:"Control FEFO/FIFO",
    criteria:"100% cumplimiento"
},

{
    item:"Seguridad Operacional",
    criteria:"0 incidentes críticos"
},

{
    item:"Novedades Transporte",
    criteria:"Gestión inmediata"
},

{
    item:"Control GPS",
    criteria:"100% monitoreo"
},

{
    item:"Disponibilidad Inventario",
    criteria:"Mayor al 98%"
},

{
    item:"Cumplimiento SST",
    criteria:"100% cumplimiento legal"
},

{
    item:"Rentabilidad Operacional",
    criteria:"Margen positivo definido"
}

],


improvements:[


{
    action:"Automatización Integración ERP-WMS",
    priority:"Alta",
    responsible:"Tecnología"
},

{
    action:"Optimización Layout CEDI",
    priority:"Alta",
    responsible:"Gerencia Operativa"
},

{
    action:"Reducción Tiempos Picking",
    priority:"Alta",
    responsible:"Supervisor Operativo"
},

{
    action:"Reducción Tiempos Packing",
    priority:"Alta",
    responsible:"Supervisor Operativo"
},

{
    action:"Incrementar Exactitud Inventario",
    priority:"Alta",
    responsible:"Líder Inventarios"
},

{
    action:"Optimización Rutas Transporte",
    priority:"Alta",
    responsible:"Coordinador Transporte"
},

{
    action:"Fortalecer Control OTIF",
    priority:"Alta",
    responsible:"Torre de Control"
},

{
    action:"Capacitación Continua LMS",
    priority:"Media",
    responsible:"RRHH"
},

{
    action:"Automatización Evidencias POD",
    priority:"Media",
    responsible:"Tecnología"
},

{
    action:"Implementación BI Ejecutivo",
    priority:"Media",
    responsible:"Gerencia"
}


],



annexes:[

{
    name:"Mapa Maestro de Procesos",
    url:""
},

{
    name:"Flujograma Operación 3PL",
    url:""
},

{
    name:"Layout General CEDI",
    url:""
},

{
    name:"Organigrama Operacional",
    url:""
},

{
    name:"Matriz RACI",
    url:""
},

{
    name:"Matriz de Riesgos",
    url:""
},

{
    name:"Dashboard Ejecutivo KPI",
    url:""
},

{
    name:"Dashboard OTIF",
    url:""
},

{
    name:"Dashboard Inventarios",
    url:""
},

{
    name:"Dashboard Transporte",
    url:""
},

{
    name:"Procedimientos LMS",
    url:""
},

{
    name:"Videos Capacitación LMS",
    url:""
},

{
    name:"Capturas ERP",
    url:""
},

{
    name:"Capturas WMS",
    url:""
},

{
    name:"Capturas SGID",
    url:""
},

{
    name:"Capturas TMS",
    url:""
},

{
    name:"Matriz Competencias",
    url:""
},

{
    name:"Plan Emergencias",
    url:""
},

{
    name:"Plan Continuidad Operacional",
    url:""
},

{
    name:"Plan Mejoramiento",
    url:""
}

],

risks:[

{
    risk:"Error de Inventario",
    impact:"ALTO",
    control:"Conteos Cíclicos",
    measurement:"Exactitud Inventario ≥ 99%",
    actions:[
        "Auditoría semanal",
        "Validación WMS",
        "Reconteo físico"
    ]
},

{
    risk:"Entrega Fuera de Tiempo",
    impact:"ALTO",
    control:"Monitoreo OTIF",
    measurement:"OTIF ≥ 98%",
    actions:[
        "Seguimiento GPS",
        "Control Torre de Control"
    ]
},

{
    risk:"Daño de Mercancía",
    impact:"MEDIO",
    control:"Inspección Operativa",
    measurement:"Menor al 1%",
    actions:[
        "Inspección recepción",
        "Control packing"
    ]
},

{
    risk:"Error Picking",
    impact:"ALTO",
    control:"Doble Validación",
    measurement:"Exactitud Picking ≥ 99%",
    actions:[
        "Escaneo SKU",
        "Control supervisor"
    ]
},

{
    risk:"Pérdida de Trazabilidad",
    impact:"ALTO",
    control:"Control WMS",
    measurement:"100% trazabilidad",
    actions:[
        "Registro obligatorio",
        "Auditoría diaria"
    ]
}

],

frequencies:[

{
    activity:"Recepción Mercancía",
    frequency:"Diaria"
},

{
    activity:"Inventario Cíclico",
    frequency:"Semanal"
},

{
    activity:"Auditoría Picking",
    frequency:"Semanal"
},

{
    activity:"Control OTIF",
    frequency:"Diaria"
},

{
    activity:"Comité Operativo",
    frequency:"Mensual"
},

{
    activity:"Revisión KPI",
    frequency:"Mensual"
}

],

consequences:[

{
    activity:"Recepción Programación",
    consequence:"Errores de planeación y afectación OTIF."
},

{
    activity:"Recepción Producto",
    consequence:"Diferencias de inventario desde origen."
},

{
    activity:"Validación SKU",
    consequence:"Pérdida de trazabilidad."
},

{
    activity:"Inventario WMS",
    consequence:"Información incorrecta en sistema."
},

{
    activity:"Picking",
    consequence:"Errores de despacho al cliente."
},

{
    activity:"Packing",
    consequence:"Daños durante transporte."
},

{
    activity:"Despacho",
    consequence:"Incumplimiento de SLA."
},

{
    activity:"Entrega",
    consequence:"Pérdida de satisfacción del cliente."
},

{
    activity:"POD",
    consequence:"Falta de soporte de facturación."
},

{
    activity:"Cierre OTIF",
    consequence:"Indicadores incorrectos para gerencia."
}

],

kpis:[

{
    name:"OTIF",
    target:"98%",
    current:"98%",
    responsible:"Torre de Control"
},

{
    name:"Exactitud Inventario",
    target:"99%",
    current:"99.2%",
    responsible:"Líder Inventarios"
},

{
    name:"Productividad Picking",
    target:"95%",
    current:"96%",
    responsible:"Supervisor Operativo"
},

{
    name:"Productividad Packing",
    target:"95%",
    current:"95%",
    responsible:"Supervisor Operativo"
},

{
    name:"Nivel de Servicio",
    target:"98%",
    current:"98.5%",
    responsible:"Gerencia Operativa"
},

{
    name:"Diferencias Inventario",
    target:"<0.5%",
    current:"0.3%",
    responsible:"Líder Inventarios"
},

{
    name:"Tiempo Promedio Despacho",
    target:"≤ SLA",
    current:"Cumple",
    responsible:"Coordinador Transporte"
}

],

}
