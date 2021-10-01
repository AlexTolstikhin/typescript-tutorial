interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character }
    [prop: string]: string;
    id: string;
};


const errorBag: ErrorContainer = {
   id: '1',
   email: 'Not a valid email',
   some: 'Some here',
   foo: 'multiple properties with Index properties are available'
}