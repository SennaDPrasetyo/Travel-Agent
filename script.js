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
            Gambar: 'assets/jkt.png'
        },
        {
            id: '3',
            paket: 'Platinum',
            privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + pulau seribu', 'Makan Malam'],
            Harga: 1500000,
            Gambar: 'assets/jkt.png'
        },
    ],
    'Bandung': [
        {
            id: '4',
            paket: 'Silver',
            privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis tiket masuk orchid forest', 'Makan Malam'],
            Harga: 500000,
            Gambar: 'assets/bdg.png'
        },
        {
            id: '5',
            paket: 'Gold',
            privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk trans studio', 'Makan Malam'],
            Harga: 1000000,
            Gambar: 'assets/bdg.png'
        },
        {
            id: '6',
            paket: 'Platinum',
            privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Sunrise trip gunung putri Lembang', 'Makan Malam'],
            Harga: 1500000,
            Gambar: 'assets/bdg.png'
        }]
}


const cart = document.getElementById('cart')

let konten = document.getElementById('contentId')
let kontenClass = document.getElementsByClassName('content')

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
            let divCard = document.createElement('div')
            divCard.classList.add('card')

            let imageLocation = document.createElement('img')
            imageLocation.classList.add("center")
            imageLocation.src = destinasi[key][i]["Gambar"];
            divCard.appendChild(imageLocation)

            let divDetail = document.createElement('div')
            divDetail.classList.add('detail')
            divCard.appendChild(divDetail)

            let h2 = document.createElement("h2")
            h2.innerHTML = destinasi[key][i]["paket"];
            divDetail.appendChild(h2);

            let h3 = document.createElement("h3")
            h3.innerHTML = "Rp." + destinasi[key][i]["Harga"];
            divDetail.appendChild(h3);


            let ol = document.createElement("OL")

            for (let j = 0; j < destinasi[key][i]["privilage"].length; j++) {
                let li = document.createElement("LI");
                li.innerHTML = destinasi[key][i]["privilage"][j]
                ol.appendChild(li)
            }
            divDetail.appendChild(ol)
            // console.log(divCard);
            konten.appendChild(divCard);
        }
    }

}

generateCart(destinasi);


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

