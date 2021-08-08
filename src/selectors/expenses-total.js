
/* export default (expenses)=>{
   let count =0;
   expenses.forEach(expense => {
       count+= expense.amount;
   });
   return count;
} */

export default (expenses)=>{
    return expenses.map((expense)=>expense.amount).reduce((sum,value)=> sum+value ,0);
 };