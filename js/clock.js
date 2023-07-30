//isim bilgisini getiren js
let nameInfo = prompt("lütfen adınızı giriniz:")
let MyName = document.querySelector("#myName")
let nullName = "boş giriş yaptınız"
//MyName.innerHTML = nameInfo; 
//MyName.innerHTML = `${nameInfo}`;

MyName.innerHTML = `${nameInfo.length>0 ? nameInfo : `<strong style="color:red; ">"kullanıcı adı girmedin." </strong>`}`

// saat bilgisini getiren 
function showTime(){

    let myClock = document.querySelector("#myClock")
    let date = new Date();
    let days = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    
    myClock.innerHTML = 
    ` ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${days[date.getDay()]}`
}

setInterval(showTime,1000)
// setTimeout (showTime,1000) //akmayan saati gösterir

