import colorGenerator from "../assets//projects/Color-Generator.png";
import colorGenerator_tec1 from "../assets//projects/Color-Generator_tec1.png";
import colorGenerator_tec2 from "../assets//projects/Color-Generator_tec2.png";
import richestracker from "../assets//projects/RichesTraker.png";
import richestracker_tec1 from "../assets//projects/RichesTraker_tec1.png";
import richestracker_tec2 from "../assets//projects/RichesTraker_tec2.png";
import richestracker_tec3 from "../assets//projects/RichesTraker_tec3.png";
import richestracker_tec4 from "../assets//projects/RichesTraker_tec4.png";
import shoppingList from "../assets//projects/ShoppingList.png";
import shoppingList_tec1 from "../assets//projects/ShoppingList_tec1.png";
import shoppingList_tec2 from "../assets//projects/ShoppingList_tec2.png";
import shoppingList_tec3 from "../assets//projects/ShoppingList_tec3.png";
import simplechat from "../assets//projects/Simple-chat.png";
import simplechat_tec1 from "../assets//projects/Simple-chat_tec1.png";
import simplechat_tec2 from "../assets//projects/Simple-chat_tec2.png";
import simplemenu from "../assets//projects/Simple-menu.png";
import simplemenu_tec1 from "../assets//projects/Simple-menu_tec1.png";
import simplemenu_tec2 from "../assets//projects/Simple-menu_tec2.png";
import sudoku from "../assets//projects/Sudoku.png";
import sudoku_tec1 from "../assets//projects/Sudoku_tec1.png";
import sudoku_tec2 from "../assets//projects/Sudoku_tec2.png";
import sociLite from "../assets/projects/Social_lite.png";
import sociLite_tec1 from "../assets/projects/Social_lite_tec1.png";
import sociLite_tec2 from "../assets/projects/Social_lite_tec2.png";
import sociLite_tec3 from "../assets/projects/Social_lite_tec3.png";
import sociLite_tec4 from "../assets/projects/Social_lite_tec4.png";
import sociLite_tec5 from "../assets/projects/Social_lite_tec5.png";
import chatLite from "../assets/projects/Chat_lite.png";
import chatLite_tec1 from "../assets/projects/Chat_lite_tec1.png";
import chatLite_tec2 from "../assets/projects/Chat_lite_tec2.png";
import chatLite_tec3 from "../assets/projects/Chat_lite_tec3.png";
import chatLite_tec4 from "../assets/projects/Chat_lite_tec4.png";
import chatLite_tec5 from "../assets/projects/Chat_lite_tec5.png";
import CompInt from "../assets/projects/CompoundInterest.png";
import CompInt_tec1 from "../assets/projects/CompoundInterest_tec1.png";
import CompInt_tec2 from "../assets/projects/CompoundInterest_tec2.png";
import CompInt_tec3 from "../assets/projects/CompoundInterest_tec3.png";
import CompInt_tec4 from "../assets/projects/CompoundInterest_tec4.png";
import RestaurantApp from "../assets/projects/RestaurantApp.png";
import LandRank from "../assets/projects/LandRank.png";

