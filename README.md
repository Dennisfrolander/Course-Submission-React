# IMDb klon av Dennis Frölander

## Hur man startar appen: 

***Det är viktigt att starta servern innan man startar react-appen***

cd server\
npm install / npm install --force\
npm start

cd client_react\
npm install / npm install --force\
npm start

### Få fram alla populära filmer:

```
query PopularMovies {
  PopularMovies {
    id
    poster_path
    title
    vote_average
  }
}
``` 

### Få fram alla populära filmer med trailers:

```
query PopularMovies {
  PopularMovies {
    id
    poster_path
    title
    vote_average
  }
  Trailers {
    id
    trailer_path
  }
}
```

### Få fram alla populära filmer med trailers:

```
query Query {
  PopularMovies {
    id
    poster_path
    title
    vote_average
    movieCredits {
      id
      name
      profile_path
      character
      original_name
    }
  }
}
```

