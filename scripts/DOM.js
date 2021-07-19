const $switch_button = document.querySelector (".switch_button")
const $header = document.querySelector ("header")
const $main_content = document.querySelector (".main_content")
const $new_card = document.querySelector (".new_card")
const $new_card_2 = document.querySelector (".new_card_2")
const $new_card_3 = document.querySelector (".new_card_3")
const $button_read = document.querySelector (".button_read")
const $button_read_2 = document.querySelector (".button_read_2")
const $button_read_3 = document.querySelector (".button_read_3")
const $page_title = document.querySelector ("page_title")



function switchTitle() {
    $page_title.classList.toggle("dark_title")
}

function switchTheme() {
    $header.classList.toggle("dark_header")
}

function switchButton() {
    $switch_button.classList.toggle("dark_button")
    if ($switch_button.innerText == "Дневная версия сайта") {
        $switch_button.innerText = "Ночная версия сайта"
    } else {
        $switch_button.innerText = "Дневная версия сайта"
    }
}

function switchMainContent() {
    $main_content.classList.toggle("dark_content")
}



function switchCards() {
    $new_card.classList.toggle("dark_card")
}
function switchCards_2() {
    $new_card_2.classList.toggle("dark_card_2")
}
function switchCards_3() {
    $new_card_3.classList.toggle("dark_card_3")
}

function switchButtonRead() {
    $button_read.classList.toggle("dark_button_read")
}
function switchButtonRead_2() {
    $button_read_2.classList.toggle("dark_button_read_2")
}
function switchButtonRead_3() {
    $button_read_3.classList.toggle("dark_button_read_3")
}

$switch_button.addEventListener("click", switchButtonRead)
$switch_button.addEventListener("click", switchButtonRead_2)
$switch_button.addEventListener("click", switchButtonRead_3)
$switch_button.addEventListener("click", switchCards_2)
$switch_button.addEventListener("click", switchCards_3)
$switch_button.addEventListener("click", switchCards)
$switch_button.addEventListener("click",switchTheme)
$switch_button.addEventListener("click",switchMainContent)
$switch_button.addEventListener("click", switchButton)
$switch_button.addEventListener("click", switchTitle)



