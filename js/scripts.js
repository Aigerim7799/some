let header = document.createElement("header")
document.body.appendChild(header)

let slogan = document.createElement("div")
slogan.classList.add('slogan')
header.appendChild(slogan)

let rounded = document.createElement("img")
rounded.classList.add("rounded","mx-auto", "d-block")
rounded.setAttribute('src', "images/logo.png")
slogan.appendChild(rounded)

let title = document.createElement("h1")
title.classList.add("title")
title.textContent = "SLOGAN SLOGAN SLOGAN"
slogan.appendChild(title)

let burgerMenu = document.createElement("div")
burgerMenu.classList.add ("burger-menu")
header.appendChild( burgerMenu)

let menuTonggle = document.createElement("input")
menuTonggle.id = "menu_tonggle"
menuTonggle.setAttribute("type", "checkbox")
burgerMenu.appendChild(menuTonggle)

let menuBtn = document.createElement("label")
menuBtn.classList.add("menu_btn")
menuBtn.setAttribute("for", "menu_tonggle")
burgerMenu.appendChild(menuBtn)

let menuBox = document.createElement("ul")
menuBox.classList.add("menu_box")
burgerMenu.appendChild(menuBox)

let menuItems = ["Главная","О приложении", "О проекте", "Скачать", "Контакты" ]
menuItems.forEach(el => {
    
    let li = document.createElement('li')
    li.innerHTML = el
    menuBox.appendChild(li)
})


let cards = document.createElement("section")
cards.classList.add("cards")
document.body.appendChild(cards)


for (let i = 0; i < 3; i++) {
    let block = document.createElement("div")
block.classList.add("block")
cards.appendChild(block)
let img3 = document.createElement("img")
img3.classList.add("img")
img3.setAttribute("src", "images/img1.png")
block.appendChild(img3)
let p = document.createElement("p")
p.textContent ="Часто ли Вы опаздываете на работу (учебу)?"
block.appendChild(p)
}

let app = document.createElement("section")
app.classList.add("app")
document.body.appendChild(app)

let h2 = document.createElement("h2")
h2.textContent = "О приложении"
app.appendChild(h2)

let banner = document.createElement("div")
banner.classList.add("banner")
app.appendChild(banner)

let play = document.createElement("img")
play.classList.add("play")
play.setAttribute("src", "images/play.png")
banner.appendChild(play)

let img5 = document.createElement("img")
img5.classList.add("img5")
img5.setAttribute("src", "images/img5.png")
banner.appendChild(img5)

let files = document.createElement("section")
files.classList.add("files")
document.body.appendChild(files)

for(let i = 0; i<5; i++){
let file = document.createElement("img")
file.classList.add("file")
file.setAttribute("src", "images/File.png")
files.appendChild(file)
}

let words = document.createElement("section")
words.classList.add("words")
document.body.appendChild(words)

let h3 = document.createElement("h2")
h3.textContent = "О проекте"
words.appendChild(h3)

let p1 = document.createElement("p")
p1.innerHTML = "Курс для начинающих предпринимателей, направленный на </br>качественный результат за 6 недель. Опытные бизнесмены,</br> инвесторы и профессионалы в своем деле помогают</br> участникам на всех этапах развития их бизнеса: от</br> разработки идеи до ее реализации."
words.appendChild(p1)

let scachat = document.createElement("section")
scachat.classList.add("scachat")
document.body.appendChild(scachat)

let h4 = document.createElement("h2")
h4.textContent ="Скачать"
scachat.appendChild(h4)

let end = document.createElement("div")
end.classList.add("end")
scachat.appendChild(end)

let android = document.createElement("img")
android.classList.add("android")
android.setAttribute("src", "images/android.png")
end.appendChild(android)

let icon = document.createElement("img")
icon.classList.add("icon")
icon.setAttribute("src", "images/icon.png")
end.appendChild(icon)

let p2 = document.createElement("p")
p2.innerHTML = "Курс для начинающих предпринимателей, направленный на </br>качественный результат за 6 недель. Опытные бизнесмены,</br> инвесторы и профессионалы в своем деле помогают</br> участникам на всех этапах развития их бизнеса: от</br> разработки идеи до ее реализации."
scachat.appendChild(p2)

let footer = document.createElement("footer")
document.body.appendChild(footer)

let h5 = document.createElement("h2")
h5.textContent ="SOME"
footer.appendChild(h5)

let web = document.createElement("div")
web.classList.add("web")
footer.appendChild(web)

let social = document.createElement("img")
social.classList.add("social")
social.setAttribute("src", "images/vk.png")
web.appendChild(social)

let social1 = document.createElement("img")
social1.classList.add("social")
social1.setAttribute("src", "images/instagram.png")
web.appendChild(social1)

let social2 = document.createElement("img")
social2.classList.add("social")
social2.setAttribute("src", "images/facebook.png")
web.appendChild(social2)

let row = document.createElement("div")
row.classList.add("row")
footer.appendChild(row)

let column = document.createElement("div")
column.classList.add("column")
row.appendChild(column)

let h6 = document.createElement("h2")
h6.textContent ="Контакты"
column.appendChild(h6)

let p3 = document.createElement("p")
p3.innerHTML = "Tel.: +996 (312) 915000 + </br>Еxt.</br>Fax: +996 (312) 915 028"
column.appendChild(p3)

let column1 = document.createElement("div")
column1.classList.add("column")
row.appendChild(column1)

let h7 = document.createElement("h2")
h7.textContent ="Адреса"
column1.appendChild(h7)

let p4 = document.createElement("p")
p4.innerHTML = "American University of Central Asia </br>7/6 Aaly Tokombaev Street </br>Bishkek, Kyrgyz Republic 720060"
column1.appendChild(p4)

let column2 = document.createElement("div")
column2.classList.add("column")
row.appendChild(column2)

let h8 = document.createElement("h2")
h8.textContent ="Помощь"
column2.appendChild(h8)

let p5 = document.createElement("p")
p5.innerHTML = "Помощь </br> Помощь </br> Помощь"
column2.appendChild(p5)

