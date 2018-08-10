document.getElementById('loan-form').addEventListener('submit', function(e) {

// hide result
  document.getElementById('results').style.display = 'none';
  
  //show loader

  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100;
  const calculatedPayments = parseFloat(years.value);
//compete monthly payment
  const fc = (principal * calculatedInterest * calculatedPayments);  
  // const  x = Math.pow(1 + calculatedInterest, calculatedPayments);
  // const monthly = (principal * x * calculatedInterest) / (x - 1);
  const numberofMonths = calculatedPayments * 12;
  const monthly = (principal + fc) / numberofMonths;
  if(isFinite(monthly))
  {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * numberofMonths).toFixed(2);
    totalInterest.value = ((monthly * numberofMonths) - principal).toFixed(2);

    // showresults
    document.getElementById('results').style.display = 'block';
    // hide loading
    document.getElementById('loading').style.display = 'none';


  } else {

    showError('Check your numbers');

   }
}



function showError(error)
{
  // hide result
  document.getElementById('results').style.display = 'none';
  
  //hide loader

  document.getElementById('loading').style.display = 'none';
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // create div
  const errorDiv = document.createElement('div');
  // add class
  errorDiv.className = 'alert alert-danger';
  //create text node
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);

}

// clear error
function clearError() {
  

  document.querySelector('.alert').remove();
}  
// const a = 4;
// const b = 2;

// const x = Math.pow(1 + a, b);
// console.log(x);

// // output 16