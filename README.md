# mongoose-crud
CRUD with Mongoose ODM

### Book CRUD
List of books routes:

|           Route         |  HTTP  |             Description               |
| ----------------------- | ------ | ------------------------------------- |
| /books                  | GET    | Get all the books                     |
| /books/:id              | GET    | Get a single books                    |
| /books/                 | POST   | Create a books                        |
| /books/:id              | DELETE | Delete a books                        |
| /books/:id              | PUT    | Update a books with new data          |

### Usage
```
Access API `http://localhost:3000/books`
```

### Customer CRUD
List of customers routes:

|           Route         |  HTTP  |             Description               |
| ----------------------- | ------ | ------------------------------------- |
| /customers              | GET    | Get all the customers                 |
| /customers/:id          | GET    | Get a single customers                |
| /customers/             | POST   | Create a customers                    |
| /customers/:id          | DELETE | Delete a customers                    |
| /customers/:id          | PUT    | Update a customers with new data      |

## Usage
```
Access API `http://localhost:3000/customers`
```

### Transaction CRUD
List of transaction routes:

|           Route         |  HTTP  |             Description               |
| ----------------------- | ------ | ------------------------------------- |
| /transactions           | GET    | Get all the transactions              |
| /transactions/          | POST   | Create a transactions                 |
| /transactions/:id       | PUT    | Update a transactions for return book |

### Usage
```
Access API `http://localhost:3000/transactions`
```
