Expense Tracker ato pelacak pengeluaran

+Halaman Beranda
    -menampilkan total uang yang kita punya
    -menampilkan pemasukan dan pengeluaran
+Halaman Input
    -create  = menginput detail pemasukan dan pengeluaran
    -read    =  menampilkan dan menyimpan riwayat pengeluaran dan pemasukan 
                menampilkan jumlah masing" pengeluaran dan pemasukan
+Halaman Riwayat
    -update  = memperbaiki detail yang salah
    -Delete  = menghapus inputan yang salah

# server

## Command 

1. npx sequelize-cli init
2. npx sequelize-cli db:create
3. Tables
   ```bash
    npx sequelize-cli model:generate --name income --attributes date:string,information:string,moneyIn:integer
    
    npx sequelize-cli model:generate --name expense --attributes date:string,information:string,moneyOut:integer
   
   ```
4. npx sequelize-cli db:migrate
5. cek dbeaver
