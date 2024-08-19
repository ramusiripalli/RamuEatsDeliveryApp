function checkInputs() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postcode = document.getElementById('postcode').value;
    const email = document.getElementById('email').value;
    const yesRadio = document.getElementById('yes').checked;
    const noRadio = document.getElementById('no').checked;
    const allFilled = name && address && city && postcode && email && (yesRadio || noRadio);
    
    if (allFilled) {
        popoverMessage.style.opacity = '0';
    }
    
    document.getElementById('submitButton').disabled = !allFilled;
    return allFilled
}

document.getElementById('name').addEventListener('input', checkInputs);
document.getElementById('address').addEventListener('input', checkInputs);
document.getElementById('city').addEventListener('change', checkInputs);
document.getElementById('postcode').addEventListener('input', checkInputs);
document.getElementById('email').addEventListener('input', checkInputs);
document.getElementById('yes').addEventListener('change', checkInputs);
document.getElementById('no').addEventListener('change', checkInputs);

function sendMessage() {
    const button = document.getElementById('submitButton');
    button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';
    document.getElementById('homeLink').focus();
}