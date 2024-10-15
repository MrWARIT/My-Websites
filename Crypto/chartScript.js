// Sample frame data
const frame = {
    startTime: "1-1-2567",
    endTime: "15-1-2567",
    lowPrice: 0,
    highPrice: 1000
};

// Function to convert date to timestamp
function dateToTimestamp(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return new Date(`${year}-${month}-${day}`).getTime();
}

const startTime = dateToTimestamp(frame.startTime);
const endTime = dateToTimestamp(frame.endTime);

// Get canvas context
const canvas = document.getElementById('timePriceChart');
const ctx = canvas.getContext('2d');

// Chart dimensions
const chartWidth = canvas.width - 100; // Left margin
const chartHeight = canvas.height - 50; // Bottom margin

// Draw x-axis (time)
ctx.beginPath();
ctx.moveTo(50, chartHeight);
ctx.lineTo(chartWidth + 50, chartHeight);
ctx.stroke();

// Draw y-axis (price)
ctx.beginPath();
ctx.moveTo(50, chartHeight);
ctx.lineTo(50, 50);
ctx.stroke();

// Add x-axis labels (time)
ctx.font = "12px Arial";
ctx.textAlign = "center";
ctx.fillText(frame.startTime, 50, chartHeight + 20); // Start point
ctx.fillText(frame.endTime, chartWidth + 50 - 60, chartHeight + 20); // End point

// Add y-axis labels (price)
ctx.textAlign = "right";
ctx.fillText(frame.lowPrice, 40, chartHeight); // Low price
ctx.fillText(frame.highPrice, 40, 50); // High price

// Add axis labels
ctx.font = "14px Arial";
ctx.textAlign = "center";
ctx.fillText("Time", canvas.width / 2, canvas.height - 10); // X-axis label
ctx.save();
ctx.translate(20, canvas.height / 2);
ctx.rotate(-Math.PI / 2);
ctx.fillText("Price", 0, 0); // Y-axis label
ctx.restore();
