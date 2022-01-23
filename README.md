# fleo-hackathon-backend

Created APIs for :

## 1. Creating Category And SubCategory with current and total target sales : 
`localhost:3000/api/details/createLevel`

  To create a category through PostMan :
  1. Just go through the /createLevel API
  2. Add category:"",targetSales:"",currentSales:""
  3. Send the POST request

## 2. Get the related parents for a category. Return empty if no parent is found. : 
`localhost:3000/api/details/ancestors?category=<Category_Name>`

## 3. Retrieve the category details along with all level child. Therefore to get n-levels , just for loop till that and return the children . Could not implement it due to time restriction . : 
`localhost:3000/api/details/child/?category_id=<Category_Id>`

## 4. To delete all the levels : 
`localhost:3000/api/details/deleteLevel?category_id=<Category_Id>`


## Some defined data in the database for the queries

Category Name : [Tata Steel,Ambuja Cement,Ambuja Cement Factory 1,Ambuja Cement Factory 2]

Category Id : [61ed1b2edd735164f823b11c,61ed1b58dd735164f823b11f,61ed1b98dd735164f823b122,61ed1bb8dd735164f823b126]



## To Run the code :
`1. Clone the repository`

`2. npm i`

`3. npm start`


*All the required enviornment variables are provided in the .env file .* 
