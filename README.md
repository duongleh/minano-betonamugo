<h1 align="center">皆のベトナム語👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

![](/image/logo.png)


## Run

### Install packages

**back-end**
```
yarn
```
**front-end**
```
yarn
```
### Up
```
docker-compose up
```

### Migration
```
docker-compose exec back-end yarn migration:run
```

### Down
```
docker-compose down
```

### View logs
```
// for back-end
docker logs -f back-end

// for front-end
docker logs -f front-end
```
