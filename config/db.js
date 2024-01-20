const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/AssigmentReactNative', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Bắt sự kiện khi kết nối thành công
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  // Bắt sự kiện khi có lỗi kết nối
  mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
  });


  module.exports = mongoose.connection;