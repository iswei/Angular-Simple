exports.schema = {
  //_id: Number,  <== if this is used, it cause simpledb to use auto-increment plugin on _id for new document
  name: {
    first: String,
    last: String
  },
  age: Number,
  email: String,
  createDate: Date,
  editDate: Date,
  active: Boolean
};

