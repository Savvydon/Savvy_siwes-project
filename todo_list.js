document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('#push');
    btn.addEventListener('click', function(e){
        e.preventDefault();
        if(document.querySelector('#newtask input').value == 0){
            alert("please add a task");
        }
        else{
            document.querySelector('#task').innerHTML += `
                                                            <div class="task">
                                                                <span id="task1">
                                                                    ${document.querySelector('#newtask input').value}
                                                                </span>
                                                                <span class="task1">
                                                                     <i class='bx bxs-trash'></i>
                                                                </span>
                                                        `;
            current_task = document.querySelectorAll('.task1');
            for(var i = 0; i<current_task.length; i++){
                current_task[i].addEventListener('click', function(){
                    this.parentNode.remove();
                });
            };
            toget = document.querySelectorAll('#task1');
            for(var i = 0; i<toget.length; i++){
                toget[i].addEventListener('click', function(){
                    this.classList.toggle('complete');
                });
            }
        };
        document.querySelector('#newtask input').value = '';
    });
})