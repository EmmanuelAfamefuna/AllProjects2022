Can only use these two routes!!! /bucket /bucket/:id

Must return everything as JSON.

CRUD - Create, Read, Update, Delete Create = POST verb Read = GET verb Update = PUT verb Delete = DELETE verb

READ

1a) Get method and endpoint - /bucket - less specific <- all items 2) send data back -> JSON 3) send back everything -> array 4) send back the whole object

CREATE

POST method and /bucket endpoint
send back as JSON
send something = success means sending back ONE thing
send back one object - id, description, isComplete
DELETE

DELETE method with /bucket/:id
send JSON
send back whole array (minus the deleted item)
send back one object - id, description, isComplete