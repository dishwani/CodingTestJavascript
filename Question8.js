/*
    The object given in the problem cannot be sorted as it has dupplicate properties.
    The creation of such object is not at all possible.
    Assuming the proper format of the array of object, i have written the following code. 
 */
var arrayOfObjects = [   
    {
        name: 'abc',
        id: 4,
    },
    {

        name: 'ab2',
        id: 10,
    },
    {            
        name: 'abc3',
        id: 5,
    },    
    {
        name: 'abc5',
        id: 6,
    }
];

var byId = arrayOfObjects.slice(0);
byId.sort((a,b) => {
    return a.id - b.id;
});
console.log('by id:');
console.log(byId);