var john={
  fullName:'jon=hn miller',
  bills:[77,475,110,48],
  calTips:function(){
    this.tips=[];
    this.finalvalues=[];

    for(var i=0;this.bills.length;i++)
    {
      //determime percentage based on tipping rules
      var percentage;
      var bill=this.bills[i];

      if(bill < 100)
        {
          percentage=.2;
        }
        else if(bill >=100 && bill <300)
        {
          percentage=.1;
        }
        else {
          percentage=.25;
        }
        //Add results to the corresponding arrays
        this.tips[i]=bill * percentage;
        this.finalvalues[i]=bill + bill* percentage;
    }
  }
}
john.calTips();
console.log(john);
