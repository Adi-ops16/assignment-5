// heart functionality 
const hearts = document.querySelectorAll(".fa-heart");
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        const heartCount = document.getElementById("heart-count")
        const raisedCounter = parseInt(heartCount.innerText) + 1
        heartCount.innerText = raisedCounter
    })
}
// copy-button functionality
const copyBtns = document.querySelectorAll(".copy-btn");
for (const btn of copyBtns) {
    btn.addEventListener("click", function () {
        const btnCard = this.closest(".card");
        const copyText = btnCard.querySelector(".service-number").innerText
        navigator.clipboard.writeText(copyText);
        alert("Number is copied " + copyText)
        const copyCount = document.getElementById("copy-count")
        copyCount.innerText = parseInt(copyCount.innerText) + 1;
    })
}


const callData = [];
// call button functionality

const callBtns = document.querySelectorAll(".call-btn")

for (const btn of callBtns) {
    btn.addEventListener("click", function () {
        const parentCard = this.closest(".card")
        const serviceName = parentCard.querySelector(".service-name")
        const serviceNumber = parentCard.querySelector(".service-number")
        const coinCount = document.getElementById("coin-count")
        const coinNumber = parseInt(coinCount.innerText)
        if (coinNumber < 20) {
            alert("❌ insufficient coin balance,you need minimum 20 coins to call")
            return
        }
        alert("📞Calling " + serviceName.innerText + " " + serviceNumber.innerText + "...")
        const remainingCoin = coinNumber - 20
        coinCount.innerText = remainingCoin

        const data = {
            name: serviceName.innerText,
            number: serviceNumber.innerText,
            time: new Date().toLocaleTimeString()
        }
        callData.push(data)
        const historyContainer = document.getElementById("history-container")
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="my-2 p-4 rounded-[8px] bg-[#fafafa] flex items-center justify-between">
                <div>
                    <h1 class="font-semibold">${data.name}</h1>
                    <p class="text-[#5c5c5c]">${data.number}</p>
                </div>
                <p class="hind-madurai">${data.time}</p>
            </div>
        `
        historyContainer.appendChild(div)
    })
}


document.getElementById("clear-button").addEventListener("click", function () {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = ''
})