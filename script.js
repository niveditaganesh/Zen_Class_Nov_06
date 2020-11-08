var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function myFunc() {
    //var x=document.getElementById('ID').value
    var Customer = /** @class */ (function () {
        function Customer(custData) {
            this.ID = custData.ID;
            this.discount = custData.discount;
            this.name = custData.name;
        }
        Customer.prototype.getID = function () {
            return this.ID;
        };
        Customer.prototype.getName = function () {
            return this.name;
        };
        Customer.prototype.getDiscount = function () {
            return this.discount;
        };
        Customer.prototype.setDiscount = function (discount) {
            this.discount = discount;
        };
        Customer.prototype.toString = function (ID, name, discount) {
            return "ID:" + ID + ", Name:" + name + ", Discount:" + discount;
        };
        return Customer;
    }());
    var Invoice = /** @class */ (function (_super) {
        __extends(Invoice, _super);
        function Invoice(custInfo, invoiceInfo) {
            var _this = _super.call(this, custInfo) || this;
            _this.amount = invoiceInfo.amount;
            return _this;
        }
        Invoice.prototype.getAmount = function () {
            return this.amount;
        };
        Invoice.prototype.setAmount = function (amount) {
            this.amount = amount;
        };
        Invoice.prototype.getAmountAfterDiscount = function () {
            console.log("Discount given is: " + this.discount);
            var a = this.amount * this.discount;
            console.log("The discounted amount:" + a);
            return (this.amount - a);
        };
        return Invoice;
    }(Customer));
    var Account_cust = /** @class */ (function (_super) {
        __extends(Account_cust, _super);
        function Account_cust(custInfo, invoiceInfo, acctInfo) {
            var _this = _super.call(this, custInfo, invoiceInfo) || this;
            _this.balance = acctInfo.balance;
            return _this;
        }
        Account_cust.prototype.getBalance = function () {
            return this.balance;
        };
        Account_cust.prototype.setBalance = function (balance) {
            this.balance = balance;
        };
        Account_cust.prototype.deposit = function (amount) {
            console.log("Amount deposited is " + amount);
            this.balance += amount;
            return this.balance;
        };
        Account_cust.prototype.withdraw = function (amount) {
            if (amount < this.balance) {
                console.log("Amount withawed is " + amount);
                this.balance -= amount;
                return this.balance;
            }
            else {
                console.log('insufficient balance');
            }
        };
        return Account_cust;
    }(Invoice));
    var acct = new Account_cust({ ID: 114,
        name: "Joe",
        discount: 0.5 }, {
        amount: 600
    }, {
        balance: 2000
    });
    console.log("Id:" + acct.getID());
    console.log("Name:" + acct.getName());
    console.log("Get balance" + acct.getBalance());
    console.log("Get discount" + acct.getDiscount());
    acct.setDiscount(0.2);
    acct.setBalance(1000);
    console.log("New Bal:" + acct.getBalance());
    console.log("Current bal after deposit:" + acct.deposit(1000));
    console.log("Current bal after withdrwal:" + acct.withdraw(500));
    acct.setAmount(1000);
    var c = acct.getAmountAfterDiscount();
    console.log('Amount after discount:' + c);
    console.log("Current bal after withdrwal:" + acct.withdraw(c));
    console.log("Current bal after deposit :" + acct.deposit(acct.getAmount()));
    var data_feild = document.createElement('div');
    data_feild.setAttribute('class', 'container');
    var cust_id = document.createElement('h4');
    cust_id.id = 'cust_id';
    data_feild.append(cust_id);
    var cust_name = document.createElement('h4');
    cust_name.id = 'cust_name';
    data_feild.append(cust_name);
    var cust_bal = document.createElement('p');
    cust_bal.id = 'cust_bal';
    data_feild.append(cust_bal);
    var cust_getbal1 = document.createElement('p');
    cust_getbal1.id = 'cust_getbal1';
    data_feild.append(cust_getbal1);
    acct.setBalance(1000);
    var setbal = document.createElement('div');
    setbal.innerHTML = "New balance is set now. Which is 1000";
    data_feild.append(setbal);
    var cust_baln = document.createElement('p');
    cust_baln.id = 'cust_baln';
    data_feild.append(cust_baln);
    var cust_dep = document.createElement('p');
    cust_dep.id = 'cust_dep';
    data_feild.append(cust_dep);
    var cust_wd = document.createElement('p');
    cust_wd.id = 'cust_wd';
    data_feild.append(cust_wd);
    var newamt = document.createElement('div');
    newamt.innerHTML = "Amount set for bill is: 1000";
    acct.setAmount(1000);
    data_feild.append(newamt);
    var b = acct.getAmountAfterDiscount();
    var cust_amd = document.createElement('p');
    cust_amd.id = 'cust_amd';
    data_feild.append(cust_amd);
    var cust_wdb = document.createElement('p');
    cust_wdb.id = 'cust_wdb';
    data_feild.append(cust_wdb);
    var cust_bdp = document.createElement('p');
    cust_bdp.id = 'cust_bdp';
    data_feild.append(cust_bdp);
    document.body.append(data_feild);
    document.getElementById('cust_id').innerHTML = "Id: " + acct.getID();
    document.getElementById('cust_name').innerHTML = "Name: " + acct.getName();
    document.getElementById('cust_bal').innerHTML = "Get balance : " + acct.getBalance();
    document.getElementById('cust_getbal1').innerHTML = "Get discount : " + acct.getDiscount();
    document.getElementById('cust_baln').innerHTML = "New Bal:: " + acct.getBalance();
    document.getElementById('cust_dep').innerHTML = "Amount deposited is 1000.<br> Current bal after deposit:: " + acct.deposit(1000);
    document.getElementById('cust_wd').innerHTML = "Amount deposited is 500.<br> Current bal after withdrwal:: " + acct.withdraw(500);
    document.getElementById('cust_amd').innerHTML = "Discount given is 200. <br> Amount after discount:: " + b;
    document.getElementById('cust_wdb').innerHTML = "Current bal after withdrwal of bill amount which is 800 is:: " + acct.withdraw(b);
    document.getElementById('cust_bdp').innerHTML = "A Deposit of " + acct.getAmount() + " is made. <br>Current bal after deposit :: " + acct.deposit(acct.getAmount());
}
myFunc();
