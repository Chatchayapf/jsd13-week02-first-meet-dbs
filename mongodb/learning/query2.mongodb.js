use("sample_mflix");

//Exercise 2
// 2.1 What is an example of  type “movie” and rated “TV-G” look like?
db.theaters.find({ "location.address.state": "AL" });
// 2.2 How many movies are there in “movie” type and “TV-G” rated?
db.movies.find({ type: "movie", rated: "TV-G" }).count() ; //58 movies

//Exercise 3
// 3.1 How many theaters does AL state has?
db.theaters.find({ "location.address.state": "AL" }).count() // 19 theaters
// 3.2 How many theaters does La Quinta city has?
db.theaters.find({ "location.address.city": "La Quinta" }).count() // 1 theater
// 3.3 What is an example of each documents of above like?
db.theaters.findOne({ "location.address.city": "La Quinta" })

//Exercise 4
// 4.1 How many movies mentioned American in their plot?
db.movies.find({ plot: { $regex: "American", $options: "i" } }).count()
// 4.2 How many movies does end plot (sentence) with the word street.
db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count()
// 4.3 What does the data of above examples look like?
db.movies.find({ plot: { $regex: "street.$", $options: "i" } })

//Exercise 5
// 5.1 What are top 5 runtime movies?
db.movies.find({}).sort({ runtime: -1 }).limit(5)
// 5.2 What are top 5 runtime movies that less than 60 minutes?
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)
// 5.3 I was born in 1955, which 3 movies should I watch in next 10 years?
db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3)
// 5.4 How many movies were released during 1990 - 2000?
db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count()

//Exercise 6
// 6.1 Find all movies in the "movies" collection released between 1950 and 1970 (inclusive) that are documented as being shown in countries located in the USA.
db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})
// 6.2 What is the number of movies in the "movies" collection with genres "Drama" and "History" released after the year 1970?
db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count()
// 6.3 In how many films is Roy L. McCardell credited as an actor?
db.movies.find({ cast: "Roy L. McCardell" }).count()
// 6.4 How many movies did Hal Roach directed?
db.movies.find({ directors: "Hal Roach" }).count()
// 6.5 What is the movie with the earliest release year directed by Hal Roach?
db.movies.find({ directors: { $in: ["Hal Roach"] } });
// 6.6 How many awards did Hal Roach’s movies win?
db.movies.find(
{ 
directors: { $in: ["Hal Roach"] } 
}, 
{
title: 1, 
"awards.wins": 1, 
_id: 0 
}
);


