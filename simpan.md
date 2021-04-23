  <body>
      <img class="img" src="Travel.png" alt="travel">
      <div class="fixed">
        <ul>
            <li class="list-style" class="font"><a href="#" class="color-decoration">HOME</a></li>
            <li class="list-style" class="font"><a href="#" class="color-decoration">ABOUT</a></li>
            <li class="list-style" class="font" class="li"><a href="#" class="color-decoration">CONTACT</a></li>
        </ul>
      </div>
      <div class="heading-title"><br>
        <h2 class="h2-pertama">We Take You <span class="khusus">Anywhere</span>.</h2>
        <p class="form">No. 1 solution to all your travel needs</p>
      </div>
      <form action="" class="form">
            <div class="col">
              <input id="tujuan" class="textbox" type="text" placeholder="Your Destination Here">
              <span class="focus-border"></span>
            </div>
              <br>
            <div class="col">
              <input id="budget" class="textbox" type="text" placeholder="Your Budget Here">
              <span class="focus-border"></span>
            </div>
            <div>
                <input id="buttonSubmit" type="button" value="Submit" onclick="" class="myButton">
            </div>
      </form>
    </div>
      <script src="input.js">
        document.getElementById("submitForm").addEventListener('click', function() {
            let inputDestinasi = document.getElementById("destinasi").value
            let inputBudget = document.getElementById("budget").value
            let result = generateDestinasi(inputDestinasi, inputBudget)
            console.log(result)
        })
      </script>
    <div id="contentId"><br><br><br><br><br><br><br><br><br><br>
        <div class="cards">
            <div class="card">
                <img src="Ancol.jpg" alt="Ancol" style="width: 100%;">
                <div class="container">
                    <p class="font head">Jakarta : Paket Silver</p>
                    <p class="font">Harga : Rp. 500.000</p>
                    <ul>
                        <li class="font">Hotel + sarapan</li>
                        <li class="font">Motor sewa</li>
                        <li class="font">Gratis tiket masuk ancol</li>
                        <li class="font">Makan malam</li>
                    </ul>
                </div>