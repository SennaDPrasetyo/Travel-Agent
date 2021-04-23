function generateDestinasi(destinasi = '', budget = 0){
    let travel = {
        'Jakarta': [ 
        { id: '1', 
        paket: 'Silver', 
        privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis Tiket Masuk Ancol', 'Makan Malam'],
        Harga: 500000,
        Gambar: 'url(gambar ancol)'
        },
        { id: '2', 
        paket: 'Gold', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + dufan', 'Makan Malam'],
        Harga: 1000000,
        Gambar: 'url(gambar dufan)'
        },
        { id: '3', 
        paket: 'Platinum', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk ancol + pulau seribu', 'Makan Malam'],
        Harga: 1500000,
        Gambar: 'url(gambar pulau seribu)'
        },
        ],
        'Bandung': [
        { id: '4', 
        paket: 'Silver', 
        privilage: ['Hotel + Sarapan', 'Motor Sewaan', 'Gratis tiket masuk orchid forest', 'Makan Malam'],
        Harga: 500000,
        Gambar: 'url(dari gambar orchid forest)'
        },
        { id: '5', 
        paket: 'Gold', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Gratis tiket masuk trans studio', 'Makan Malam'],
        Harga: 1000000,
        Gambar: 'url(dari gambar trans studio)'
        },
        { id: '6', 
        paket: 'Platinum', 
        privilage: ['Hotel + Sarapan', 'Mobil Sewaan', 'Sunrise trip gunung putri Lembang', 'Makan Malam'],
        Harga: 1500000,
        Gambar: 'url(dari gambar gunung putri lembang)'
        }] 
     }

    if (destinasi === '' && budget === 0){
         return `Silahkan masukkan destinasi dan tujuan anda`
     }
    if (typeof destinasi !== 'string' && typeof budget !== 'number'){
        return `Invalid input`
    }
    if (destinasi === ''){
        let output = {}

        for (let key in travel){
            for (let i = 0; i < travel[key].length; i++){
                let paket = travel[key][i]
                let price = travel[key][i]['Harga']
                if (output[key] === undefined){
                    output[key] = []
                }
                if (budget >= price){
                    output[key].push(paket)
                }
            }
        }
        return output
    }
    if (budget === 0){
        let output = {}

        for (let i = 0; i < travel[destinasi].length; i++){
            let paket = travel[destinasi][i]
            if (output[destinasi] === undefined){
                output[destinasi] = []
            }
            output[destinasi].push(paket)
        }
        return output
    }
    if (destinasi === 'Jakarta' || destinasi === 'Bandung') {
        let output = {}
        
        for (let key in travel){
            if (key === destinasi){
                for (let i = 0; i < travel[key].length; i++){
                    let paket = travel[key][i]
                    let price = travel[key][i]['Harga']
                    if (output[key] === undefined){
                        output[key] = []
                    }
                    if (budget >= price){
                        output[key].push(paket)
                    }
                }
            }
        }
        return output
    }
    if (destinasi !== 'Jakarta' || destinasi !== 'Bandung'){
        return `Mohon maaf destinasi anda belum ada dipaket kami`
    }
}

// console.log(generateDestinasi('Cirebon', 1000000))