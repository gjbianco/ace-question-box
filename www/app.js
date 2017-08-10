(function() {
  var questionEl = document.getElementById('question');
  var submitEl = document.getElementById('submitButton');

  submitEl.onclick = function(e) {
    e.preventDefault();
    axios.post('/question', {
      question: questionEl.value
    })
    .then(function(response) {
      notie.alert({
        type: 1,
        text: 'Successfully submitted your question! :)'
      });
    })
    .catch(function(err) {
      notie.alert({
        type: 3,
        text: 'Failed submitting your question :('
      });
    });
  }
})();