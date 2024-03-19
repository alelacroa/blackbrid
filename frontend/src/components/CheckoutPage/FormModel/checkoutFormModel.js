export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'Nombre completo*',
      requiredErrorMsg: 'El nombre completo es obligatorio'
    },
    lastName: {
      name: 'lastName',
      label: 'Apellido*',
      requiredErrorMsg: 'Apellido es requerido'
    },
    address1: {
      name: 'address2',
      label: 'Direccion*',
      requiredErrorMsg: 'Diereccion es requerido'
    },

    city: {
      name: 'city',
      label: 'Ciudad*',
      requiredErrorMsg: 'Ciudad es obligatorio'
    },
    state: {
      name: 'state',
      label: 'Provincia*',
      requiredErrorMsg: 'Provincia es obligatorio'
    },
    zipcode: {
      name: 'zipcode',
      label: 'CP*',
      requiredErrorMsg: 'CEP es obligatorio',
      invalidErrorMsg: 'Formato de CP inválido'
    },
    country: {
      name: 'country',
      label: 'País*',
      requiredErrorMsg: 'País es obligatorio'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    invoiceId: {
      name: 'invoiceId',
      label: 'Use this invoiceId'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
