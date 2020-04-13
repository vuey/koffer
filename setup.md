



## Docker

## build app image

```sh
docker build -t weplace .
```

## check image
```sh
docker images
```

## run app image

```sh
# create network
docker network create weplace

# run mongo-server
docker run -d \
  --name=weplace-db \
  --rm \
  --network=weplace mongo

# run app-server
docker run \
  --name=weplace \
  --rm \
  --network=weplace \
  -p 5000:5000 \
  -e MONGODB_URI=mongodb://weplace-db:27017/dev \
  -e PORT=5000 \
  weplace

```