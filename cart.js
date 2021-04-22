let destinasi = {
    'Jakarta': [ 
        { id: '1', 
        paket: 'Silver', 
        privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis Tiket Masuk Ancol', 'Makan Malam'],
        Harga: 500000,
        Gambar: './toa-heftiba-a9pFSC8dTlo-unsplash.jpg'
        },
        { id: '2', 
        paket: 'Gold', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + dufan', 'Makan Malam'],
        Harga: 1000000,
        Gambar: './tiket_dufan_ancol_free_tiket_ancol__tiket_dunia_fantasi_ancol_1565117487_18f9795b_progressive.jpg'
        },
        { id: '3', 
        paket: 'Platinum', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + pulau seribu', 'Makan Malam'],
        Harga: 1500000,
        Gambar: './photo-1536392706976-e486e2ba97af.jpg'
        },
    ],
    'Bandung': [
        { id: '4', 
        paket: 'Silver', 
        privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis tiket masuk orchid forest', 'Makan Malam'],
        Harga: 500000,
        Gambar: './Orchid%20Forest%20Cikole%20Lembang.jpg'
        },
        { id: '5', 
        paket: 'Gold', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk trans studio', 'Makan Malam'],
        Harga: 1000000,
        Gambar: './Spektakuler-Ayo-Jajal-Wahana-di-Trans-Studio-Cibubur-01-Finansialku.jpg'
        },
        { id: '6', 
        paket: 'Platinum', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Sunrise trip gunung putri Lembang', 'Makan Malam'],
        Harga: 1500000,
        Gambar: './gunung-putri-lembang-bandung.jpg'
        }] 
 }

let pilihan = {}

// id: quantity

let productCard = document.getElementById("card")

function addPilihan(event) {
    let buttonId = Number(event.target.getAttribute('packageId'))
    for (let key in destinasi) {
        for (let i = 0; i < destinasi[key].length; i++) {
            if (destinasi[key][i].id == buttonId) {
                if (pilihan[buttonId] == undefined) {
                    pilihan[buttonId] = 0
                }
                pilihan[buttonId]++
            }
        }
    }
    generateCard(pilihan)
    console.log(pilihan)
}

/*
Pilihan = 
{
1: 2,
2: 1
}
*/

function generateCard(data) {
    productCard.innerHTML = ''
    for (let key in data) {
        if (data[key] > 0) {
        // console.log(key, 'key')
        for (let kota in destinasi) {
            // console.log(kota, 'kota')
            for (let i = 0; i < destinasi[kota].length; i++) {
                if (key == destinasi[kota][i].id) {
                    console.log(key)
                    console.log(destinasi[kota][i].id)
                    let divCard = document.createElement('div')
                    divCard.setAttribute('divCard', key)
                    divCard.className = 'card'

                    let divImage = document.createElement('div')
                    divImage.classList.add('cardImg')
                    divCard.appendChild(divImage)

                    let imgPackage = document.createElement('img')
                    imgPackage.src = destinasi[kota][i].Gambar
                    divImage.appendChild(imgPackage)

                    let divDetails = document.createElement('div')
                    divDetails.classList.add('cardDetails')
                    divCard.appendChild(divDetails)
                    
                    let cityName = document.createElement('h2')
                    cityName.innerHTML = kota
                    divDetails.appendChild(cityName)

                    let packageName = document.createElement('h3')
                    packageName.innerHTML = `Paket Wisata ${destinasi[kota][i].paket}`
                    divDetails.appendChild(packageName)

                    let termasuk = document.createElement('ul')
                        for (let j = 0; j < destinasi[kota][i].privilage.length; j++) {
                            let manfaat = destinasi[kota][i].privilage[j]
                            var li = document.createElement("li");
                            var text = document.createTextNode(manfaat);
                            li.appendChild(text);
                            termasuk.appendChild(li);
                        }

                    divDetails.appendChild(termasuk)

                    let harga = document.createElement('h3')
                    harga.className = 'harga'
                    let jumlahMalam = data[key]
                    let total = (destinasi[kota][i].Harga * jumlahMalam)
                    harga.innerHTML = `Rp ${total}`
                    divDetails.appendChild(harga)

                    let malam = document.createElement('p')
                    malam.innerHTML = `Jumlah: ${jumlahMalam} malam`
                    divDetails.appendChild(malam)

                    let button = document.createElement('button')
                    button.setAttribute('kurangi', key)
                    button.className = 'kurangi'
                    button.innerHTML = 'Kurangi'
                    button.addEventListener('click',remove)

                    let kurangiAlert = document.createElement('footer')

                        function remove() {
                            if (jumlahMalam > 1) {
                            harga.innerHTML = ''
                            malam.innerHTML = ''
                            jumlahMalam -= 1
                            total = (destinasi[kota][i].Harga * jumlahMalam)
                            harga.innerHTML = `Rp ${total}`
                            malam.innerHTML = `Jumlah: ${jumlahMalam} malam`
                            } else {
                                kurangiAlert.className = 'kurangiAlert'
                                kurangiAlert.innerHTML = 'Jumlah Minimal 1 Malam'
                                divDetails.appendChild(kurangiAlert)
                            }
                        }
                    divDetails.appendChild(button)

                    let buttonDelete = document.createElement('button')
                    buttonDelete.setAttribute('deleteCard', key)
                    buttonDelete.className = 'delete'
                    buttonDelete.innerHTML = 'Hapus Produk'
                    buttonDelete.addEventListener('click',deleteData)
                        function deleteData() {
                            divCard.remove()
                            pilihan[key] = 0
                        }
                    divDetails.appendChild(buttonDelete)

                    productCard.appendChild(divCard)
                }
            }
        }
    }
    }
}

