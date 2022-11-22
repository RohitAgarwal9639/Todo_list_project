const inputVal = document.getElementsByClassName('inputVal')[0];

        const addTaskBtn = document.getElementsByClassName('btn')[0];


        addTaskBtn.addEventListener('click', function () {

            if (inputVal.value.trim() != 0) {
                let localItems = JSON.parse(localStorage.getItem('localItem'))
                if (localItems === null) {
                    taskList = []

                } else {
                    taskList = localItems;
                }
                taskList.push(inputVal.value)
                inputVal.value = "";
                localStorage.setItem('localItem', JSON.stringify(taskList));
            }
            else {
                alert("please enter a valid task");
                location.reload();
            }

            showItem()
        })

        function showItem() {
            let localItems = JSON.parse(localStorage.getItem('localItem'))
            if (localItems === null) {
                taskList = []

            } else {
                taskList = localItems;
            }

            let html = '';
            let itemShow = document.querySelector('.todoLists');
            taskList.forEach((data, index) => {


                html += `
    <div class="task">
        <span id="taskname">
            ${data}
        </span>
        <button class="delete deleteTask"  onClick="deleteItem(${index})">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    `
            })
            itemShow.innerHTML = html;
        }
        showItem()

        function deleteItem(index) {
            let localItems = JSON.parse(localStorage.getItem('localItem'))
            if (confirm(`Do you want to delete task ${localItems[index]}`)) {
                taskList.splice(index, 1)
                localStorage.setItem('localItem', JSON.stringify(taskList));
                showItem()
            }
        }