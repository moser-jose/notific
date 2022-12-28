const data={
    category:[
      {
        id:1,
        name:"Todos 📰"
      },
      {
        id:2,
        name:"Igreja Local"
      },
      {
        id:3,
        name:"Desbravadores"
      },
      {
        id:4,
        name:"Jovens Adultos"
      },
      {
        id:5,
        name:"União"
      },
      {
        id:6,
        name:"Ministério da Mulher"
      }
    ],
    data:[
      {
        id: 1,
        title: 'Ensaio no coral jovem do huambo',
        user:{
          name:"Moser José",
          user:"moser.jose",
          image:require('./src/assets/img/img.jpeg'),
      },
        description:"Hoje quando forem 14:00h haverá ensaios do coral jovem do humabo na central todos os jovens poderão estar presentes mais infelismente nem todos poderão participar",
        data:"2022-12-01 16:30:00",
        image:require('./src/assets/img/img.jpeg'),
        category:{
          id:2,
          name:"Igreja Local"
        },
      },
      {
        id: 2,
        title: 'Reunião dos anciãos  hoje quando terminar o programa de tarde',
        user:{
            name:"Jorge Andre",
            user:"jorge.andre",
            image:require('./src/assets/img/img1.jpeg'),
        },
        description:"Hoje quando forem 14:00h haverá ensaios do coral jovem do humabo na central",
        data:"2022-12-25 10:10:00",
        image:require('./src/assets/img/img1.jpeg'),
        category:{
          id:2,
          name:"Igreja Local"
        }
      },
      {
        id: 3,
        title: 'Tarde de louvor e adoração na central do huambo',
        user:{
            name:"Jorge Andre",
            user:"jorge.andre",
            image:require('./src/assets/img/img1.jpeg'),
        },
        description:"",
        data:"2022-12-25 10:10:00",
        image:require('./src/assets/img/img1.jpeg'),
        category:{
          id:4,
          name:"Jovens Adultos"
        }
      }
    ], 
    users:[{
      id:1,
      name:"Moser Zeferino Vicente José",
      user:"moser.jose",
      email:"mosmmy@gmail.com",
      telefone:"923819414",
      image:require('./src/assets/img/img1.jpeg'),
    },
    {
      id:2,
      name:"Mateus dos Santos Andre",
      user:"mateus.andre",
      email:"mateus@gmail.com",
      telefone:"922000000",
      image:require('./src/assets/img/img.jpeg'),
    },
    {
      id:3,
      name:"Marcos João Manuel Pedro",
      user:"marcos.pedro",
      email:"pedro@gmail.com",
      telefone:"920112222 fg",
      image:require('./src/assets/img/img1.jpeg'),
    },
  ]
}

export {data}