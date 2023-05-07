class FormValidator {
    constructor (validationConfig, formSelector) {
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._invalidInputClass = validationConfig.invalidInputClass;
        this._formSelector = formSelector;
        // console.log(this._formSelector)
    }

    enableValidation () {
      // console.log(this._formSelector)
      const form = document.querySelector(this._formSelector)
      form.addEventListener('submit', (evt) => {
          const formButton = form.querySelector(this._submitButtonSelector)
          this._disableButton(formButton, this._inactiveButtonClass)
        })
        this._setEventListeners(form, this._inputSelector, this._submitButtonSelector, this._inactiveButtonClass)
    }

    _setEventListeners (formToValidate, inputSelector, submitButtonSelector, inactiveButtonClass) {
      const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector))
      const formButton = formToValidate.querySelector(submitButtonSelector)
      this._disableButton(formButton, this._inactiveButtonClass)
      formInputs.forEach(input => {
          input.addEventListener('input', () => {
            this._checkInputValidity(input, this._invalidInputClass)
          if (this._hasInvalidInput(formInputs)) {
            this._disableButton(formButton, this._inactiveButtonClass)
          }
              else {
              this._enableButton(formButton, this._inactiveButtonClass)
          }
        })
    })
    }

    _hasInvalidInput = (formInputs) => {
        return formInputs.some(item => !item.validity.valid)
    }

    _checkInputValidity = (input, invalidInputClass) => {
        const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
        if (input.checkValidity()) {
          currentInputErrorContainer.textContent = ''
          input.classList.remove(invalidInputClass)
        } else {
          currentInputErrorContainer.textContent = input.validationMessage
          input.classList.add(invalidInputClass)
        }
      }

    _disableButton = (button, inactiveButtonClass) => {
        button.classList.add(inactiveButtonClass)
        button.setAttribute('disabled', true)
    }

    _enableButton = (button, inactiveButtonClass) => {
        button.classList.remove(inactiveButtonClass)
        button.removeAttribute('disabled')
    }
}

// const validation1 = new FormValidator(validationConfig, '.popup__form_add-mesto');
// validation1.enableValidation()

// const validation2 = new FormValidator(validationConfig, '.popup__form_edit-profile');
// validation2.enableValidation()

export {FormValidator};

