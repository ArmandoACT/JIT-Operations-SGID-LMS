const processInfo = {

    processName:
    "Operación Logística Integral 3PL",

    objective:
    "Garantizar la recepción, almacenamiento, preparación, despacho y entrega de mercancía cumpliendo los niveles de servicio establecidos.",

    scope:
    "Desde la recepción de la programación del cliente hasta el cierre OTIF y gestión de evidencias.",

    inputs:[

        "Programación cliente",
        "Ordenes de despacho",
        "Inventario disponible",
        "Recursos operativos"

    ],

    outputs:[

        "Pedido entregado",
        "OTIF reportado",
        "POD registrado",
        "Evidencias almacenadas"

    ],

    interactions:[

        "Cliente",
        "WMS",
        "Transporte",
        "Facturación",
        "Calidad"

    ],

    definitions:[

        {
            term:"OTIF",
            description:"On Time In Full"
        },

        {
            term:"POD",
            description:"Proof Of Delivery"
        },

        {
            term:"WMS",
            description:"Warehouse Management System"
        }

    ]

};