// Define the food options
const options = [ // อิ่มตัว | ไม่อิ่มตัว
    { text: 'ข้าวขาว', protein: 2.7, carbs: 28, fat: 0.3, energy: 130, amount: 100, unit: 'กรัม' },
    { text: 'ข้าวกล้อง', protein: 2.7, carbs: 23, fat: 0.9, energy: 111, amount: 100, unit: 'กรัม' },
    { text: 'ข้าวไรซ์เบอรี่', protein: 2.6, carbs: 23, fat: 1, energy: 111, amount: 100, unit: 'กรัม' },
    { text: 'ข้าวผัด (ประมาณ)', protein: 8, carbs: 27, fat: 8, energy: 180, amount: 100, unit: 'กรัม' }, // 2 | 6
    // { text: 'ผัดกะเพราหมู (กับข้าว)(ประมาณ)', protein: 26.4, carbs: 0, fat: 18.5, energy: 279, amount: 100, unit: 'กรัม' }, // 5.5 | 12.5
    // { text: 'ผัดคะน้าหมู (กับข้าว)', protein: 11.2, carbs: 6, fat: 11.1, energy: 151, amount: 100, unit: 'กรัม' }, // 
    { text: 'อกไก่สุก', protein: 31.5, carbs: 0, fat: 3.2, energy: 158, amount: 100, unit: 'กรัม' },
    { text: 'BAAM Whey', protein: 25, carbs: 5, fat: 3, energy: 150, amount: 1, unit: 'ช้อน' },
    { text: 'หมูทอด (ประมาณ)', protein: 20.2, carbs: 0.8, fat: 35.3, energy: 405, amount: 100, unit: 'กรัม' },
    { text: 'ไข่ต้ม', protein: 6.3, carbs: 0.4, fat: 5, energy: 72, amount: 1, unit: 'ฟอง' },
    { text: 'ไข่ดาว/เจียว (ประมาณ)', protein: 6.5, carbs: 0.4, fat: 11.8, energy: 133, amount: 1, unit: 'ฟอง' }, // 2.6 |
    // { text: 'ไข่เจียว (ประมาณ)', protein: 6.5, carbs: 0.4, fat: 11.8, energy: 133, amount: 1, unit: 'ฟอง' }, // 2.6 |
    { text: 'สันนอก', protein: 22.8, carbs: 0, fat: 2.6, energy: 121, amount: 100, unit: 'กรัม' },
    { text: 'สันใน', protein: 30.4, carbs: 0, fat: 6.3, energy: 187, amount: 100, unit: 'กรัม' },
    { text: 'สะโพก', protein: 21.8, carbs: 0, fat: 2.9, energy: 120, amount: 100, unit: 'กรัม' },
    { text: 'สันคอ', protein: 17.7, carbs: 0, fat: 13.1, energy: 189, amount: 100, unit: 'กรัม' },
    { text: 'สามชั้น', protein: 9.3, carbs: 0, fat: 53, energy: 518, amount: 100, unit: 'กรัม' },
    { text: 'เป็ด', protein: 13.4, carbs: 0, fat: 16.2, energy: 200, amount: 100, unit: 'กรัม' },
    { text: 'หนังไก่', protein: 13, carbs: 0, fat: 32, energy: 350, amount: 100, unit: 'กรัม' },
    { text: 'นูเทล่า', protein: 5.4, carbs: 56, fat: 30, energy: 520, amount: 100, unit: 'กรัม' },
    { text: 'ขนมปังขาว', protein: 9, carbs: 49, fat: 3.2, energy: 264, amount: 100, unit: 'กรัม' },
    { text: 'ขนมปังโฮลวีต', protein: 13, carbs: 41, fat: 3.4, energy: 247, amount: 100, unit: 'กรัม' },
    { text: 'อกไก่ไม่สุก', protein: 23, carbs: 0, fat: 2.6, energy: 120, amount: 100, unit: 'กรัม' },
    { text: 'สะโพกไก่ (ไม่สุก)', protein: 21, carbs: 0, fat: 4.4, energy: 124, amount: 100, unit: 'กรัม' },
];

// Function to add a new row
function addRow() {
    const formContainer = document.getElementById('form-container');

    const row = document.createElement('div');
    row.classList.add('input-row', 'd-flex', 'mb-2', 'align-items-center');

    const dropdown = document.createElement('select');
    dropdown.classList.add('form-select', 'dropdown', 'me-3');
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.text; // แก้ไขให้ใช้ .text แทน .value
        opt.textContent = option.text;
        dropdown.appendChild(opt);
    });
    dropdown.addEventListener('change', function() {
        const selectedOption = options.find(option => option.text === this.value);
        if (selectedOption) {
            weightInput.placeholder = `${selectedOption.unit}`;
        }
    });    
    row.appendChild(dropdown);

    const weightInput = document.createElement('input');
    // weightInput.type = 'number';
    weightInput.classList.add('form-control', 'weight-input', 'me-3');
    weightInput.placeholder = 'กรัม';
    row.appendChild(weightInput);

    // const g = document.createElement('span');
    // g.textContent = 'g';
    // row.appendChild(g);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '-';
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.onclick = () => {
        row.remove();
        calculateTotal(); // เรียกคำนวณใหม่เมื่อมีการลบบรรทัด
    };
    row.appendChild(deleteBtn);

    formContainer.appendChild(row);
}

