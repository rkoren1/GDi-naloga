async function getRealEstateData(url, query) {
  const response = await fetch(url + query, {
    method: 'GET',
  });
  return response.json();
}

function populateTable(cell1, cell2, cell3) {
  const table = document.getElementById('real-estate-table');
  let row = table.insertRow();
  row.insertCell(0).innerHTML = cell1 + ' €';
  row.insertCell(1).innerHTML = cell2 + ' m2';
  row.insertCell(2).innerHTML = cell3 + ' €';
}

function fetchAndFillTable() {
  const url = 'https://www.geoprostor.net/data/opsi/trzic?';
  const query = new URLSearchParams({
    format: 'json',
  });
  let totalPrice = 0;
  let totalSize = 0;
  let avgPricePerSqm = 0;
  getRealEstateData(url, query).then((realEstateData) => {
    realEstateData.Items.forEach((item) => {
      if (item.Kraj === 'KOVOR') {
        totalPrice += item.Cena;
        totalSize += +item.Velikost.split(' ')[0];
      }
    });

    avgPricePerSqm = totalPrice / totalSize;

    populateTable(totalPrice.toFixed(2), totalSize, avgPricePerSqm.toFixed(2));
  });
}

fetchAndFillTable();
