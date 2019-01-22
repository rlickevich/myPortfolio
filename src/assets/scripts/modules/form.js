const enterButton = document.querySelector('#enter');
const authForm = document.querySelector('#auth-form');

enterButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateForm(authForm)) {
        const data = {
            login: authForm.elements.login.value,
            password: authForm.elements.password.value,
            human: authForm.elements.human.checked,
            question: authForm.elements.question.value
        };
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', function() {
            if (xhr.response.status) {
                console.log('все ок');
            }
        });
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.login)) {
        valid = false;
    }
    if (!validateField(form.elements.password)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    const fieldParent = field.parentNode;
    const fieldParentPrev = fieldParent.previousElementSibling;
    const fieldParentPrevChild = fieldParentPrev.firstChild;

    field.addEventListener('focus', function() {
        field.nextElementSibling.style.visibility = 'hidden';
        field.style.border = '0';
        field.style.borderRadius = 'initial';
        fieldParentPrevChild.style.fill = '#e1e1d6';
    });

    if (!field.checkValidity()) {
        field.nextElementSibling.style.visibility = 'visible';
        field.style.border = '1px solid #e44845';
        field.style.borderRadius = '5px';
        fieldParentPrevChild.style.fill = '#e44845';

        return false;
    } else {
        field.nextElementSibling.style.visibility = 'hidden';
        field.style.border = '1px solid #16c2aa';
        field.style.borderRadius = '5px';
        fieldParentPrevChild.style.fill = '#16c2aa';

        return true;
    }
}