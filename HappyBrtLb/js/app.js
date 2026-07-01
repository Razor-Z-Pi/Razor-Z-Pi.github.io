(function () {
    // const emojiTop = document.getElementById('emojiTop');
    const photoEmoji = document.getElementById('photoEmoji');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const hiddenMessageDiv = document.getElementById('hiddenMessage');

    // if (emojiTop) {
    //     emojiTop.textContent = '';
    // }
    // if (photoEmoji) {
    //     photoEmoji.textContent = '';
    // }

    surpriseBtn.addEventListener('click', function () {
        hiddenMessageDiv.classList.toggle('visible');

        const btnTextSpan = document.getElementById('btnText');
        if (hiddenMessageDiv.classList.contains('visible')) {
            if (btnTextSpan) btnTextSpan.textContent = 'Топ!!!';
        } else {
            if (btnTextSpan) btnTextSpan.textContent = 'Нажми на сюрприз!!!';
        }
    });

    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }

    // const signatureSpan = document.getElementById('signatureText');
    // if (signatureSpan) {
    //     signatureSpan.textContent = '';
    // }
})();