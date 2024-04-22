
const root = document.getElementById('root');


const textarea = document.createElement('textarea');
textarea.placeholder = 'Enter text here...';
textarea.style.width = '100%';
textarea.style.height = '200px';
root.appendChild(textarea);


const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
root.appendChild(submitBtn);


submitBtn.addEventListener('click', () => {
  
  const inputText = textarea.value;

  
  const wordsArray = inputText.split(/\s+/);

  
  const frequencyTable = {};
  wordsArray.forEach(word => {
    frequencyTable[word] = frequencyTable[word] ? frequencyTable[word] + 1 : 1;
  });

  
  console.log(frequencyTable);

  
  renderFrequencyTable(frequencyTable);
});


function renderFrequencyTable(frequencyTable) {
  
  const root = document.getElementById('root');
  root.innerHTML = ''; 

  
  const table = document.createElement('table');
  table.border = '1';

  
  const headerRow = table.insertRow();
  const wordNameHeader = headerRow.insertCell(0);
  const wordFreqHeader = headerRow.insertCell(1);
  wordNameHeader.textContent = 'Word Name';
  wordFreqHeader.textContent = 'Word Frequency';

  
  const sortedTable = Object.entries(frequencyTable).sort((a, b) => b[1] - a[1]);

  
  for (let i = 0; i < Math.min(5, sortedTable.length); i++) {
    const row = table.insertRow();
    const wordNameCell = row.insertCell(0);
    const wordFreqCell = row.insertCell(1);
    wordNameCell.textContent = sortedTable[i][0];
    wordFreqCell.textContent = sortedTable[i][1];
  }

  
  root.appendChild(table);
}
