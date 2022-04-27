export const db = {
    students : [
        {
            id: 1,
            name: 'Marko',
            age: 20,
            gender: "M",
            classroom: 1
        },
        {
            id: 2,
            name: 'Moataz',
            age: 22,
            gender: "M",
            classroom: 2
        },
        {
            id: 3,
            name: 'Foulena',
            age: 22,
            gender: "F",
            classroom: 3
        },
        {
            id: 4,
            name: 'Fouleni',
            age: 22,
            gender: "M",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3/1'
        },{
            id: 2,
            designation: 'GL3/2'
        },{
            id: 3,
            designation: 'GL3/3'
        },
    ],
    todos : [
        {
            id: "1",
            name:"test1",
            content:"content 1",
            status : "WAITING",
            user: "2"
        },
        {
            id: "2",
            name:"test 2",
            content:"content 2",
            status : "WAITING",
            user : "1"
        },
        {
            id: "3",
            name:"test 3",
            content:"content 3",
            status : "IN_PROGRESS",
            user: "1"
        }
    ],
    users : [
        {
            id: "1",
            name: "moataz",
            email: "moataz@gmail.com",
            todos: ["2","3"]
        },
        {
            id: "2",
            name: "amine",
            email: "amine@gmail.com",
            todos: ["1"]
        }
    ]
}
