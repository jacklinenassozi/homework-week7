
//a program that doubles the odd numbers in an array and throws away the even numbers
let num = [1,2,3,4,5,6];
let newNum = [];
for (let i = 0;i < num.length;i++){
if(num[i] % 2 !==0){
    newNum[i]=num[i]*2;
}

}
console.log('the doubled numbers are', newNum);
// a programme writing a program using map and filter don't forget to use =>
const numbers = [1,2,3,4,5,6];
//let newNumbers =[];
 let newNumbers = numbers
  .filter(number => number % 2 !== 0)
  .map(number => number * 2);

console.log("The doubled numbers are", newNumbers);

// question 2
function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}
 // all movies
getAjaxData('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json',function(movies){
console.log('All movies',movies);
//tags rating
const tagsRating = movies.map(movie => movie.rating )
console.log('All movies by rating',tagsRating);
//Give each movie a tag: Good (>=7), Average (4-6), Bad (0-3) based on the ratings.
const movieRating = movies.map(movie =>  {if(movie.rating >=7){
   movie['tag']='good';
     }
     else if(movie.rating>=4){
         movie['tag']='average';
     }
     else {
         movie['tag']='bad';
     }
     return movie
     });
     console.log('tags by rating',movieRating)
//Calculate the total rating of all the movies
const totalRating = movies.reduce((accumulator,movie) => accumulator + movie.rating,0);
console.log('total rating is',totalRating);
//Calculate the average rating of all the movies
console.log('Average Rating is',( totalRating/movies.length ).toFixed(3));
//Count the total number of Good, Average and Bad movies.
    //good movies
    let goodMoviesCount = 0;
       movies.reduce((acc,value) => {
           return goodMoviesCount = acc + (value.rating >=7);
       },0);
       console.log('Good Movies Count is',goodMoviesCount);
//average movies
let averageMoviesCount = 0;
       movies.reduce((acc,value) => {
           return averageMoviesCount = acc + (value.rating <7&& value.rating>=4);
       },0);
       console.log('Average Movies Count is',averageMoviesCount);
//bad movies
let badMoviesCount = 0;
       movies.reduce((acc,value) => {
           return badMoviesCount = acc + (value.rating <4);
       },0);
       console.log('bad Movies Count is',badMoviesCount);
/*
    const totalGoodMovies = movies.filter(movie => movie.tag);
    //console.log("total good movies: "totalGoodMovies.length;
    //average movies
    const totalAverageMovies = movies.filter(movie => movie.tag==='Average');
    console.log("total average movies: "+totalAverageMovies.length);
    //Bad movies
    const totalBadMovies = movies.filter(movie => movie.tag==='Bad');
    console.log("total bad movies: "+totalBadMovies.length);
    */

    //Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]
let keyWords = ["The", "dog", "who", "is", "not", "a", "man"];
       const searching = movies.filter((movieTitle)=>{
           const moviesTitle = movieTitle.title.split(/[^\w]/);
           return keyWords.some(keyWord => moviesTitle.includes(keyWord));
       });
       console.log('number of movies with key words is',searching.length);

//Count the number of movies made between 1980-1989 (including both the years).

const moviesBetween1980To1989  = movies
.filter(movie => movie.year >= 1980 && movie.year <= 1989);
console.log("Number of movies from 1980 to 1989 : ", moviesBetween1980To1989.length);
/*

let numMovies= movies.filter(movie => {
    if (movie.year >= "1980" && movie.year <= "1989") {
        return true
    }
});

//console.log(numMovies);
const moviesIn80s = movies .filter(movie => movie.year <= 1989 && movie.year >= 1980)
console.log('Movies between 1980 & 1989: ', moviesIn80s.length);
*/
});


