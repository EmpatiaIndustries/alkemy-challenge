import Delete from "../Components/DeleteButton/DeleteButton";
import Update from "../Components/UpdateButton/UpdateButton";

export const data_mounts = {
    columns: [{
            label: "#",
            field: "id",
            sort: "asc",
        },
        {
            label: "Motivo",
            field: "reason",
            sort: "asc",
        },
        {
            label: "Tipo",
            field: "type",
            sort: "asc",
        },
        {
            label: "Monto",
            field: "money",
            sort: "asc",
        },
        {
            label: "Fecha",
            field: "date",
            sort: "asc",
        },
        {
            label: "Editar",
            field: "update",
            sort: "asc",
        },
        {
            label: "Eliminar",
            field: "delete",
            sort: "asc",
        },
    ],
    rows: [{
            id: "1",
            reason: "comida",
            type: "egreso",
            money: 25000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "2",
            reason: "deuda de un amigo",
            type: "ingreso",
            money: 25000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "3",
            reason: "postre",
            type: "egreso",
            money: 3000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "4",
            reason: "cuentas por pagar",
            type: "egreso",
            money: 40000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "5",
            reason: "prestamo a mis padres",
            type: "ingreso",
            money: 50000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "6",
            reason: "comida para gato",
            type: "egreso",
            money: 5000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "7",
            reason: "prestamo a mis padres",
            type: "ingreso",
            money: 50000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "8",
            reason: "sueldo",
            type: "ingreso",
            money: 500000,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "9",
            reason: "paltas",
            type: "egreso",
            money: 5200,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
        {
            id: "10",
            reason: "pasaje",
            type: "egreso",
            money: 1500,
            date: "20-02-2021",
            update: < Update / > ,
            delete: < Delete / > ,
        },
    ],
};