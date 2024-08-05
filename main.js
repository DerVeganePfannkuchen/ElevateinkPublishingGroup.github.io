const scriptURL = 'https://script.google.com/macros/s/AKfycbxh8lcNPQ3KCK2qZs0mEu5rBS1eQRjjdhZAzWGL6LpS11MCLOJheaqwQUXWRZqfFS5t2g/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg");
            const button = document.getElementById("send")
            form.addEventListener('submit', e => {
                button.classList.add("noshow")
                msg.classList.remove("error")
                msg.innerHTML= "Processing...";
                e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.classList.add("confr")
                    msg.innerHTML= "Thank You! You're subscribed!";
                    form.classList.add("noshow")
                    form.reset();
                    
                })
                .catch(error => {
                    button.classList.remove("noshow")
                    msg.classList.add("error")
                    msg.innerHTML= "Error: Form not submitted. Please try again later";
                    setTimeout(function() {
                        msg.innerHTML= "";
                        msg.classList.remove("error")
                    },5000);
                })
            })