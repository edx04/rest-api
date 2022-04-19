
# REST API CHALLENGE


## Author

- [Edgar Arellano](https://www.github.com/edx04)

## Requierments

    - Node
    - npm 
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/edx04/rest-api.git
```

Go to the project directory

```bash
  cd rest-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Hello world 

```
  GET /
```
Response:
```
  hello world!
```

#### Get price of cryptos

```
  GET /crypto/${symbol}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `symbol`      | `string` | **Required**. Symbol of the crypto |

Example
```
  GET /crypto/btc
```
Response:
```
  {"price":"40831.91000000"}
```

Some symbols for testing
- BTC
- ETH
- LTC
- DOGE
- LUNA