function addCustomRow() {
    const formContainer = document.getElementById('form-container');

    const row = document.createElement('div');
    row.classList.add('input-row', 'd-flex', 'mb-2', 'align-items-center', 'custom-row');

    // Create 4 input fields for carbs, protein, fat, and energy
    const carbsInput = document.createElement('input');
    // carbsInput.type = 'number';
    carbsInput.classList.add('form-control', 'carbs-input', 'me-3');
    carbsInput.placeholder = 'คาร์บ (g)';
    row.appendChild(carbsInput);

    const proteinInput = document.createElement('input');
    // proteinInput.type = 'number';
    proteinInput.classList.add('form-control', 'protein-input', 'me-3');
    proteinInput.placeholder = 'โปรตีน (g)';
    row.appendChild(proteinInput);

    const fatInput = document.createElement('input');
    // fatInput.type = 'number';
    fatInput.classList.add('form-control', 'fat-input', 'me-3');
    fatInput.placeholder = 'ไขมัน (g)';
    row.appendChild(fatInput);

    const energyInput = document.createElement('input');
    // energyInput.type = 'number';
    energyInput.classList.add('form-control', 'energy-input', 'me-3');
    energyInput.placeholder = 'พลังงาน (kcal)';
    row.appendChild(energyInput);

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '-';
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.onclick = () => {
        row.remove();
        calculateTotal();
    };
    row.appendChild(deleteBtn);

    formContainer.appendChild(row);
}


function calculateTotal() {
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalEnergy = 0;

    document.querySelectorAll('.input-row').forEach(row => {
        if (row.classList.contains('custom-row')) {
            // If it's a custom row, take values from the input fields directly
            const carbs = parseFloat(row.querySelector('.carbs-input').value);
            const protein = parseFloat(row.querySelector('.protein-input').value);
            const fat = parseFloat(row.querySelector('.fat-input').value);
            const energy = parseFloat(row.querySelector('.energy-input').value);

            if (!isNaN(carbs)) totalCarbs += carbs;
            if (!isNaN(protein)) totalProtein += protein;
            if (!isNaN(fat)) totalFat += fat;
            if (!isNaN(energy)) totalEnergy += energy;
        } else {
            // Handle the original dropdown + weight row
            const selectedOption = options.find(option => option.text === row.querySelector('.dropdown').value);
            const weight = parseFloat(row.querySelector('.weight-input').value);

            if (selectedOption && !isNaN(weight)) {
                totalProtein += (selectedOption.protein * weight) / selectedOption.amount;
                totalCarbs += (selectedOption.carbs * weight) / selectedOption.amount;
                totalFat += (selectedOption.fat * weight) / selectedOption.amount;
                totalEnergy += (selectedOption.energy * weight) / selectedOption.amount;
            }
        }
    });

    // Update total display
    document.getElementById('total-carbs').textContent = `${totalCarbs.toFixed(0)} g`;
    document.getElementById('total-protein').textContent = `${totalProtein.toFixed(0)} g`;
    document.getElementById('total-fat').textContent = `${totalFat.toFixed(0)} g`;
    document.getElementById('total-energy').textContent = `${totalEnergy.toFixed(0)} kcal`;

    // Update nutrient bars with height (as before)
    document.getElementById('carbs-bar').style.height = `${(totalCarbs / 384) * 100}%`;
    document.getElementById('protein-bar').style.height = `${(totalProtein / 151) * 100}%`;
    document.getElementById('fat-bar').style.height = `${(totalFat / 63) * 100}%`;
    document.getElementById('energy-bar').style.height = `${(totalEnergy / 2700) * 100}%`;
}

// Add button for adding custom row
document.getElementById('add-custom-row').addEventListener('click', () => {
    addCustomRow();
    calculateTotal();
});

// Add initial row
document.getElementById('add-row').addEventListener('click', () => {
    addRow();
    calculateTotal();
});

// Listen for changes in inputs to recalculate totals
document.addEventListener('input', calculateTotal);

function getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit', locale: 'th-TH' };
    const today = new Date();
    
    return today.toLocaleDateString('th-TH', options);
}

// อัพเดตหัวเรื่องเมื่อโหลดหน้า
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('date-heading').textContent = getCurrentDate();
});