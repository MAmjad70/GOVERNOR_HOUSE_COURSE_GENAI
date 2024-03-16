// A SIMPLE CALCULATOR 

import inquirer from 'inquirer';
 let {num1, num2,op} = await inquirer.prompt([
   {
     type: 'number',
     name: 'num1', 
     message: 'fisrt number?'
   },
   {
      type: 'number',
      name: 'num2', 
      message: 'second number?'
    },
   {
     type: 'input',
     name: 'op', 
     message: 'enter operator?'
   },
 ]);
if (op == '+'){
   console.log(num1+num2);

}
else if (op == '-'){
   console.log(num1-num2);
}
else if (op == '*'){
  console.log(num1*num2);
}
else if (op == '/'){
  console.log(num1/num2);
}
else if (op == '%'){
  console.log(num1%num2);
}
else if (op == '**'){
  console.log(num1**num2);
}

