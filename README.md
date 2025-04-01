# netflix-gpt 
1. create-react-app
2. tailwind css (used 3.3.3, as latest in not working)
3. Header
4. routing
5. login 
6. signup
7. form validation
8. useRef hook
9. rejex
10. firebase setup
11. deploying app to prod
12. create signup in firebase
13. created redux store and user slice
14. bug fixes, unsubscribe to authchangecallback fn
15. tmdb (movie database), create account, setup the app, get access key and token
16. fetch the nowplayingmovies via tmdb api 
17. store that data in redux
18. main component 
    - videotitle & description
    - video trailer
    secondary component
     - trending/ ... *n
     - movie cards *n
19. custom hook
20. update store with movies and trailer
21. embeded youtube video and make it autoplay & mute
22. created secondary component
23. built movie list & movie card
24. TMDB img CDN url
25. multiple custom hooks
26. 


 # features
 - Login/Sign Up
  redirect to browse page
 - Browse(After auth)
   - Header
   - Main movie
     - trailer in bg
     -title and description
     -Movie suggestions
      - Movie lists *n

- Netflix-GPT 
 - search bar
  - movie suggestion


---
1. formik(for forms )
2. useRef hooks => lets you reference the value
3. why clicking on submit button refreshes the page => because we have not written onsubmit button, and form tries to submit the form, so prevent it to happen
4. GOOGLE FIREBASE 
5. as soon as a new user is registered , i am udating the profile with the name and img
6. moved the onauthstatechanged, because we were getting error that we cant use the navigation outside the routes, to the location which will be present everytime , header
7. because of reacts strictmode , most of the things(api call) happens twice in local dev mode, because react cheks 2wice for inconsistency