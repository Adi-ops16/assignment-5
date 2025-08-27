// card1 functionality
document.getElementById("card1-call-btn").addEventListener("click", function () {

    const card1Heading = getElementByIdText("card1-name")
    const card1Number = getElementByIdText("card1-number")
    const coinCount = getElementByIdText("coin-count")
    if (coinCount < 20) {
        alert("❌ insufficient coin balance,you need minimum 20 coins to call ")
        return
    }
    alert("📞Calling " + card1Heading + " " + card1Number)
    const remainingCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = remainingCoin

    const data = {
        name: "National Emergency Number",
        number: 999,
        time: new Date().toLocaleTimeString()
    }
    callData.push(data)
    historyFunction()
})

// card2 functionality
document.getElementById("card2-call-btn").addEventListener("click", function () {

    const card2Heading = getElementByIdText("card2-name")
    const card2Number = getElementByIdText("card2-number")
    const coinCount = getElementByIdText("coin-count")
    if (coinCount < 20) {
        alert("❌ insufficient coin balance,you need minimum 20 coins to call ")
        return
    }
    alert("📞Calling " + card2Heading + " " + card2Number)
    const remainingCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = remainingCoin

    const data = {
        name: "Police Helpline Number",
        number: 999,
        time: new Date().toLocaleTimeString()
    }
    callData.push(data)
    historyFunction()
})


<!-- history div -->

<div class="my-2 p-4 rounded-[8px] bg-[#fafafa] flex items-center justify-between">
     <div>
        <h1 class="font-semibold">${data.name}</h1>
        <p class="text-[#5c5c5c]">${data.number}</p>
     </div>
    <p class="hind-madurai">${data.time}</p>
</div>