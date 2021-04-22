let destinasi = {
    'Jakarta': [
        {
            id: '1',
            paket: 'Silver',
            privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis Tiket Masuk Ancol', 'Makan Malam'],
            Harga: 500000,
            Gambar: "assets/jkt.png"
        },
        {
            id: '2',
            paket: 'Gold',
            privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + dufan', 'Makan Malam'],
            Harga: 1000000,
            Gambar: 'url(gambar dufan)'
        },
        {
            id: '3',
            paket: 'Platinum',
            privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + pulau seribu', 'Makan Malam'],
            Harga: 1500000,
            Gambar: 'url(gambar pulau seribu)'
        },
    ],
    'Bandung': [
        {
            id: '1',
            paket: 'Silver',
            privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis tiket masuk orchid forest', 'Makan Malam'],
            Harga: 500000,
            Gambar: 'url(dari gambar orchid forest)'
        },
        {
            id: '2',
            paket: 'Gold',
            privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk trans studio', 'Makan Malam'],
            Harga: 1000000,
            Gambar: 'url(dari gambar trans studio)'
        },
        {
            id: '3',
            paket: 'Platinum',
            privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Sunrise trip gunung putri Lembang', 'Makan Malam'],
            Harga: 1500000,
            Gambar: 'url(dari gambar gunung putri lembang)'
        }]
}


const cart = document.getElementById('cart')


// function generateCart(destinasi) {
//     let location = document.getElementById("destinasi").innerHTML;
//     cart.innerHTML = "";

//     let divCard = document.createElement('div')
//     divCard.classList.add('card')

//     let imageLocation = document.createElement('img')
//     imageLocation.classList.add("center")
//     imageLocation.src = destinasi[location][0]["Gambar"];
//     divCard.appendChild(imageLocation)

//     let divDetail = document.createElement('div')
//     divDetail.classList.add('detail')
//     divCard.appendChild(divDetail)

//     let h2 = document.createElement("h2")
//     h2.innerHTML = destinasi[location][0]["paket"];
//     divDetail.appendChild(h2);

//     let h3 = document.createElement("h3")
//     h3.innerHTML = "Rp." + destinasi[location][0]["Harga"];
//     divDetail.appendChild(h3);

//     let ol = document.createElement("OL")

//     for (let i = 0; i < destinasi[location][0]["privilage"].length; i++) {
//         let li = document.createElement("LI");
//         li.innerHTML = destinasi[location][0]["privilage"][i]
//         ol.appendChild(li)
//     }
//     divDetail.appendChild(ol)

//     cart.appendChild(divCard);
//     console.log(divCard);
// }

// generateCart(destinasi);


function addButton() {
    // document.getElementById("test").innerHTML = "testasfd";
    let location = document.getElementById("destinasi").innerHTML;
    cart.innerHTML = "";

    let divCard = document.createElement('div')
    divCard.classList.add('card')

    let imageLocation = document.createElement('img')
    imageLocation.classList.add("center")
    imageLocation.src = destinasi[location][0]["Gambar"];
    divCard.appendChild(imageLocation)

    let divDetail = document.createElement('div')
    divDetail.classList.add('detail')
    divCard.appendChild(divDetail)

    let h2 = document.createElement("h2")
    h2.innerHTML = destinasi[location][0]["paket"];
    divDetail.appendChild(h2);

    let h3 = document.createElement("h3")
    h3.innerHTML = "Rp." + destinasi[location][0]["Harga"];
    divDetail.appendChild(h3);

    let ol = document.createElement("OL")

    for (let i = 0; i < destinasi[location][0]["privilage"].length; i++) {
        let li = document.createElement("LI");
        li.innerHTML = destinasi[location][0]["privilage"][i]
        ol.appendChild(li)
    }
    divDetail.appendChild(ol)

    cart.appendChild(divCard);
    // console.log(divCard);
}

