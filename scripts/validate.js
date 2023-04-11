






const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector))
  forms.forEach(form => {
    form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    })
    setEventListeners(form, rest)
  })
}

const setEventListeners = (formToValidate, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(document.querySelectorAll(inputSelector))
  const formButton = formToValidate.querySelector(submitButtonSelector)
  disableButton(formButton, rest)
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input, validationConfig)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest)
      } else {
        enableButton(formButton, rest)
      }
    })
  })

}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}

const checkInputValidity = (input, { invalidInputClass, ...rest }) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
  if (input.checkValidity()) {
    currentInputErrorContainer.textContent = ''
  } else {
    currentInputErrorContainer.textContent = input.validationMessage
    input.classList.add(invalidInputClass)
  }
}

const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass)
  button.setAttribute('disabled', true)
}

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass)
  button.removeAttribute('disabled')
}