export const projects = [
	{
		id: "1",
		name: "LandRank",
		description:
			"Imagine you're a real estate agent specialized on finding land areas for future customers on which they will build whatever they need on. This is a web application tool for mapping and storing different areas on the map with the necessary data to present to a customer. Built with React.js and ASP.NET.",
		stack: [
			{ id: 1, title: "REACT" },
			{ id: 2, title: "ASP.NET" },
			{ id: 3, title: "GOOGLE MAPS API" },
			{ id: 4, title: "OPENCAGE API" },
			{ id: 5, title: "MATERIAL UI" },
			{ id: 6, title: "AZURE" },
			{ id: 7, title: "NETLIFY" },
		],
		url: "https://land-rank.netlify.app",
		github: "https://github.com/Robert0B0/LandRank",
		image: LandRank,
		technical: {
			title: "LandRank – general technical summary:",
			description: [
				{
					id: 1,
					p: "The front end is built with React javaScript framework. All the interface elements are designed with React components and functionalities are written in javaScript.",
				},
				{
					id: 2,
					p: "The interface theme is designed with the help of Material-UI component library for React which is made for writing stylized and fast React components that get the job done.",
				},
				{
					id: 3,
					p: "The core functinality of this web app is the integrated Google Maps API, mainly used for rendering the top view map, functionalities for drawing and placing polygons on the map and retrieve coordinates from set markers",
				},
				{
					id: 4,
					p: "The OpenCage API is used as a complementary API for retrieving location information from a set marker via reverse geocoding of coordinates to addresses.",
				},
				{
					id: 5,
					p: "The backend web api is built with ASP.NET platform which is a developer platform made up of tools, programming languages, and libraries for building many different types of applications.",
				},
				{
					id: 6,
					p: "Entity Framework (EF) Core is a lightweight, extensible, open source and cross-platform version of the popular Entity Framework data access technology that enables working with a database using .NET objects.",
				},
			],
			images: [],
		},
	},
	{
		id: "2",
		name: "RichesTraker",
		description:
			"Web application designed to store, track, display and predict financial activity based on the user inputted financial behavior. After creating an account or logging form a existing one, users are presented with an always present monetary balance, interactive calendar of financial activity, graph renderings for showing income and outcome evolution. Users can create and keep track of specific interest items like: Monetary records, Savings jars, Financial goals and Investment plans.",
		stack: [
			{ id: 1, title: "DJANGO" },
			{ id: 2, title: "BOOTSTRAP" },
			{ id: 3, title: "POSTGRESQL" },
			{ id: 4, title: "DATATABLES" },
			{ id: 5, title: "FULLCALENDAR" },
			{ id: 6, title: "ZINKCHART" },
			{ id: 7, title: "HEROKU" },
		],

		url: "https://richestracker-personalproject.herokuapp.com/",
		github: "https://github.com/Robert0B0/RichesTracker",
		image: richestracker,
		technical: {
			title: "RichesTraker – general technical summary:",
			description: [
				{
					id: 1,
					p: "A web application for storing, tracking and evaluating monetary activities from daily to monthly use. ",
				},
				{
					id: 2,
					p: "The app is made with Django framework utilizing PostgreSQL database. The project main application, where are the settings for database, debug, hosting settings and static files handling, also works with apps for each specific django model that holds its migrations, specific view functions, forms, templates and urls. ",
				},
				{
					id: 3,
					p: "A brief description of each app functionality: ",
				},
				{
					id: 4,
					p: "users app: managing users registrations and login, page authorization handling, host for home page, navbar about and bug-report template pages.",
				},
				{
					id: 5,
					p: "info app: hosting the calendar focus template and graph illustration template",
				},
				{
					id: 6,
					p: "goals app: handling, creating and storing other actions for financial goals",
				},
				{
					id: 7,
					p: "investments app: holding investments plans with their setups and actions",
				},
				{
					id: 8,
					p: "savings app: having all the savings jars with their specific actions",
				},
				{
					id: 9,
					p: "records app: the core functionality of the app, storing all the monetary records created by the user and being used by all the complementary apps for different types of illustrations ",
				},
				{
					id: 10,
					p: "Complementary add-on apps: Bootstrap library, DataTables, FullCalendar, Zingchart. ",
				},
				{
					id: 11,
					p: "The app is published on heroku hosting service. ",
				},
			],
			images: [],
		},
	},
	{
		id: "3",
		name: "Social_lite",
		description:
			"Web application where users, after getting registered and logged in, can write posts for any other user to find, read and comment. Using React frontend plus semantic-ui and, as backend, Apollo-Server/Graphql plus MongoDB database.",
		stack: [
			{ id: 1, title: "React" },
			{ id: 2, title: "Semantic - Ui" },
			{ id: 3, title: "Apollo - Server" },
			{ id: 4, title: "GraphQl" },
			{ id: 5, title: "MongoDB" },
			{ id: 6, title: "Heroku" },
			{ id: 7, title: "Netlify" },
		],
		url: "https://social-lite.netlify.app/",
		github: "https://github.com/Robert0B0/social_lite-server",
		github2: "https://github.com/Robert0B0/social_lite-client",
		image: sociLite,
		technical: {
			title: "Social_lite – general technical summary:",
			description: [
				{
					id: 1,
					p: "A simple social comment sharing web site.",
				},
				{
					id: 2,
					p: "The app is split into front-end side, built with React and semantic-ui css library, and as server back-end side, Apollo server and GraphQl with MongoDB cloud database.",
				},
				{
					id: 3,
					p: "The back end deals with any client request to query or modify items in the database. The are two working models with  which the app works, Users and Posts, made with mongoose schema model and each has its functions for query and mutation. Each new user or item creation or modification is handled with input error checking functions alongside authorization and permission verification. ",
				},
				{
					id: 4,
					p: "The front end is built with React and semantic-ui. Firstly a ApolloProvider wrap for the app is set up to link up the server and provide the authorization context for the present user by storing their token in the local storage. Any user after successfully registered and logged in is presented to the home page where it hosts all users posts, their interactions and comments, and the ability to post new post comments with tags. Alongside the home page there is the profile page with the users specific posts and profile editing settings.",
				},
				{
					id: 5,
					p: "The back-end side of the app is hosted on heroku with graphql playground enabled for demonstrative purposes, and the front-end React part is hosted on netlify.  ",
				},
			],
			images: [
				sociLite_tec1,
				sociLite_tec2,
				sociLite_tec3,
				sociLite_tec4,
				sociLite_tec5,
			],
		},
	},

	{
		id: "4",
		name: "Mess_Lite",
		description:
			"A web chat application that users, once registered and logged in, can choose with who to talk, send messages, see the latest message while keeping in touch with friends and acquaintances. Web app made with React as front-end and, as backend, working with Apollo server plus Graphql utilizing MongoDB as database",
		stack: [
			{ id: 1, title: "React" },
			{ id: 2, title: "React - Bootstrap" },
			{ id: 3, title: "Apollo - Server" },
			{ id: 4, title: "GraphQl" },
			{ id: 5, title: "MongoDB" },
			{ id: 6, title: "Heroku" },
			{ id: 7, title: "Netlify" },
		],
		url: "https://mess-lite.netlify.app",
		github: "https://github.com/Robert0B0/Mess_lite-server",
		github2: "https://github.com/Robert0B0/Mess_lite-client",
		image: chatLite,
		technical: {
			title: "ChatLite – general technical summary:",
			description: [
				{
					id: 1,
					p: "A web application focusing on being a messaging app.",
				},
				{
					id: 2,
					p: "The app si split into front-end side, built with React and react-bootstrap css library, and as server back-end side, Apollo server and GraphQl with MongoDB cloud database.",
				},
				{
					id: 3,
					p: "The server back-end side is responsible for creating users, and their messages, checking for authorizations and any database related modifications. Each user is stored in the database after a successful registrations using a register mutation alongside a register validator function that check for any user input errors. Then the user can log in, using a query with login validator, and has access to the other users, as contacts and their messages. The messages, like the users are instantiated from a user and a message schema model from mongoose. Each model has their own query and mutation type function.",
				},
				{
					id: 4,
					p: "The front end client side is made with React and react-bootstrap. Firstly a ApolloProvider wrap for the app is set up to link up the server and provide the authorization context for the present user by storing their token in the local storage. The user, after logged in, can use the right side of the app, where are the other users along with their latest message, to choose whomever to enter in a conversation and send/receive messages. ",
				},
				{
					id: 5,
					p: "The back-end side of the app is hosted on heroku with graphql playground enabled for demonstrative purposes, and the front-end React part is hosted on netlify.  ",
				},
			],
			images: [
				chatLite_tec1,
				chatLite_tec2,
				chatLite_tec3,
				chatLite_tec4,
				chatLite_tec5,
			],
		},
	},

	{
		id: "5",
		name: "Compound Interest Simulator",
		description:
			"A Web application designed to set up, save and simulate different scenarios of investment plans for long term future projections and ilustrate different results generated from simple tweaks with profound outcomes.",
		stack: [
			{ id: 1, title: "React" },
			{ id: 2, title: "Apollo - Server" },
			{ id: 3, title: "GraphQl" },
			{ id: 4, title: "MongoDB" },
			{ id: 5, title: "Semantic - Ui" },
			{ id: 6, title: "Heroku" },
			{ id: 7, title: "Netlify" },
		],
		url: "https://compound-interest-sim.netlify.app/",
		github: "https://github.com/Robert0B0/Compound_Interest_Sim-server",
		github2: "https://github.com/Robert0B0/Compound_Interest_Sim-client",
		image: CompInt,
		technical: {
			title: "Compound Interest Simulator – general technical summary:",
			description: [
				{
					id: 1,
					p: "A Web application designed to simulate and illustrate the effects of compound interest in a financial, long term decision of investing money. This is accomplished by allowing the user to create, tweak and render a table of values build upon the last calculated value on defined settings.",
				},
				{
					id: 2,
					p: "The application is split into a back-end server and a front-end client side.",
				},
				{
					id: 3,
					p: "The back-end is build with Apollo server and GraphQL client where it handles and stores the users and their created investment plans. The database used for this app is MongoDB cloud database service.  Firstly the user has to register and log in by calling specific function that handle the user creation, input error checking, passing unique user tokens and tying plans to their respective owners. The server works with two models, user and plans with their resolvers (queries and mutation in the database). ",
				},
				{
					id: 4,
					p: "The front-end is made with React and Semantic UI (css library) and is responsible for calling and rendering data from the server. After a user is successfully registered and/or logged in, he/she has access to the home page where it stores saved plans on the left side and a input form in the center with specific parameters in simulating an investment plan (like: initial investment, length in years, interest rate, return on investment percentage and monthly contribution). After clicking on the simulate button a table is rendered with the calculated values and can be saved for later comparisons.",
				},
				{
					id: 5,
					p: "The back-end side of the app is hosted on heroku with graphql playground enabled for demonstrative purposes, and the front-end React part is hosted on netlify.  ",
				},
			],
			images: [CompInt_tec1, CompInt_tec2, CompInt_tec3, CompInt_tec4],
		},
	},
	{
		id: "6",
		name: "Shopping list",
		description:
			"A simple Web shopping list with features like adding, striking and deleting shop items. Built with React front end and Apollo/Graphql plus MongoDB as backend ",
		stack: [
			{ id: 1, title: "React" },
			{ id: 2, title: "Apollo - Server" },
			{ id: 3, title: "GraphQl" },
			{ id: 4, title: "MongoDB" },
			{ id: 5, title: "Heroku" },
			{ id: 6, title: "Netlify" },
		],
		url: "https://shopping-list-react-graphql.netlify.app/",
		github: "https://github.com/Robert0B0/Shopping-list-client",
		github2: "https://github.com/Robert0B0/Shopping-list-server",
		image: shoppingList,
		technical: {
			title: "Shopping List – general technical summary:",
			description: [
				{
					id: 1,
					p: "A web application designed to replace paper shopping list writing and discarding.",
				},
				{
					id: 2,
					p: "The app is split in front-end and back-end sides where :",
				},
				{
					id: 3,
					p: "The back-end is set up using GraphQl client with Apollo Server linked with a cloud database service provided by MongoDB. The  backend server holds a simple shopping item model, using Schema model for configuring the object for the mongoose model, with its respective proprieties. There are resolvers for items like  queries (for getting all the items) and mutations (for example creating, editing, striking, and removing items) made to the database based on the input received from the front-end side of the app.",
				},
				{
					id: 4,
					p: "The front end is build with React. The first thing the app does is setting the connection to the back-end server, using ApolloProvider, setting up a client with the uri link to the server location (either local or on a hosting server) and wrapping the app with it. The app uses three components, A form for adding new items, a item list for handling item functions like edit or remove and the items iterated inside the list. Each items displays the name, state (striked or not) edit and remove buttons. All calls to the back-end server are handled by graphql tags (like FETCH_ITEMS, RENAME_ITEM_MUTATION, etc) and apollo react-hooks using the tags and parameters triggered by the user input.",
				},
				{
					id: 5,
					p: "The back-end side of the app is hosted on heroku with graphql playground enabled for demonstrative purposes, and the front-end React part is hosted on netlify.  ",
				},
			],
			images: [shoppingList_tec1, shoppingList_tec2, shoppingList_tec3],
		},
	},
	{
		id: "7",
		name: "Color Generator",
		description:
			"A simple React Project for generating colors with different saturations based on hex code provided by the user. Displaying three rows with three distinct colors for side by side comparison. Any generated color can be copied to clipboard by clicking the desired color cell and hex code.",
		stack: [
			{ id: 1, title: "REACT.JS" },
			{ id: 2, title: "NETLIFY" },
		],

		url: "https://triple-color-generator.netlify.app/",
		github: "https://github.com/Robert0B0/React-ColorGenerator",
		image: colorGenerator,
		technical: {
			title: "Color Generator – general technical summary:",
			description: [
				{
					id: 1,
					p: "A web app that ,after the user sets up the parameters, generates and illustrates three different pallets of colors from a root value. The colors are displayed side by side with differing saturation.",
				},
				{
					id: 2,
					p: "There are three SingularColor components having each a set root color function for setting the state color value and a state for holding the list of generated colors. ",
				},
				{
					id: 3,
					p: "The Values function is called to generates a list of 10 differing values of the root hex color while also handling input errors.  ",
				},
				{
					id: 4,
					p: "The App is hosted on netlify ",
				},
			],
			images: [colorGenerator_tec1, colorGenerator_tec2],
		},
	},
	{
		id: "8",
		name: "Simple Menu",
		description:
			"A simple React menu with dynamic updating feature of menu selection based on the presence ( or absence ) of certain food types that come from the outsourced loaded JSON data.",
		stack: [
			{ id: 1, title: "REACT.JS" },
			{ id: 2, title: "NETLIFY" },
		],

		url: "https://react-simple-menu.netlify.app/",
		github: "https://github.com/Robert0B0/simple-menu",
		image: simplemenu,
		technical: {
			title: "Simple Menu – general technical summary:",
			description: [
				{
					id: 1,
					p: "Simulating a restaurant menu with filtering items based on their time of day serving period. The core idea is that the app receives the menu data unfiltered, where the filtering process falls on the app to figure out based on the received items properties.",
				},
				{
					id: 2,
					p: "Firstly the AllCategories array of categories is build dynamically from the received data and its current selection of items. Then the Categories component is built with the array of  categories and returns a filtered menu buttons for each unique category.",
				},
				{
					id: 3,
					p: "Then it sends its selected category back to the main app through a function, setting the state of the selected menu items and then builds the Menu component with the selected category returning all mapped and filtered items, deconstructing and displaying their properties.   ",
				},
				{
					id: 4,
					p: "The App is hosted on netlify ",
				},
			],
			images: [simplemenu_tec1, simplemenu_tec2],
		},
	},
	{
		id: "9",
		name: "Simple Chat",
		description:
			"A Chat App built in React with id generation at login and ability to connect to other users and chat in craete rooms with selecet users",
		stack: [
			{ id: 1, title: "REACT.JS" },
			{ id: 2, title: "NETLIFY" },
		],

		url: "https://simple-chat-app-react.netlify.app/",
		github: "https://github.com/Robert0B0/React-simple-chat",
		image: simplechat,
		technical: {
			title: "Simple Chat – general technical summary:",
			description: [
				{
					id: 1,
					p: "The main App is wrapped with two context provider components: ",
				},
				{
					id: 2,
					p: "Login: login functionality using uuidv4 module to create a new id.",
				},
				{
					id: 3,
					p: "ContactsProvider – which provides the saved contacts from the local storage, the function for creating new contacts and returning the id and name of the contacts;",
				},
				{
					id: 4,
					p: "ConversationsProvider – which provides the conversation and messages, stored in the local storage, based on the logged in user id,  function for creating conversations with other users and function for adding messages in set conversations.",
				},
				{
					id: 5,
					p: "The app is built with components like the dashboard that holds the sidebar split into conversations and contacts. In the conversations tab the user can create new conversations by choosing another user by entering its id from its contacts list. In the contacts tab the user can add new contacts by providing their id and a complementary name. The other component is the openConversation which holds the messages from the selected selected user from contacts lists, and the input form for sending new messages. ",
				},
				{
					id: 6,
					p: "The App is hosted on netlify ",
				},
			],
			images: [simplechat_tec1, simplechat_tec2],
		},
	},
	{
		id: "11",
		name: "Simple Sudoku",
		description: "A simple Sudoku game made with React.js",
		stack: [
			{ id: 1, title: "REACT.JS" },
			{ id: 2, title: "NETLIFY" },
		],

		url: "https://react-simple-suodku.netlify.app/",
		github:
			"https://github.com/Robert0B0/React-simple-Sudoku/tree/master/sudoku",

		image: sudoku,
		technical: {
			title: "Simple Sudoku – general technical summary:",
			description: [
				{
					id: 1,
					p: "The Sudoku table is constructed by generating 10 rows with 10 cells components each (a 10X10 matrix), each row has a cell component with each unique props passed down representing its positions and number coming from the “hint” values or from the user input value. ",
				},
				{
					id: 2,
					p: "Each cell component holds values for the coordinates in the sudoku table (or matrix) and values for its css styling based on its status, holding number and mouse hover or selected styling.",
				},
				{
					id: 3,
					p: "The function processKeyPress(event) after a cell is selected by clicking, it takes the pressed keyboard number and displays it on the table cell. All operations are done by loading and changing cells classNames.  ",
				},
				{
					id: 4,
					p: "Passed through the checktable() function that verifies, by the sudoku rules, if the current table, taken as a matrix, is correct and returns a boolean true/false value.",
				},
				{
					id: 5,
					p: "The App is hosted on netlify ",
				},
			],
			images: [sudoku_tec1, sudoku_tec2],
		},
	},
];

// TEMPLATE
/* {
    id: "",
    name: "",
    description: "",
    stack: [{id:1, title:}],
    url:
    github:
    image: "",
  }, */
