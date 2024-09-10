import customerModel from "../models/customerModel.js";
import passwordHelper from "../helpers/passwordHelper.js"

class AuthServices {
  async registerService(customerData){
    try {
      const newCustomer = new customerModel({ ...customerData });
      return newCustomer.save();
    }
    catch (err) {
      throw new Error(err);
    }
  }
  async loginService(customerData){
    try {
      const customer = await customerModel.findOne({ email: customerData.email });

      if (customer) {
        const passwordIsValid = await passwordHelper.comparePassword(customerData.password, customer.password);

        if (passwordIsValid) {
          return customer;
        }
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new AuthServices();