if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "logIn.html";
}

let expensesArray = [];
let totalAmount = 0;

let categorySelect = document.querySelector("#category-select");
let amountInput = document.querySelector("#amount-input");
let dateInput = document.querySelector("#date-input");

let addBtn = document.querySelector("#add-btn");
let expenseTableBody = document.querySelector("#expense-table-body");
let totalAmountCell = document.querySelector("#total-amount");

addBtn.addEventListener("click", () => {

    let currentCategory = categorySelect.value;
    let currentAmount = Number(amountInput.value);
    let currentDate = dateInput.value;

    if (currentCategory == "") {
        alert('Please select a category');
        return;
    }

    if (currentAmount <= 0 || isNaN(currentAmount)) {
        alert('Please enter a valid amount');
        return;
    }

    if (currentDate === '') {
        alert('Please select a date');
        return;
    }

    // Create expense object
    let expense = {
        category: currentCategory,
        amount: currentAmount,
        date: currentDate
    };

    expensesArray.push(expense);

    totalAmount = totalAmount + currentAmount;
    totalAmountCell.textContent = totalAmount;

    let newRow = expenseTableBody.insertRow();
    let categoryCell = newRow.insertCell();
    let amountCell = newRow.insertCell();
    let dateCell = newRow.insertCell();

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;

    let deleteCell = newRow.insertCell();

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    

    deleteBtn.addEventListener("click", () => {
        expensesArray.splice(expensesArray.indexOf(expense), 1);

        totalAmount = totalAmount - expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    });

    deleteCell.appendChild(deleteBtn);

});


// FILTER
let filterSelect = document.querySelector("#filter-category");
let filterBtn = document.querySelector("#filter-btn");
let resetBtn = document.querySelector("#reset-btn");

filterBtn.addEventListener("click", () => {
    let selectedCategory = filterSelect.value;

    if (selectedCategory === "") {
        alert("Please select a category to filter");
        return;
    }
    expenseTableBody.innerHTML = "";

    expensesArray.forEach((expense) => {
        if (selectedCategory == expense.category) {

            let newRow = expenseTableBody.insertRow();
            let categoryCell = newRow.insertCell();
            let amountCell = newRow.insertCell();
            let dateCell = newRow.insertCell();
            let deleteCell = newRow.insertCell();


            categoryCell.textContent = expense.category;
            amountCell.textContent = expense.amount;
            dateCell.textContent = expense.date;

            let deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", () => {
                expensesArray.splice(expensesArray.indexOf(expense), 1);

                totalAmount = totalAmount - expense.amount;
                totalAmountCell.textContent = totalAmount;
                expenseTableBody.removeChild(newRow);
            });
            deleteCell.appendChild(deleteBtn);

        }
    });
});

// 7️⃣ Reset button click event (to show all expenses again)
resetBtn.addEventListener("click", () => {
    filterSelect.value = "";          // reset dropdown
    expenseTableBody.innerHTML = "";  // clear table

    // Re-add all expenses
    expensesArray.forEach((expense) => {
        let newRow = expenseTableBody.insertRow();
        let categoryCell = newRow.insertCell();
        let amountCell = newRow.insertCell();
        let dateCell = newRow.insertCell();
        let deleteCell = newRow.insertCell();

        categoryCell.textContent = expense.category;
        amountCell.textContent = expense.amount;
        dateCell.textContent = expense.date;

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            expensesArray.splice(expensesArray.indexOf(expense), 1);
            totalAmount -= expense.amount;
            totalAmountCell.textContent = totalAmount;
            expenseTableBody.removeChild(newRow);
        });

        deleteCell.appendChild(deleteBtn);
    });
});