export const cards= [
    {
        title : 'Total Revenue',
        icon : true,
        value : '64,492',
        type : 'amount'
    },
    {
        title : 'Total Jobs Avg',
        icon : false,
        value : '608',
        type : 'amount'
    },
    {
        title : 'Total Created',
        icon : false,
        value : '106',
        type : 'num'
    },
    {
        title : 'Total Scheduled',
        icon : false,
        value : '66',
        type : 'num'
    },
    {
        title : 'Outstanding Amount',
        icon : true,
        value : '19,304.52',
        type : 'amount'
    },
    {
        title : 'Membership Sold',
        icon : false,
        value : '0',
        type : 'num'
    },
    {
        title : 'Jobs Completed',
        icon : false,
        value : '8',
        type : 'num'
    },
    {
        title : 'Total Cancelled',
        icon : false,
        value : '2',
        type : 'num'
    },
];


export const charts = {
 data1 : {
    title : "Revenue By Job Location",
    series : [
        { x: "Social Circle", y: 2000 },
        { x: "Malibu", y: 4000 },
        { x: "Snomohish", y: 6000 },
        { x: "New York", y: 8000 },
        { x: "Everett", y: 10000 },
        { x: "Seattle", y: 12000 },
        { x: "London", y: 12000 },
      ]
 },
       data2 : {
        title : "Revenue By Job Type",
        series : [
            { x: "Alarm System", y: 30000 },
            { x: "Backflow Testing", y: 17000 },
            { x: "Diagnosis", y: 8200 },
            { x: "Fire Extinguisher", y: 7500 },
            { x: "Pump", y: 2000 },
          ]
       }
}



