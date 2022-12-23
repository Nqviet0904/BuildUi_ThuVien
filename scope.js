var message = "hoc ve scope";
// message đây là biến global đc dùng trong tất cả chương trình
{
  // trong đây là Code Block (    {}  )
  let blockLet = "Khong the truy cap ben ngoai Code block";
  let blockConst = "Khong the truy cap ben ngoai Code block";
}
const fullName = "Nguyen Quoc Viet";
function logger(first, last) {
  console.log(first, last);
  const age = 20;
  //    khi gọi logger() thì nó sẽ tao ra phạm vi mới , khi đó age có thể truy cập bên trong phạm vi logger()
  const fullName = "Nguyen Quoc Viet";
  console.log(age, fullName);
  // //    khi gọi logger() thì nó sẽ tao ra phạm vi mới , khi đó fullName có thể truy cập bên trong phạm ngoài logger()
  // 1 cái biến nằm ngoài phạm vi của nó logger() đều truy cập đc
}
// hàm logger hiện tại là hàm global
logger("Quoc", "Viet");
// sau khi gọi hàm logger() thì hàm logger có tạo ra thêm 1 phạm vi khác
logger("A", "BC");
logger("global", "ban");
// Mồi lần gọi hàm sẽ tạo ra 1 phạm vi mới
