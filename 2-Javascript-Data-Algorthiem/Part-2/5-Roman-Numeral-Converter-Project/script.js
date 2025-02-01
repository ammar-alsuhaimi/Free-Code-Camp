/*const romanNumbers = [
 
    ["M",1000],
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1]
      
      
      
      
    ];
    
    let input = document.getElementById("number");
    let output = document.getElementById("output");
    let convert = document.getElementById("convert-btn");
    
    input.addEventListener("keydown", e => {
    if(e.key === "Enter"){
      convert.click()
    }
    }) 
    convert.addEventListener("click",() => {
    let value = input.value;
    if(!value){
    output.innerText="Please enter a valid number"
    }else if(value<0){
      output.innerText="Please enter a number greater than or equal to 1"
    }else if(value>3999){
      output.innerText="Please enter a number less than or equal to 3999"
    }else{
      let result="";
      for(const [roman,number]of romanNumbers){
        while (number < value){
          result+=roman;
          value -= number;
        }
       
      }
       output.innerText= result;
    }
    })*/


    const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

const isValid = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = 'Please enter a valid number.';
  } else if (int < 1) {
    errText = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    errText = 'Please enter a number less than or equal to 3999.';
  } else {
    // No errors detected
    return true;
  }

  // Handle error text and output styling
  output.innerText = errText;
  output.classList.add('alert');

  return false;
};

const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  updateUI();
});

convertButton.addEventListener('click', () => {
  updateUI();
});

const updateUI = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  clearOutput();

  if (isValid(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
};

    
    
    
    
    