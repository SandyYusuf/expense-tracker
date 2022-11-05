# server

## Command 

1. npx sequelize-cli init
2. npx sequelize-cli db:create
3. Tables
   ```bash
    npx sequelize-cli model:generate --name income --attributes name:string,address:string,image:string
    
    npx sequelize-cli model:generate --name expense --attributes title:string,genre:string,image:string,information:string,price:integer,page:integer,authorId:integer
   
   ```
4. npx sequelize-cli db:migrate
5. cek dbeaver