//  # IIFE: Imemediately Invoked Function Expression
//  IFE được hiểu đơn giản là 1 Function Expression đc gọi ngay lập tức hay là 1 biểu thức tạo ra 1 hàm và hàm đó đc gọi ngay lập tức

// Self-Invoking Fuction (tên gọi khác của IFE): 1 hàm tự gọi 

/**
 * ## Nôi dung
 * 1. IIFE trông như thế nào?   (16->22)
 * 2. Dùng dấu ; trước thằng IFE (14)
 * 3.IIFE là hàm 'private'  (23,21)
 * 4. Khi nào sử dụng IIFE --> Khi viết thư viện, hoặc trong chương trình lớn để k bị trùng lập tên biến global
 * các cách tao ra một IIFE (26-> 29) searh đặt tả javascript để biết
 * 6. ví dụ sd IIFE (31->46)
 */
let i=0
var fullName = "Nguyen Quoc Viet";
// Không viết dâu ; trước IIFE sẽ ra lỗi 
(function myFunc(message){
    i++;
    console.log(i);
    if(i<2)
        myFunc()  
        // IIFE có tính private nên có thể gọi lại bên trong nó (đệ quy);
})(fullName);
// myFunc(fullName); đoạn code này sẽ lỗi vì IIFE là hàm private;
+function (message){
    console.log(message);
}(fullName)
// có thể dùng các toán tư3 + , - , ! để viết 1 IIFE

const app = (function(){
    // cars hiện tại đang private ko thể truy cập bên ngoài
    // cars hiện phải phải truy cập thông qua app.add, app.edit, app.delete
    const cars =[];
    return { 
    add(car){
        cars.push(car)
    },
    edit(index,car){
        cars[index]= car;
    },
    delete(index){
        cars.splice(index,1);
    }
}
})()
app.add('Bwm')
console.log(app.cars);