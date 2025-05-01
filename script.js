document.getElementById('newFile').addEventListener('click', () => {
    if (confirm("Are you sure you want to create a new file? All unsaved changes will be lost.")) {
        document.getElementById('notepad').value = "";
    }
});


document.getElementById('saveFile').addEventListener('click', () => {
    const text = document.getElementById('notepad').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'notepad.txt';
    link.click();
});


document.getElementById('openFile').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('notepad').value = e.target.result;
            };
            reader.readAsText(file);
        }
    };
    input.click();
});



    // Undo/Redo functionality
document.getElementById('undo').addEventListener('click', () => {
        document.execCommand('undo');
    });
    document.getElementById('redo').addEventListener('click', () => {
        document.execCommand('redo');
    });

    // Font family change
document.getElementById('fontFamily').addEventListener('change', (event) => {
        const selectedFont = event.target.value;
        document.getElementById('notepad').style.fontFamily = selectedFont;
        localStorage.setItem('notepadFontFamily', selectedFont);
    });
    
    
    // Font size change
    document.getElementById('fontSize').addEventListener('change', (event) => {
        const selectedSize = event.target.value;
        document.getElementById('notepad').style.fontSize = selectedSize;
        localStorage.setItem('notepadFontSize', selectedSize);
    });


    document.getElementById('toggle-switch').addEventListener('change', function() {
          if (this.checked) {
            console.log('The switch is ON');
            // You can add the code to enable the feature here.
          } else {
            console.log('The switch is OFF');
            // You can add the code to disable the feature here.
          }
        });
        

        function printDocument() {
            const text = document.getElementById("editor").value;
            const printWindow = window.open("", "", );
            printWindow.document.write("<pre>" + text + "</pre>");
            printWindow.document.close();
            printWindow.print();
        }
        // Print functionality
document.getElementById('print').addEventListener('click', () => {
        window.print(); // This opens the print dialog
    });


    function downloadFile() {
        const text = document.getElementById("editor").value;
        
        // Create a pop-up for user input
        const fileName = prompt("Enter file name:", "note");
        const fileExtension = prompt("Enter file extension:", "txt");
        
        if (!fileName || !fileExtension) {
            alert("File name and extension are required!");
            return;
        }
        
        const blob = new Blob([text], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.${fileExtension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }