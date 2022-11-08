Expense Tracker ato pelacak pengeluaran

Header


    -menampilkan total uang yang kita punya
    
    
    {-menampilkan pemasukan dan pengeluaran(gagal, logik lama nemu)}
    
form


    -create  = menginput detail pemasukan dan pengeluaran
    
    
    -read    =  menampilkan dan menyimpan riwayat pengeluaran dan pemasukan 
               
Tabel Riwayat
    
    -Delete  = menghapus inputan yang salah

# server

## Command 

1. npx sequelize-cli init
2. npx sequelize-cli db:create
3. Tables
   ```bash
    npx sequelize-cli model:generate --name transaction --attributes date:string,detail:string,categories:string,amount:integer
   ```
4. npx sequelize-cli db:migrate
5. cek dbeaver
