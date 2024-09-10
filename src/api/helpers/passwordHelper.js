import bcrypt from "bcrypt";
class passwordHelper {
  async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
      return await bcrypt.hash(password, salt);
    } catch (err) {
      throw new Error(err);
    }
  }
  async comparePassword(password,hashedPassword) {
    try {
      const passwordMatch = await bcrypt.compare(password, hashedPassword)
      return passwordMatch;
    }
    catch (err) {
      throw new Error(err);
    }
  }
}

export default new passwordHelper()