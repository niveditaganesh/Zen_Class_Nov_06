// var div=document.createElement('div')
// div.setAttribute('class','container')
// var ID_label=document.createElement('label')
// ID_label.setAttribute('for','ID')
// ID_label.innerHTML="Customer Id"
// var ID=document.createElement('input')
// ID.setAttribute('type','number')
// ID.setAttribute('class','container-fluid')
// ID.setAttribute('id','ID')
// var cusname_label=document.createElement('label')
// cusname_label.setAttribute('for','cusname')
// cusname_label.innerHTML="Customer Name"
// var cusname=document.createElement('input')
// cusname.setAttribute('type','text')
// cusname.setAttribute('class','container-fluid')
// cusname.setAttribute('id','cusname')
// var br0=document.createElement('br')
// var br1=document.createElement('br')
// var br2=document.createElement('br')
// var br3=document.createElement('br')
// var br4=document.createElement('br')
// var br5=document.createElement('br')
// var submit=document.createElement('button')
// submit.setAttribute('class','btn btn-primary container-fluid')
// submit.setAttribute('type','button')
// submit.id='submit';submit.innerHTML='Submit'
// div.append(ID_label,br0 ,ID,br1, cusname_label,br2,cusname,br3,br4,submit,br5);var customername,customerid;
// document.body.append(div);
//submit.onclick=myFunc;
/////////////////////////////////////////////
function myFunc()
{
//var x=document.getElementById('ID').value

interface customerDetails{
    ID:number;
    name:string;
    discount:number;
}
interface acctDetails{
    balance:number;
}
interface invoiceDetails{
    amount:number;
}

class Customer{
    ID:number;
    name:string;
    discount:number;

    constructor(custData:customerDetails){
        this.ID=custData.ID;
        this.discount= custData.discount;
        this.name= custData.name;
    }

    getID():number{
        
        return this.ID;
    }
    getName():string{
        return this.name;
    }
    getDiscount():number{
        return this.discount;
    }
    setDiscount(discount:number){
        this.discount=discount;
    }
    toString(ID:number,name:string,discount:number):string{
        return `ID:${ID}, Name:${name}, Discount:${discount}`
    }
}
class Invoice extends Customer{
amount:number;
constructor(custInfo:customerDetails,invoiceInfo:invoiceDetails){
    super(custInfo)
    this.amount=invoiceInfo.amount;
}
getAmount():number{
    return this.amount
}
setAmount(amount:number){
    this.amount=amount;
}
getAmountAfterDiscount():number{
    console.log(`Discount given is: ${this.discount}`)
    let a=this.amount*this.discount
    console.log("The discounted amount:" +a)
    return (this.amount-a)
}

}
class Account_cust extends Invoice{
balance:number;
customer:Customer
constructor(custInfo:customerDetails,invoiceInfo:invoiceDetails,acctInfo:acctDetails){
    super(custInfo,invoiceInfo)
    this.balance=acctInfo.balance;
}

getBalance():number{
    return this.balance;
}
setBalance(balance:number){

    this.balance=balance;
}
deposit(amount:number){
console.log(`Amount deposited is ${amount}`)
this.balance+=amount;
return this.balance ;
}
withdraw(amount:number){
    if(amount<this.balance){
        console.log(`Amount withawed is ${amount}`)
        this.balance-=amount;
        return this.balance;
    }else{
        console.log('insufficient balance')
    }
}
}

let acct=new Account_cust(
    {ID:114,
        name:"Joe",
        discount:0.5},
        {
          amount:600  
        },
         {
            balance:2000
        }
);
console.log("Id:"+acct.getID());
console.log("Name:"+acct.getName());
console.log("Get balance"+acct.getBalance());
console.log("Get discount"+acct.getDiscount());
acct.setDiscount(0.2);
acct.setBalance(1000);
console.log("New Bal:"+acct.getBalance());
console.log("Current bal after deposit:"+acct.deposit(1000));
console.log("Current bal after withdrwal:"+acct.withdraw(500));
acct.setAmount(1000);
let c=acct.getAmountAfterDiscount();
console.log('Amount after discount:'+c);
console.log("Current bal after withdrwal:"+acct.withdraw(c));
console.log("Current bal after deposit :"+acct.deposit(acct.getAmount()))

let data_feild=document.createElement('div')
data_feild.setAttribute('id','data_feild')
data_feild.setAttribute('class','container')

let cust_id=document.createElement('h4')
cust_id.id='cust_id';
data_feild.append(cust_id)


let cust_name=document.createElement('h4')
cust_name.id='cust_name';
data_feild.append(cust_name)


let cust_bal=document.createElement('p')
cust_bal.id='cust_bal';
data_feild.append(cust_bal);


let cust_getbal1=document.createElement('p')
cust_getbal1.id='cust_getbal1';
data_feild.append(cust_getbal1);


acct.setBalance(1000);
let setbal=document.createElement('div');
setbal.innerHTML=`New balance is set now. Which is 1000`
data_feild.append(setbal)

let cust_baln=document.createElement('p')
cust_baln.id='cust_baln';
data_feild.append(cust_baln)


let cust_dep=document.createElement('p')
cust_dep.id='cust_dep';
data_feild.append(cust_dep)


let cust_wd=document.createElement('p')
cust_wd.id='cust_wd';
data_feild.append(cust_wd)

let newamt=document.createElement('div');
newamt.innerHTML=`Amount set for bill is: 1000`
acct.setAmount(1000);
data_feild.append(newamt)
let b=acct.getAmountAfterDiscount();

let cust_amd=document.createElement('p')
cust_amd.id='cust_amd';
data_feild.append(cust_amd);

let cust_wdb=document.createElement('p')
cust_wdb.id='cust_wdb';
data_feild.append(cust_wdb)

let cust_bdp=document.createElement('p')
cust_bdp.id='cust_bdp';
data_feild.append(cust_bdp)

document.body.append(data_feild)

document.getElementById('cust_id').innerHTML=`Id: ${acct.getID()}`
document.getElementById('cust_name').innerHTML=`Name: ${acct.getName()}`
document.getElementById('cust_bal').innerHTML=`Get balance : ${acct.getBalance()}`
document.getElementById('cust_getbal1').innerHTML=`Get discount : ${acct.getDiscount()}`
document.getElementById('cust_baln').innerHTML=`New Bal:: ${acct.getBalance()}`
document.getElementById('cust_dep').innerHTML=`Amount deposited is 1000.<br> Current bal after deposit:: ${acct.deposit(1000)}`
document.getElementById('cust_wd').innerHTML=`Amount deposited is 500.<br> Current bal after withdrwal:: ${acct.withdraw(500)}`
document.getElementById('cust_amd').innerHTML=`Discount given is 200. <br> Amount after discount:: ${b}`
document.getElementById('cust_wdb').innerHTML=`Current bal after withdrwal of bill amount which is 800 is:: ${acct.withdraw(b)}`
document.getElementById('cust_bdp').innerHTML=`A Deposit of ${acct.getAmount()} is made. <br>Current bal after deposit :: ${acct.deposit(acct.getAmount())}`

    }

    myFunc();