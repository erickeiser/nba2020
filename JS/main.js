$(function() {
  $('#table1').tablesorter({
    theme : 'blue',

    // add sort on the first column and in ascending order AFTER the selected column
    sortList: [[3,1]]
  });

  $('#table2').tablesorter({
    theme : 'blue',

    // append different sort based on the first column sorted
    sortAppend: {
      0 : [[ 1, 'a' ]], // always apply ascending sort
      2 : [[ 3, 'o' ]], // sort "o"pposite of column 2 direction
      4 : [[ 5, 's' ], [ 0, 's' ] ]  // sort "s"ame as column 4 direction
    }
  });
});