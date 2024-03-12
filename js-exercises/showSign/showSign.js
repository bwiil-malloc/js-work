let insertNo = prompt('Please insert you number', '')
if(isNaN(insertNo)){
    alert('This is not a number, please insert a number.');
}else{
    if(insertNo > 0){
        insertNo = 1;
    }else if(insertNo < 0){
        insertNo = -1;
    }else{
        insertNo = 0;
    };
};