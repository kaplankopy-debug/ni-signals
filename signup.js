'use strict';
const form = document.querySelector('#signup-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const email = document.querySelector('#email').value.trim();
    const subject = 'NI Signals — free briefing signup';
    const body = `Please add ${email} to the free NI Signals briefing and occasional launch updates.\n\nI consent to receiving these emails and understand I can unsubscribe at any time by replying or contacting kap1an_t3@hotmail.com.\n\nThanks`;
    const request = `mailto:kap1an_t3@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.querySelector('#signup-status');
    status.replaceChildren(document.createTextNode('Your request is ready. Send it from your email app to complete signup. If nothing opens, email kap1an_t3@hotmail.com with the subject “NI Signals free briefing” and ask to receive the briefing and launch updates. '));
    const retry = document.createElement('a');
    retry.href = request;
    retry.textContent = 'Open email request again';
    status.append(retry);
    window.location.href = request;
  });
}
