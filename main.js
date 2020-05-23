document.getElementById('output').style.visibility = "hidden";
document.getElementById('userInput').style.visibility = "hidden";

// Event listener on input keyup
document.getElementById('weightType').addEventListener('change', (e) => {
    document.getElementById('errorMsg').style.display = "none";
    document.getElementById('userInput').style.visibility = "visible";
    document.getElementById('output').style.visibility = "visible";

    let currentInputValue = document.getElementById('userInput').value;
    let selectedWeightType = e.target.value;

    if (selectedWeightType === "Pound") {
        poundConverter(currentInputValue);
    }
    else if (selectedWeightType === "tonnes") {
        tonnesConverter(currentInputValue);
    }
    else if (selectedWeightType === "Kilogram") {
        kilogramConverter(currentInputValue);
    }
    else if (selectedWeightType === "Gram") {
        gramConverter(currentInputValue);
    }
    else if (selectedWeightType === "Milligram") {
        milligramConverter(currentInputValue);
    }
    else if (selectedWeightType === "Microgram") {
        microgramConverter(currentInputValue);
    }
    else if (selectedWeightType === "Imperial ton") {
        imperialtonConverter(currentInputValue);
    }
    else if (selectedWeightType === "US ton") {
        ustonConverter(currentInputValue);
    }
    else if (selectedWeightType === "stone") {
        stoneConverter(currentInputValue);
    }
    else if (selectedWeightType === "Ounce") {
        ounceConverter(currentInputValue);
    }
    else {
        document.getElementById('userInput').style.visibility = "hidden";
        document.getElementById('output').style.visibility = "hidden";
        document.getElementById('errorMsg').style.display = "block";
    }

    document.getElementById('userInput').addEventListener('keyup', (e) => {
        document.getElementById('output').style.visibility = "visible";

        let userInput = e.target.value;

        if (selectedWeightType === "Pound") {
            poundConverter(userInput);
        }
        else if (selectedWeightType === "tonnes") {
            tonnesConverter(userInput);
        }
        else if (selectedWeightType === "Kilogram") {
            kilogramConverter(userInput);
        }
        else if (selectedWeightType === "Gram") {
            gramConverter(userInput);
        }
        else if (selectedWeightType === "Milligram") {
            milligramConverter(userInput);
        }
        else if (selectedWeightType === "Microgram") {
            microgramConverter(userInput);
        }
        else if (selectedWeightType === "Imperial ton") {
            imperialtonConverter(userInput);
        }
        else if (selectedWeightType === "US ton") {
            ustonConverter(userInput);
        }
        else if (selectedWeightType === "stone") {
            stoneConverter(userInput);
        }
        else if (selectedWeightType === "Ounce") {
            ounceConverter(userInput);
        }
        else {
            document.getElementById('output').style.visibility = "hidden";
        }
    });
})

function poundConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput * 454}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 2240}</strong>`;
    document.getElementById('w3').innerHTML = `Kilogram: <strong> ${userInput / 2.205}</strong>`;
    document.getElementById('w4').innerHTML = `Microgram: <strong>${userInput * 4.536e+8}</strong>`;
    document.getElementById('w5').innerHTML = `Milligram: <strong>${userInput * 453592}</strong>`;
    document.getElementById('w6').innerHTML = `Ounce: <strong>${userInput * 16}</strong>`;
    document.getElementById('w7').innerHTML = `Stone: <strong>${userInput / 14}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong>${userInput / 2205}</strong>`;
    document.getElementById('w9').innerHTML = `Us ton: <strong>${userInput / 2000}</strong>`;
}

function tonnesConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput * 1e+6}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 1.016}</strong>`;
    document.getElementById('w3').innerHTML = `Kilogram: <strong> ${userInput * 1000}</strong>`;
    document.getElementById('w4').innerHTML = `Microgram: <strong>${userInput * 1e+12}</strong>`;
    document.getElementById('w5').innerHTML = `Milligram: <strong>${userInput * 1e+9}</strong>`;
    document.getElementById('w6').innerHTML = `Ounce: <strong>${userInput * 35274}</strong>`;
    document.getElementById('w7').innerHTML = `Pound: <strong>${userInput / 2205}</strong>`;
    document.getElementById('w8').innerHTML = `Stone: <strong>${userInput * 157}</strong>`;
    document.getElementById('w9').innerHTML = `Us ton: <strong>${userInput * 1.102}</strong>`;
}

function kilogramConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput * 1000}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 1016}</strong>`;
    document.getElementById('w3').innerHTML = `Microgram: <strong>${userInput * 1e+9}</strong>`;
    document.getElementById('w4').innerHTML = `Milligram: <strong>${userInput * 1e+6}</strong>`;
    document.getElementById('w5').innerHTML = `Ounce: <strong>${userInput * 35.274}</strong>`;
    document.getElementById('w6').innerHTML = `Pound: <strong>${userInput * 2.205}</strong>`;
    document.getElementById('w7').innerHTML = `Stone: <strong>${userInput / 6.35}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong> ${userInput / 1000}</strong>`;
    document.getElementById('w9').innerHTML = `Us ton: <strong>${userInput / 907}</strong>`;
}

function gramConverter(userInput) {
    document.getElementById('w1').innerHTML = `Imperial ton: <strong>${userInput / 1.016e+6}</strong>`;
    document.getElementById('w2').innerHTML = `Kilogram: <strong>${userInput / 1000}</strong>`;
    document.getElementById('w3').innerHTML = `Microgram: <strong>${userInput * 1e+6}</strong>`;
    document.getElementById('w4').innerHTML = `Milligram: <strong>${userInput * 1000}</strong>`;
    document.getElementById('w5').innerHTML = `Ounce: <strong>${userInput / 28.35}</strong>`;
    document.getElementById('w6').innerHTML = `Pound: <strong>${userInput / 454}</strong>`;
    document.getElementById('w7').innerHTML = `Stone: <strong>${userInput / 6350}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong> ${userInput / 1e+6}</strong>`;
    document.getElementById('w9').innerHTML = `Us ton: <strong>${userInput / 907185}</strong>`;
}

function milligramConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput / 1000}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 1.016e+9}</strong>`;
    document.getElementById('w3').innerHTML = `Kilogram: <strong>${userInput / 1e+6}</strong>`;
    document.getElementById('w4').innerHTML = `Microgram: <strong>${userInput * 1000}</strong>`;
    document.getElementById('w5').innerHTML = `Ounce: <strong>${userInput / 28350}</strong>`;
    document.getElementById('w6').innerHTML = `Pound: <strong>${userInput / 453592}</strong>`;
    document.getElementById('w7').innerHTML = `Stone: <strong>${userInput / 6.35e+6}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong> ${userInput / 1e+9}</strong>`;
    document.getElementById('w9').innerHTML = `Us ton: <strong>${userInput / 9.072e+8}</strong>`;
}

function microgramConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput / 1e+6}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 1.016e+12}</strong>`;
    document.getElementById('w3').innerHTML = `Kilogram: <strong>${userInput / 1e+9}</strong>`;
    document.getElementById('w4').innerHTML = `Milligram: <strong>${userInput / 1000}</strong>`;
    document.getElementById('w5').innerHTML = `Ounce: <strong>${userInput / 2.835e+7}</strong>`;
    document.getElementById('w6').innerHTML = `Pound: <strong>${userInput / 4.536e+8}</strong>`;
    document.getElementById('w7').innerHTML = `Stone: <strong>${userInput / 6.35e+9}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong> ${userInput / 1e+12}</strong>`;
    document.getElementById('w9').innerHTML = `Us ton: <strong>${userInput / 9.072e+11}</strong>`;
}

function imperialtonConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput * 1.016e+6}</strong>`;
    document.getElementById('w2').innerHTML = `Kilogram: <strong>${userInput * 1016}</strong>`;
    document.getElementById('w3').innerHTML = `Microgram : <strong>${userInput * 1.016e+12}</strong>`;
    document.getElementById('w4').innerHTML = `Milligram: <strong>${userInput * 1.016e+9}</strong>`;
    document.getElementById('w5').innerHTML = `Ounce: <strong>${userInput * 35840}</strong>`;
    document.getElementById('w6').innerHTML = `Pound: <strong>${userInput * 2240}</strong>`;
    document.getElementById('w7').innerHTML = `Stone: <strong>${userInput * 160}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong> ${userInput * 1.016}</strong>`;
    document.getElementById('w9').innerHTML = `Us ton: <strong>${userInput * 1.12}</strong>`;
}

function ustonConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput * 907185}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 1.12}</strong>`;
    document.getElementById('w3').innerHTML = `Kilogram: <strong>${userInput * 907.185}</strong>`;
    document.getElementById('w4').innerHTML = `Microgram: <strong>${userInput * 9.072e+11}</strong>`;
    document.getElementById('w5').innerHTML = `Milligram: <strong>${userInput * 9.072e+8}</strong>`;
    document.getElementById('w6').innerHTML = `Ounce: <strong>${userInput * 32000}</strong>`;
    document.getElementById('w7').innerHTML = `Pound: <strong>${userInput * 2000}</strong>`;
    document.getElementById('w8').innerHTML = `Stone: <strong>${userInput * 143}</strong>`;
    document.getElementById('w9').innerHTML = `Tonnes: <strong> ${userInput / 1.102}</strong>`;
}

function stoneConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput * 6350.29}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 160}</strong>`;
    document.getElementById('w3').innerHTML = `Kilogram: <strong>${userInput * 6.35}</strong>`;
    document.getElementById('w4').innerHTML = `Microgram: <strong>${userInput * 6.35e+9}</strong>`;
    document.getElementById('w5').innerHTML = `Milligram: <strong>${userInput * 6.35e+6}</strong>`;
    document.getElementById('w6').innerHTML = `Ounce: <strong>${userInput * 224}</strong>`;
    document.getElementById('w7').innerHTML = `Pound: <strong>${userInput * 14}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong> ${userInput / 157}</strong>`;
    document.getElementById('w9').innerHTML = `US ton: <strong>${userInput / 143}</strong>`;
}

function ounceConverter(userInput) {
    document.getElementById('w1').innerHTML = `Gram: <strong>${userInput * 28.35}</strong>`;
    document.getElementById('w2').innerHTML = `Imperial ton: <strong>${userInput / 35840}</strong>`;
    document.getElementById('w3').innerHTML = `Kilogram: <strong>${userInput / 35.274}</strong>`;
    document.getElementById('w4').innerHTML = `Microgram: <strong>${userInput * 2.835e+7}</strong>`;
    document.getElementById('w5').innerHTML = `Milligram: <strong>${userInput * 28350}</strong>`;
    document.getElementById('w7').innerHTML = `Pound: <strong>${userInput / 16}</strong>`;
    document.getElementById('w6').innerHTML = `Stone: <strong>${userInput / 224}</strong>`;
    document.getElementById('w8').innerHTML = `Tonnes: <strong> ${userInput / 35274}</strong>`;
    document.getElementById('w9').innerHTML = `US ton: <strong>${userInput / 32000}</strong>`;
}
