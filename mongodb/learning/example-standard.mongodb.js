use("sample_mflix");

// Query:find highly rated movies released from 2010 ownard with IMDb ratings.
// Projecttion: return only the fields needed for the result, and hide MongoDB's default _id field.
// Options: sort highest-rated moives first, then newest first, and linit the result set to 10 documents.
// Execute the standard MongoDB fine query using qury, projection, and options.
db.movies.find(
    { type: "movive", year: {$gte: 2010}, "imdb.rating": {$gte: 8} },
    {_id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1},
    {sort: {"mdb.rating": -1, year: -1}, limit: 10},
);
 