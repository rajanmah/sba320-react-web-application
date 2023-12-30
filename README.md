# React Web Application
Getting Started with SBA 320 H
I will be using api from NewsAPI for my application. It has daily 100 request which i think will be sufficient for development process and deployment. 

I have attached SBA 320 wireframe.pdf for my application with this repo. 
--------------------------------
I had to change the API because the api i decided to use did not have enough free requests. Now I am using differnt api and differrent wireframe.
I decided to use api from TheMovieDB and build a movie app. 

--------------------------------
# The Movie Application
I fetched the movie data from the API then walked through the data. I decided to display movies in cards in different categories such as popular, trending, top-rated and upcoming (which was much easier). I created the cards page and display pages for above mentioned categories. Then i tried to create carousel using 'react responsive carousel'. I placed search component in the home page. 

I used:
fetch() to fetch apis
useState and useEffect
react responsive carousel

It has 6 different pages including home page. The home page displays carousel of popular movies. It also has a search option displays relevant movies in cards.

The header has five different links which displays list of movies in cards. Each card is linked to different page with details of that particular movie with Name, Release Date, Duration and brief Synopsis. There is a link to IMDb page too.

Trending list displays both movies and tv series. The individual link work for movies but not for the tv series - tv series (without 'name of the series') displays nothing.