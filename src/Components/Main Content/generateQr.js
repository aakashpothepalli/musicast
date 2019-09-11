

function (data){
const qrcode = require("qrcode-generator")
        let qr = qrcode(0,'L')
        qr.addData(data)
        qr.make()

return qr.createImgTag(10,2)      
    }

    

