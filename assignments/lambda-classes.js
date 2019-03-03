// CODE here for your Lambda Classes

// ======================Classes==========================

// Person Class
class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
        this.gender = atts.location;
    }
    speak() {
        return `Hello; my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Instructor Class
class Instructor extends Person {
    constructor(atts) {
        super(atts);
        this.specialty = atts.specialty;
        this.favLanguage = atts.favLanguage;
        this.catchPhrase = atts.catchPhrase;
    }
    demo(String) {
        return `Today we are learning about ${String}.`;
    }
    grade(student, String) {
        return `${student.name} recieves a perfect score on ${String}.`;
    }
    randomGrade(student) {
        const random = (x) => Math.ceil(Math.random() * 1.5 * x);
        student.grade = random(student.grade);
        return ` ${this.name} modified ${student.name}\'s grade to be ${student.grade}...`;
    }
}

// Student Class
class Student extends Person {
    constructor(atts) {
        super(atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className;
        this.favSubjects = atts.favSubjects;
        this.grade = atts.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(String) {
        return `${this.name} has submitted a PR for ${String}.`;
    }
    sprintChallenge(String) {
        return `${this.name} has begun sprint challenge on ${String}.`;
    }
    graduate() {
        return this.grade >= 70 ? `${this.name} is ready to graduate! (Grade: ${this.grade}).` : `${this.name} needs to work harder... (Grade: ${this.grade})`;
    }
}

// Project Manager Class
class ProjectManager extends Instructor {
    constructor(atts) {
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
    }
    standUp(String) {
        return `${this.name} announces to ${String}, @channel standy times!`;
    }
    debugsCode(student, String) {
        return `${this.name} debugs ${student.name}\'s code on ${String}`;
    }
}

// ====================Personnel==========================

// Instructors
let john = new Instructor({
    name: 'John',
    age: 30,
    location: 'Chicago, Illinois',
    gender: 'Male',
    specialty: 'Visual Design',
    favLanguage: 'CSS',
    catchPhrase: 'I like to make things look more gooder.'
}),
    suzan = new Instructor({
        name: 'Suzan',
        age: 25,
        location: 'Toronto, Canada',
        gender: 'Female',
        specialty: 'Specificity',
        favLanguage: 'HTML',
        catchPhrase: 'Structure is the foundation for success.'
    }),
    pat = new Instructor({
        name: 'Pat',
        age: 42,
        location: 'Seattle, Washington',
        gender: '???',
        specialty: 'Animations',
        favLanguage: 'JavaScript',
        catchPhrase: 'CSS animations are WEAK!'
    });

// Students
let jack = new Student({
    name: 'Jack',
    age: 18,
    location: 'Dallas, Texas',
    gender: 'Male',
    previousBackground: 'High School',
    className: 'WEB18',
    favSubjects: ['HTML',
        'CSS',
        'JavaScript'
    ],
    grade: 70
}),
    sam = new Student({
        name: 'Sam',
        age: 24,
        location: 'Houston, Texas',
        gender: 'Female',
        previousBackground: 'Bank Teller',
        className: 'CS18',
        favSubjects: ['Java',
            'Python',
            'JavaScript'
        ],
        grade: 85
    }),
    jessica = new Student({
        name: 'Jessica',
        age: 31,
        location: 'Rochester, New York',
        gender: 'Female',
        previousBackground: 'Military',
        className: 'WEB18',
        favSubjects: ['HTML',
            'CSS',
            'LESS'
        ],
        grade: 69
    });

// Project Managers
let matt = new ProjectManager({
    name: 'Matt',
    age: 26,
    location: 'Moscow, Russia',
    gender: 'Male',
    specialty: 'Bootstrap',
    favLanguage: 'Java',
    catchPhrase: 'Whatever the hell you want!',
    gradClassName: 'WEB17',
    favInstructor: 'John'
}),
    priscilla = new ProjectManager({
        name: 'Priscilla',
        age: 29,
        location: 'Eerie, Pennsylvania',
        gender: 'Female',
        specialty: 'Redux',
        favLanguage: 'JQuery',
        catchPhrase: 'You make me laugh.',
        gradClassName: 'WEB01',
        favInstructor: 'Pat'
    }),
    jen = new ProjectManager({
        name: 'Jen',
        age: 48,
        location: 'Aurora, Colorado',
        gender: 'Female',
        specialty: 'Bootstrap',
        favLanguage: 'Java',
        catchPhrase: 'Yabba dabba don\'t do that',
        gradClassName: 'CS11',
        favInstructor: 'Suzan'
    });

// Testing
console.log(jen.debugsCode(jessica, 'JavaScript'))
console.log(sam.graduate())
console.log(priscilla.speak())
console.log(jack.listsSubjects())
console.log(suzan.grade(jack, 'HTML'))
console.log(matt.catchPhrase)
console.log(john.randomGrade(jessica))
console.log(jessica.graduate())

