const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Alex',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

// you can push in the new one item but don't declare three of arrays item like role: [1, "string", "string"]
person.role.push('admin');
// can't reassign the value from string to number
person.role[1] = 0

console.log(person.name)