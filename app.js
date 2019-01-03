$('#submitIncome').click(function() {
    console.log('Click');
  
  });
  
  $('#submitBill').click(function() {
    console.log('Click');
  });
  
  function showIncome() {
    var insertIncome = $('#income').val();
  
    $('#displayIncome').html(insertIncome);
  }