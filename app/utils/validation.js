export function isPhoneValid(phone) {
    if (phone) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phone.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
      }
      return false;
  }