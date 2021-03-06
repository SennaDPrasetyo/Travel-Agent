let destinasi = {
    'Jakarta': [ 
        { id: '1', 
        paket: 'Silver', 
        privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis Tiket Masuk Ancol', 'Makan Malam'],
        Harga: 500000,
        Gambar: './Ancol.jpg'
        },
        { id: '2', 
        paket: 'Gold', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + dufan', 'Makan Malam'],
        Harga: 1000000,
        Gambar: './dufan.jpg'
        },
        { id: '3', 
        paket: 'Platinum', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + pulau seribu', 'Makan Malam'],
        Harga: 1500000,
        Gambar: './Pulau-Pramuka.png'
        },
    ],
    'Bandung': [
        { id: '4', 
        paket: 'Silver', 
        privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis tiket masuk orchid forest', 'Makan Malam'],
        Harga: 500000,
        Gambar: './Harga_Tiket_Masuk_Orchid_Forest_Lembang_-_Cikole_Bandung.jpg'
        },
        { id: '5', 
        paket: 'Gold', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk trans studio', 'Makan Malam'],
        Harga: 1000000,
        Gambar: './Trans-Studio-Bandung.png'
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



let submitForm = document.getElementById("buttonSubmit");

// submitForm.addEventListener('click', inputed);

function inputed() {

}



const buttonSubmit = document.getElementById('buttonSubmit')
buttonSubmit.addEventListener('click', clickButtonSubmit)

function clickButtonSubmit() {
    konten.innerHTML = "";


    let inputDestinasi = document.getElementById("tujuan").value
    let inputBudget = document.getElementById("budget").value

    console.log(generateDestinasi(inputDestinasi, inputBudget));
    if (typeof (generateDestinasi(inputDestinasi, inputBudget)) ==="string"){
        let errorMessage = document.createElement("h1");
        errorMessage.innerHTML = generateDestinasi(inputDestinasi, inputBudget);
        konten.appendChild(errorMessage);
    } else {
        generateCart(generateDestinasi(inputDestinasi, inputBudget));

    }


}


let inputDestinasi = document.getElementById("tujuan").value
let inputBudget = document.getElementById("budget").value

// console.log(generateDestinasi(inputDestinasi, inputBudget));


function generateDestinasi(parameterDestinasi, parameterBudget) {

    // parameterDestinasi = document.getElementById("tujuan").value;
    // parameterBudget = document.getElementById("budget").value;



    if (parameterDestinasi === '' && parameterBudget === "0") {
        alert(`Silahkan masukkan destinasi dan tujuan anda`) 
    }
    if (typeof parameterDestinasi !== 'string') {
        alert('Invalid Input')
    }

    if (isNaN(parameterBudget)) {
        return "Invalid input";
    }
    if (parameterDestinasi === '') {
        let output = {}

        for (let key in destinasi) {
            for (let i = 0; i < destinasi[key].length; i++) {
                let paket = destinasi[key][i]
                let price = destinasi[key][i]['Harga']
                if (output[key] === undefined) {
                    output[key] = []
                }
                if (parameterBudget >= price) {
                    output[key].push(paket)
                }
            }
        }
        return output
    }
    
    if (parameterBudget === "0") {
        let output = {}

        for (let i = 0; i < destinasi[parameterDestinasi].length; i++) {
            let paket = destinasi[parameterDestinasi][i]
            if (output[parameterDestinasi] === undefined) {
                output[parameterDestinasi] = []
            }
            output[parameterDestinasi].push(paket)
        }
        return output;
    }


    if (parameterDestinasi === 'Jakarta' || parameterDestinasi === 'Bandung') {
        let output = {}

        for (let key in destinasi) {
            if (key === parameterDestinasi) {
                for (let i = 0; i < destinasi[key].length; i++) {
                    let paket = destinasi[key][i]
                    let price = destinasi[key][i]['Harga']
                    if (output[key] === undefined) {
                        output[key] = []
                    }
                    if (Number(parameterBudget) >= price) {
                        output[key].push(paket)
                    }
                }
            }
        }
        return output
    }
    if (parameterDestinasi !== 'Jakarta' || parameterDestinasi !== 'Bandung') {
        return `Mohon maaf destinasi anda belum ada dipaket kami`
    }
}




let pilihan = {}

console.log(konten);



function generateCart(destinasi) {
    // let location = document.getElementById("destinasi").innerHTML;
    let konten = document.getElementById('contentId')


    for (let key in destinasi) {
        console.log(key);
        

        for (let i = 0; i < destinasi[key].length; i++) {
            console.log('i=', i)
            let divCard = document.createElement('div')
            divCard.classList.add('card')

            let imageLocation = document.createElement('img')
            imageLocation.src = destinasi[key][i]["Gambar"];
            imageLocation.style.width = "100%";
            divCard.appendChild(imageLocation)

            let divDetail = document.createElement('div')
            divDetail.classList.add('container')
            divCard.appendChild(divDetail)

            let h2 = document.createElement("p")
            h2.innerHTML = key + " : Paket " + destinasi[key][i]["paket"] ;
            h2.classList.add("font");
            h2.classList.add("head");
            divDetail.appendChild(h2);

            let h3 = document.createElement("p")

        
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
              })


            let hargaArray = destinasi[key][i]["Harga"]
            let hargaFormatted = formatter.format(hargaArray) // "$1,000.00"
            h3.innerHTML = "Harga : " + hargaFormatted;
            h3.classList.add("font");
            divDetail.appendChild(h3);

            let ol = document.createElement("UL")

            for (let j = 0; j < destinasi[key][i]["privilage"].length; j++) {
                let li = document.createElement("LI");
                li.innerHTML = destinasi[key][i]["privilage"][j]
                ol.appendChild(li)
            }


            divDetail.appendChild(ol)
            
            let addMalamDiv = document.createElement('div')
            addMalamDiv.className = 'addMalamDiv'
            addMalamDiv.style.marginBottom = '0.5rem'
            divDetail.appendChild(addMalamDiv)

            
            let cartDiv = document.createElement('div')
            divDetail.appendChild(cartDiv)

            let button = document.createElement('button')
            button.addEventListener('click',addToCart)
            button.addEventListener('click', buttonChangeColor)
            button.setAttribute('packageId',destinasi[key][i].id)
            button.innerHTML = "Add to Cart"
            button.className = 'addToCart'
            button.style.marginBottom = '1rem'
            cartDiv.appendChild(button)

                function buttonChangeColor(event) {
                    button.className = 'addToCartGrey'
                }

            
            // cartDiv.appendChild(addMalamDiv)

            let label = document.createElement('label')
            label.innerHTML = 'Jumlah Malam:'
            label.style.marginRight = '1rem'
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
            inputMalam.setAttribute('id', "inputMalam")
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


            // konten.appendChild(divButtons);
        }
    }

}

let productCard = document.getElementById("card")

function addToCart(event) {
    let buttonId = Number(event.target.getAttribute('packageId'))
    let inputMalam = document.getElementById("inputMalam")
    for (let key in destinasi) {
        for (let i = 0; i < destinasi[key].length; i++) {
            if (destinasi[key][i].id == buttonId) {
                if (pilihan[buttonId] == undefined) {
                    pilihan[buttonId] = 0
                }
                if (pilihan[buttonId] < 1) {
                    pilihan[buttonId] += Number(inputMalam.value)
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

let totalSemua = {}

let totalAmount = 0

let totalCheckout = document.getElementById('total')
let amount = document.createElement('h2')
totalCheckout.appendChild(amount)

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

                    // let imgPackage = document.createElement('img')
                    // imgPackage.src = destinasi[kota][i].Gambar
                    // divImage.appendChild(imgPackage)

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
                    harga.setAttribute = ('hargaTotal', key)
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
                            hargaPaket = destinasi[kota][i].Harga
                            total = (Number(hargaPaket) * jumlahMalam)
                            totalHarga = formatter.format(total) // "$1,000.00"
                            harga.innerHTML = `${totalHarga}`
                            malam.innerHTML = `Jumlah: ${jumlahMalam} malam`
                            totalSemua[key] = 0
                            totalSemua[key] = totalHarga
                            console.log(totalSemua, 'after reduce')
                            console.log(totalSemua)
                            totalAmount = 0
                            totalSemua[key] = 0
                            totalSemua[key] = (jumlahMalam * hargaPaket)
                            for (let key in totalSemua) {
                                totalSemua[key]
                                totalAmount += totalSemua[key]
                            }
                            amount.innerHTML = `Total: ${formatter.format(totalAmount)}`
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
                            const formatter = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'IDR',
                                minimumFractionDigits: 0
                              })
                            divCard.remove()
                            pilihan[key] = 0
                            console.log('pilihankey', pilihan)
                            console.log('pilihankey', key)
                            totalAmount = 0
                            totalSemua[key] = 0
                            totalSemua[key] = (pilihan[key] * hargaPaket)
                            console.log('totalSemua remove', totalSemua)
                            for (let key in totalSemua) {
                                console.log('key', key)
                                totalSemua[key]
                                console.log(totalSemua[key])
                                console.log(typeof totalSemua[key])
                                totalAmount += totalSemua[key]
                                console.log('ttalAmount', totalAmount)
                            }
                            amount.innerHTML = `Total: ${formatter.format(totalAmount)}`
                            if (productCard.childNodes.length == 0) {
                                productCard.innerHTML = 'Yah, Keranjangnya Kosong. Kamu Belum Pilih Paket Apapun'
                                totalAmount = 0
                                amount.innerHTML = `Total: ${formatter.format(totalAmount)}`
                            }
                        }
                    divDetails.appendChild(buttonDelete)

                    totalSemua[key] = (jumlahMalam * hargaPaket)
                    console.log(totalSemua)
                    productCard.appendChild(divCard)
                }
            }
        }
    }
    }
    console.log(totalSemua)
    totalAmount = 0
    for (let key in totalSemua) {
        console.log('key', key)
        totalSemua[key]
        console.log(totalSemua[key])
        console.log(typeof totalSemua[key])
        totalAmount += totalSemua[key]
        console.log('ttalAmount', totalAmount)
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      })
    amount.innerHTML = `Total: ${formatter.format(totalAmount)}`
}

function checkoutButton() {
    let pembayaran = document.getElementById('pembayaran')
    pembayaran.style.display = "block"
}