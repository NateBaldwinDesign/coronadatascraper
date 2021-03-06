/*
  Generate a CSV from the given day
*/
function csvForDay(data) {
  // Start with the columns we want first
  let columns = [
    'city',
    'county',
    'state',
    'country',
    'cases',
    'deaths',
    'recovered',
    'tested',
    'active',
    'population',
    'lat',
    'long',
    'url'
  ];

  // Get list of columns
  for (let location of data) {
    for (let column in location) {
      if (columns.indexOf(column) === -1) {
        columns.push(column);
      }
    }
  }

  // Drop coordinates
  columns = columns.filter(column => column != 'coordinates');

  // Turn data into arrays
  let csvData = [
    columns
  ];
  for (let location of data) {
    let row = [];
    for (let column of columns) {
      // Output lat and long instead
      if (column === 'lat' && location.coordinates) {
        row.push(location.coordinates[1]);
      }
      else if (column === 'long' && location.coordinates) {
        row.push(location.coordinates[0]);
      }
      else {
        row.push(location[column]);
      }
    }
    csvData.push(row);
  }
  return csvData;
}

export { csvForDay }