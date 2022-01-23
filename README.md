# fleo-hackathon-backend

Created APIs for :

1. Creating Category And SubCategory with current and total target sales : localhost:3000/details/createLevel .
2. Get the related parents for a category. Return empty if no parent is found. : localhost:3000/details/ancestors?category=<Category_Name>
3. Retrieve the category details along with all level child. Therefore to get n-levels , just for loop till that and return the children . Could not implement it due to time restriction . : localhost:3000/details/child/?category_id=<Category_Id> 
4. To delete all the levels : localhost:3000/details/deleteLevel?category_id=<Category_Id>


Category Name : [Tata Steel,Factory]
Category Id : [61ed0d06ff91bbd266a598ea,61ed100c2d54a08566881248]


To create a category through PostMan :
1. Just go through the /createLevel API
2. Add category:"",targetSales:"",currentSales:""
3. Send the POST request


All the required enviornment variables are provided in the .env file . 
