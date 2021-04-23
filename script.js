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

const cart = document.getElementById('cart')

let konten = document.getElementById('contentId')
let kontenClass = document.getElementsByClassName('content')

let pilihan = {}

console.log(konten);
console.log(kontenClass);

function generateCart(destinasi) {
    // let location = document.getElementById("destinasi").innerHTML;
    let konten = document.getElementById('contentId')


    for (let key in destinasi) {
        console.log(key);
        let h1 = document.createElement('h1')
        h1.innerHTML = key;
        konten.appendChild(h1);


        for (let i = 0; i < destinasi[key].length; i++) {
            console.log('i=', i)
            let divCard = document.createElement('div')
            divCard.classList.add('card')

            let imageLocation = document.createElement('img')
            imageLocation.classList.add("center")
            imageLocation.src = destinasi[key][i]["Gambar"];
            divCard.appendChild(imageLocation)

            let divDetail = document.createElement('div')
            divDetail.classList.add('cardDetails')
            divCard.appendChild(divDetail)

            let h2 = document.createElement("h2")
            h2.innerHTML = destinasi[key][i]["paket"];
            divDetail.appendChild(h2);

            let h3 = document.createElement("h3")
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
              })

            let hargaArray = destinasi[key][i]["Harga"]
            let hargaFormatted = formatter.format(hargaArray) // "$1,000.00"
            h3.innerHTML = hargaFormatted;
            divDetail.appendChild(h3);

            let ol = document.createElement("OL")

            for (let j = 0; j < destinasi[key][i]["privilage"].length; j++) {
                let li = document.createElement("LI");
                li.innerHTML = destinasi[key][i]["privilage"][j]
                ol.appendChild(li)
            }
            divDetail.appendChild(ol)

            let cartDiv = document.createElement('div')
            divDetail.appendChild(cartDiv)

            let button = document.createElement('button')
            button.addEventListener('click',addToCart)
            button.addEventListener('click', buttonChangeColor)
            button.setAttribute('packageId',destinasi[key][i].id)
            button.innerHTML = "Add to Cart"
            button.className = 'addToCart'
            cartDiv.appendChild(button)

                function buttonChangeColor(event) {
                    button.className = 'addToCartGrey'
                }

            let addMalamDiv = document.createElement('div')
            addMalamDiv.className = 'addMalamDiv'
            cartDiv.appendChild(addMalamDiv)

            let label = document.createElement('label')
            label.innerHTML = 'Jumlah Malam:'
            addMalamDiv.appendChild(label)

            let addButton = document.createElement('button')
            addButton.setAttribute('packageId',destinasi[key][i].id)
            addButton.addEventListener('click', addPilihan)
            addButton.addEventListener('click', addButtonChangeColor)
            addButton.addEventListener('click', inputMalamAdd)
            addButton.innerHTML = "+"
            addMalamDiv.appendChild(addButton)

                function addButtonChangeColor(event) {
                    button.className = 'addToCart'
                    // button.innerHTML = 'Update Cart'
                }

            let inputMalam = document.createElement('input')
            inputMalam.setAttribute('id', inputMalam)
            inputMalam.value = 1
            inputMalam.className = 'inputMalam'
            addMalamDiv.appendChild(inputMalam)

                function inputMalamAdd(event) {
                    inputMalam.value++
                }

            let reduceButton = document.createElement('button')
            reduceButton.setAttribute('packageId',destinasi[key][i].id)
            reduceButton.addEventListener('click', removePilihan)
            reduceButton.addEventListener('click', addButtonChangeColor)
            reduceButton.addEventListener('click', inputMalamReduce)
            reduceButton.innerHTML = "-"
            addMalamDiv.appendChild(reduceButton)

                function addButtonChangeColor(event) {
                    button.className = 'addToCart'
                    // if (cartCard.childNodes.length == 0) {
                    //     button.innerHTML = 'Update Cart'
                    // }
                }

                function inputMalamReduce(event) {
                    if (inputMalam.value > 1) {
                        inputMalam.value--
                    }
                }

            // console.log(divCard);
            konten.appendChild(divCard);
        }
    }

}

generateCart(destinasi);


// id: quantity

let productCard = document.getElementById("card")

function addToCart(event) {
    let buttonId = Number(event.target.getAttribute('packageId'))
    for (let key in destinasi) {
        for (let i = 0; i < destinasi[key].length; i++) {
            if (destinasi[key][i].id == buttonId) {
                if (pilihan[buttonId] == undefined) {
                    pilihan[buttonId] = 0
                }
                if (pilihan[buttonId] < 1) {
                    pilihan[buttonId]++
                }
            }
        }
    }
    generateCard(pilihan)
    console.log(pilihan)
}

function addPilihan(event) {
    let buttonId = Number(event.target.getAttribute('packageId'))
    for (let key in destinasi) {
        for (let i = 0; i < destinasi[key].length; i++) {
            if (destinasi[key][i].id == buttonId) {
                if (pilihan[buttonId] == undefined) {
                    pilihan[buttonId] = 1
                }
                    pilihan[buttonId]++
            }
        }
    }
    console.log(pilihan)
}

function removePilihan(event) {
    let buttonId = Number(event.target.getAttribute('packageId'))
    for (let key in destinasi) {
        for (let i = 0; i < destinasi[key].length; i++) {
            if (destinasi[key][i].id == buttonId) {
                if (pilihan[buttonId] == undefined) {
                    pilihan[buttonId] = 0
                }
                if (pilihan[buttonId] > 1) {
                    pilihan[buttonId]--
                }
            }
        }
    }
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
                    divCard.setAttribute('cartCard', key)
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
                    let hargaPaket = destinasi[kota][i].Harga

                    const formatter = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0
                      })
                      
                    let total = (hargaPaket * jumlahMalam)
                    console.log('total=', total)
                    let totalHarga = formatter.format(total) // "$1,000.00"

                    harga.innerHTML = `${totalHarga}`
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
                            let hargaPaket = destinasi[kota][i].Harga
                            let total = (Number(hargaPaket) * jumlahMalam)
                            let totalHarga = formatter.format(total) // "$1,000.00"
                            harga.innerHTML = `${totalHarga}`
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
                            if (productCard.childNodes.length == 0) {
                                productCard.innerHTML = 'Yah, Keranjangnya Kosong. Kamu Belum Pilih Paket Apapun'
                            }
                        }
                    divDetails.appendChild(buttonDelete)

                    productCard.appendChild(divCard)
                }
            }
        }
    }
    }
}
