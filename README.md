# NOT THAT
Food-Deciding App

## Description
"What do you want to eat?"
"Anything."
"Ok Italian food?"
"Yeah, not that."
"Okay then what?"

We know the flow of this conversation too well. We agonize over what to eat with our partner, our friends, and even our family. Why has nobody created a solution for this problem that everyone has? 

The wait is over.

We finally have decided to tackle the beast of indecision and save countless relationships with an easy-to-use app that decides for you. Simply tell us some of your favorite restaurants, their zip code, and the type of cuisine, then eliminate cuisines you aren't in the mood for, and (ta-da!) you'll have a choice of restaurants to choose from that will satisfy everyone's palette. Only what you WANT, none of what you DON'T want. 

Now you can spend more time going out for food dates and less time in an endless cycle of indecision. 

### User Stories
- [User Stories](https://docs.google.com/document/d/11GGqDmnQF5NHxXpN7yvEF6xre805aJz-B-MEpgr7hDI/edit?usp=sharing) 


### Project Links 
- [Back end git](https://github.com/dvvill/NotThat-backend.git) 
- [Front end git](https://github.com/mpenajoia/NotThat-frontend.git)

### Wireframes and Architecture
- [Wireframes](https://drive.google.com/drive/folders/1M_HyuBJZFelJecd-7aD4bdhw2yYJ50tY)
- [Architecture](https://docs.google.com/document/d/1CEahWArRAY0eA4VU9wqFu_VUBKQtQx9QTjt7lIr1Gb8/edit?usp=sharing)



### Time/Priority Matrix
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Git management | H | 8hrs | hrs |
| Structure Repos | H | 4hrs  | hrs |
| Components | H | 3hrs  | hrs |
| Routes | H | 2hrs  | hrs |
| Layout & CSS | H | 5hrs  | hrs |
| Schemas/Models | H | 4hrs | 0hrs |
| API functionality | H | 4hrs | 0hrs |
| CRUD functionality | H | 6hrs | 0hrs |
| Deploy | H | 2hrs | 0hrs |
| Aesthetics | L | 6hrs | 0hrs |
| Team Page | L | 2hrs | 0hrs |
| Total | H | 46hrs | hrs |

## MVP/Post-MVP
### MVP
- Store user imputed criteria (parameters) in DB
- GET that criteria as the parameters for the YELP API fetch
- READ the user's selections 
- UPDATE restaurant results 
- DELETE unwanted types of cuisines
- Functional components

### Post-MVP
- dark/light mode
- preferences (vegan/vegetarian)
- dollar amount ($, $$, $$$)
- UI/UX (beautify)
- saved/favorited restaurants ("Save for next time")

## Components - Descriptions
- React hooks, states, etc
- Routes
- Index renders app
    - Header, zip code input section, footer
- Cuisine Type Page
    - shows different cuisines 
- Restaurant Suggestion Page
    - displays 3 random restaurants ($, $$, $$$)
    - refresh button (displays new options)
- Selected Restaurant Page
    - route to yelp page of selected restaurant

## Additional Libraries
- Bootstrap
- Axios
- React, react-router-dom
- Node
- Express
