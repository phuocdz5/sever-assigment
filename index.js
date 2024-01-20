const express = require('express');
const bodyParser = require('body-parser');
const mongooseConnection = require('./config/db'); // Import file cấu hình kết nối MongoDB
const userRoutes = require('./routes/userRoutes'); //Import file routes


const app = express();
const POST = process.env.PORT || 3000;

app.use(bodyParser.json());
//thêm đường dẫn routes
app.use('/api/users',userRoutes)


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });
//  Middleware này được sử dụng khi không có route nào phù hợp với đường dẫn được yêu cầu từ client.
//  Nó tạo ra một đối tượng lỗi (Error) với thông báo "Not Found" và đặt trạng thái của đối tượng lỗi thành 404.
//  Sau đó, nó chuyển đối tượng lỗi này tới middleware tiếp theo bằng cách gọi hàm next(error).  


  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      error: {
        message: error.message || 'Internal Server Error',
      },
    });
  });
//Middleware này được sử dụng để xử lý bất kỳ lỗi nào được truyền tới nó, hoặc lỗi được tạo ra trong quá trình xử lý request.
//Nó xác định trạng thái HTTP của response bằng cách sử dụng error.status nếu có, nếu không thì sử dụng giá trị mặc định là 500.
//Nó gửi một response JSON chứa thông điệp lỗi hoặc thông điệp mặc định "Internal Server Error".



app.listen(POST, () => {
    console.log(`Server is running on port ${POST}`);
})