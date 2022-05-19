let employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee }
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const deleteEmployee = { ...employee }
    deleteEmployee[key] = employee[key]
    delete deleteEmployee[key]
    return deleteEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}