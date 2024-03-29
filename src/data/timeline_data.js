import {
    doggyapp,
    foodmap,
    gallery,
    github,
    mememaker,
    mymovieapp,
    todo_javascript,
    todo_react,
    weatherapp,
    cellnow,
    theburgermaker,
    authentication,
    reactmovieapp,
    todo_angular,
    budget_angular,
    pizza_recipes,
    book_store,
    portfolio
} from '../images';
import postman from '../videos/postman.mp4';

const timelineData = [
    {
        title: 'The weather app',
        date: 'June 5th 2020',
        img: weatherapp,
        text: `The weather app was built during my time at Salt. It
       was the first application that I build from scratch independently
       using JavaScript. I chose server side rendering out of 
       curiosity, how it works and the Express framework for the backend.`,
        link: {
            url1: 'https://theweatherapp2020.herokuapp.com/nearby?lat=59.4252798&lon=17.8178287',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/The-weather-app',
            button2: 'Code'
        }
    },
    {
        title: 'Todo list JavaScript',
        date: 'June 25th 2020',
        img: todo_javascript,
        text: `The todo list is another project created during my time at SALT
       as a  weekend test assignment. The todo list
        was created using only vanilla JavaScript.`,
        link: {
            url1: 'https://todo-javascript.glitch.me/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/to-do-list-js',
            button2: 'Code'
        }
    },
    {
        title: 'Todo list React',
        text: `This app was a continuation of the todo list project as a weekend assignment,
     but this time it was built using the React framework.`,
        date: 'July 3th 2020',
        img: todo_react,
        link: {
            url1: 'https://todo-react1.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/to-do-list-react',
            button2: 'Code'
        }
    },
    {
        title: 'My movie app',
        date: 'July 15 2020',
        img: mymovieapp,
        text: `The my movie app  was created as a one day project
       during a Hack day at SALT.It is build using vanilla JavaScript and 
        the Express framework for the backend.
        I have develped it further, next feature I will be working on is the user authentication.`,
        link: {
            url1: 'https://mymovieapp2020.herokuapp.com/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/Movie-app',
            button2: 'Code'
        }
    },
    {
        title: 'Food-Map',
        date: 'July 30th 2020',
        img: foodmap,
        text: `The Food-Map project was created with my team at SALT as a graduation project.
     We worked on this project together as a mob and created a short video instead of presentation.
     We used React for the frontend, materialUI for styling and express for the backend.`,
        link: {
            url1:
                'https://www.youtube.com/watch?v=YS-yhggkqfs&list=PLDqoWWdtjihDmmhNXVuvsLikn7Lhapcmw&index=3&ab_channel=%E3%80%88%2Fsalt%E3%80%89SchoolofAppliedTechnology',
            button1: 'Video',
            url2: 'https://github.com/Danijela2019/Food-Map',
            button2: 'Code'
        }
    },
    {
        title: 'Gallery',
        date: 'August 20th 2020',
        img: gallery,
        text: `This is my first independent project outside SALT,
    the main purpose was to get familiar with the grid layout.`,
        link: {
            url1: 'https://thegallery2020.herokuapp.com/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/Gallery',
            button2: 'Code'
        }
    },
    {
        title: 'The meme maker',
        date: 'September 1st 2020',
        img: mememaker,
        text: `This is a mini project build using React class components 
    without react hooks. I build this project to get more familiar with
    class components in React.`,
        link: {
            url1: 'https://thememegenerator.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/The-meme-maker',
            button2: 'Code'
        }
    },
    {
        title: 'Doggy-app',
        date: 'September 29th 2020',
        img: doggyapp,
        text: `This is a real mobile app build for a startup company, we build it with my team at SALT 
    as part of our post graduation program. We set up the project from scratch using expo platform, 
    react native for the front and Apollo for the back end and GraphQL for fetching data.`,
        link: {
            url1: 'https://github.com/Danijela2019/DoggyApp',
            button1: 'Frontend Code',
            url2: 'https://github.com/Danijela2019/DoggyApp-backEnd',
            button2: 'Backend Code'
        }
    },
    {
        title: 'Github-network',
        date: 'October 2 2020',
        img: github,
        text: `This project was built as an idea how to use github's API.
     I took the more modern approach and used react hooks and React Bootstrap for styling.`,
        link: {
            url1: 'https://githubnet.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/Git-net',
            button2: 'Code'
        }
    },
    {
        title: 'Portfolio',
        date: 'October 20th 2020',
        img: portfolio,
        text: `The portfolio page was a SALT project to present myself as a developer.
         Since it's creation every new project was added to to timeline.`,
        link: {
            url1: 'https://danijelamilenkovic.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/portfolio',
            button2: 'Code'
        }
    },
    {
        title: 'The burger-maker',
        date: 'November 1 2020',
        img: theburgermaker,
        text: `The burger maker is a complete web site with different pages
       you can navigate to, user authentication and database base on 
       a tutorial I followed customized for my needs. `,
        link: {
            url1: 'https://the-burger-maker-1691c.web.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/The-burger-maker',
            button2: 'Code'
        }
    },
    {
        title: 'Cell-now shopping',
        date: 'December 12 2020',
        img: cellnow,
        text: `The project is my take on a test code assignment to build a online shopping 
        site for cellphones( only the checkout and the home page were reuired)`,
        link: {
            url1: 'https://cellnow.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/Cell-now-shopping',
            button2: 'Code'
        }
    },
    {
        title: 'Cat-facts-api',
        date: 'January 20 2021',
        img: postman,
        text: `This is a simple API where the user can perform all CRUD operations.
        There are 2 brances: the master branch, where the data is stored in JSON file and 
        mongoDB branch where the data is stored in Mongo DB.`,
        video: true,
        link: {
            url1: 'https://github.com/Danijela2019/cat-fact-api',
            button1: 'JSON code',
            url2: 'https://github.com/Danijela2019/cat-fact-api/tree/mongoDB',
            button2: 'mongoBD code'
        }
    },
    {
        title: 'User-authentication',
        date: 'January 28th 2021',
        img: authentication,
        text: `The project was created as an exercise(learnnig curve) about how to authenticate a
         user using JWT and MongoDB Atlas.`,
        link: {
            url1: 'https://authentication-exercise.herokuapp.com/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/user-authentication',
            button2: 'Code'
        }
    },
    {
        title: 'React-movie-app',
        date: 'February 28th 2021',
        img: reactmovieapp,
        text: `A total remake of my SALT hack day project movie-app. 
        The only thing that I reused from the old project is the TMDB API. The front end is almost completed. 
        There will be a separate backend repo for storing data.`,
        link: {
            url1: 'https://react-movie-app2021.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/react-movie-app',
            button2: 'Code'
        }
    },
    {
        title: 'Angular-todo-list',
        date: 'March 10th 2021',
        img: todo_angular,
        text: `This project was created as an exercise to get familiar with angular and
             some of its features
             like fetching data asynchronosly and navigation`,
        link: {
            url1: 'https://angular-todo2021.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/angular-todo-list',
            button2: 'Code'
        }
    },
    {
        title: 'Budget-planner-angular',
        date: 'March 18th 2021',
        img: budget_angular,
        text: `A budget calculator application where the user is able 
        to follow personal expenses build using Angular with TypeScript.`,
        link: {
            url1: 'https://budget-planner-angular.netlify.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/budget-planner-angular',
            button2: 'Code'
        }
    },
    {
        title: 'Pizza-recipes',
        date: 'March 28th 2021',
        img: pizza_recipes,
        text: `A pizza recipes app with possibility to add and remove ingredients
        from and to a shopping list. The app was created using Angular and Firebase for storing recipes.`,
        link: {
            url1: 'https://pizza-recipes-fb56e.web.app/',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/pizza-recipes',
            button2: 'Code'
        }
    },
    {
        title: 'Book-store',
        date: 'April 15th 2021',
        img: book_store,
        text: `The book-store app was build with Angular and Firebase for data storage.
        All users can see the book list, but only authenticated users can see and manipulate
         the wish list.`,
        link: {
            url1: 'https://bookstore-65f65.web.app',
            button1: 'Demo',
            url2: 'https://github.com/Danijela2019/book-store',
            button2: 'Code'
        }
    }
];

export default timelineData;
