const userSchema = {
  userId: { type: "String", required: true, unique: true, minLength: 5 },
  password: { type: "String", required: true, unique: false, minLength: 8 },
};

module.exports = userSchema;
