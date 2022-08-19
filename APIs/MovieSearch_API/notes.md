Install:

depends express ejs request dotenv

devs morgan

Flow of data.

When we make our HTTP call a) data type -> JSON string
What do we do with JSON? a) parse b) data type JS object
5 properties
How do we get JUST the results a) data. results b) data type -> array c) THIS array is being sent to EJS file
EJS file:

data variable a) array
Iterate through array with forEach a) Every time we iterate we have to call each element something!!! b) data type of every element -> JS objects c) can reference keys in the object