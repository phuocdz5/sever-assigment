const mongoose = require('mongoose');

// Sử dụng biến môi trường để đọc đường dẫn kết nối MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://AssigmentReactNative:EbAvFXS6ppu9Y%40y@cluster0.on1mfeq.mongodb.net/AssigmentReactNative1';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Bắt sự kiện khi kết nối thành công
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Bắt sự kiện khi có lỗi kết nối
mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB', err);
});

module.exports = mongoose.connection;
