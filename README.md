# Travel-Agent

Travel Agent 

Input : 
•	Budget
•	Destinasi
•	+ fitur filter tambahan berupa misal ingin hotelnya hanya yang bintang 3, dibikin berupa checklist
•	Fitur tambahan berupa jika destinasi tidak tersedia maka tampilkan alert bahwa destinasi tsb blm tersedia.

Output: 
•	List – list paket destinasi (misal 1 hari 1 malam) yang bisa disesuaikan dengan budget
•	Jika input hanya budget maka tampilkan semua list paket destinasi yang mencangkup budget tsb
•	Jika input berupa budget dan destinasi maka tampilkan semua list paket destinasi yang mencangkup budget dan destinasi yang dituju.
•	Jika input hanya destinasi maka tampilkan semua paket destinasi.

Item – item paket:
Kota :
•	Jakarta 
•	Bandung
Jakarta :
•	Paket 500.000 : (paket sehari semalem) 
1.	Hotel + sarapan
2.	Motor sewaan
3.	Gratis tiket masuk ancol
4.	Makan malem

•	Paket 1.000.000 : (paket sehari semalem)
1.	Hotel + sarapan
2.	Mobil sewaan
3.	Gratis tiket masuk ancol + dufan
4.	Makan malam

•	Paket 1.500.000 : (paket sehari semalem)
1.	Hotel + sarapan
2.	Mobil sewaan
3.	Gratis tiket masuk ancol + pulau seribu
4.	Makan malam

Bandung :
•	Paket 500.000 : (paket sehari semalem)
1.	Hotel + sarapan
2.	Motor sewaan
3.	Gratis tiket masuk orchid forest
4.	Makan malam

•	Paket 1.000.000 : (paket sehari semalem)
1.	Hotel + sarapan
2.	Mobil sewaan
3.	Gratis tiket masuk trans studio
4.	Makan malam

•	Paket 1.500.000 : (paket sehari semalem)
1.	Hotel + sarapan
2.	Mobil sewaan
3.	Sunrise trip gunung putri Lembang
4.	Makan malam
Halaman :
Dibuat hanya 1 halaman agar lebih mudah.


IDE: Traveling APP menentukan package destinasi seusai dengan budget yang diminta


Fitur:
- Input budget dan input destinasi di halamannya
- Menampilkan package yang sesuai dengan budget dan destinasi yang sudah diinput
- Menambahkan package tersebut untuk kita bisa beli ( cart/checkout)
- Menampilkan seluruh pacakge yang sudah ditambahkan di dalam cart/checkout
- Submit pembelian package
- Menghapus package yang ada di dalam cart nya



Task

- Mockup dari aplikasi kalian

- Menerapkan mockup ke dalam HTML
  - Input budget/destinasi
  -  List package
  - Cart

- Menyiapkan data yang akan ditampilkan di dalam DOM
  
   {
      'Jakarta': [ 
        { id: 1, privileges: [], ...}
   }
 

- Handle terima input budget/destinasi dari user nya 
- Proses mengambil data yang sesuai dengan apa yang diinput oleh user
- Menampilkan data yang sudah di proses oleh Javascriptnya
- Handle ketika user menekan tombol add package
- Handle menampilkan seluruh package yang ada di cart
- Handle ketika delete cart yang ada
- Handle submit cart nya



let submitButton = document.getElementById('submitForm')

      submitButton.addEventListener('click', function () {
        // Dapeting value dari select box destinasi
        // Dapein value dari input budget
        let destination = 'Jakarta'
        let budget = 1000000

        let result = generateDestinasi(destination, budget)
      })