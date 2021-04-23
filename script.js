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

    generateCart(generateDestinasi(inputDestinasi, inputBudget));

}


let inputDestinasi = document.getElementById("tujuan").value
let inputBudget = document.getElementById("budget").value

// console.log(generateDestinasi(inputDestinasi, inputBudget));

generateCart(generateDestinasi(inputDestinasi, inputBudget));


function generateDestinasi(parameterDestinasi, parameterBudget) {

    // parameterDestinasi = document.getElementById("tujuan").value;
    // parameterBudget = document.getElementById("budget").value;



    if (parameterDestinasi === '' && parameterBudget === "0") {
        return `Silahkan masukkan destinasi dan tujuan anda`
    }
    if (typeof parameterDestinasi !== 'string') {
        return `Invalid input`
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

    if (budget === "0") {
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
            h3.innerHTML = "Rp." + Number(destinasi[key][i]["Harga"]).toLocaleString("id-ID");
            divDetail.appendChild(h3);


            let ol = document.createElement("OL")

            for (let j = 0; j < destinasi[key][i]["privilage"].length; j++) {
                let li = document.createElement("LI");
                li.innerHTML = destinasi[key][i]["privilage"][j]
                ol.appendChild(li)
            }


            divDetail.appendChild(ol)

            let divButtons = document.createElement('div')
            divButtons.classList.add('buttons')

            let button = document.createElement('button')
            button.addEventListener('click', Add)
            button.setAttribute('idTest', i)
            button.innerHTML = "Add"
            divButtons.appendChild(button)

            // console.log(divCard);
            konten.appendChild(divCard);


            konten.appendChild(divButtons);
        }
    }

}







// function addButton() {
//     // document.getElementById("test").innerHTML = "testasfd";
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
//     // console.log(divCard);
// }

function Add() {
    console.log("test");
}