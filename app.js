var tutorial = document.getElementById('tutorial_container');
var reference = document.getElementById('reference_container');
var example = document.getElementById('example_container');
var exercise = document.getElementById('exercise_container');
const toggle_tutorial = (e) => {
    // var toggle_icon = document.getElementById('toggle_icon')

    // // e.classList.toggle("fa-sort-up");
    // // console.log(toggle_icon.parentNode.innerHTML);
    // console.log(e);
    if (tutorial.style.display == 'block') {
        tutorial.style.display = 'none';
        reference.style.display = 'none';
        example.style.display = 'none';
        exercise.style.display = 'none';
    }
    else
        tutorial.style.display = 'block';
}
const toggle_reference = () => {
    if (reference.style.display == 'block') {
        reference.style.display = 'none';
        tutorial.style.display = 'none';
        example.style.display = 'none';
        exercise.style.display = 'none';
    }
    else
        reference.style.display = 'block';
}
const toggle_example = () => {
    if (example.style.display == 'block') {
        example.style.display = 'none';
        exercise.style.display = 'none';
        tutorial.style.display = 'none';
        reference.style.display = 'none';
    }
    else
        example.style.display = 'block';
}
const toggle_exercise = () => {
    if (exercise.style.display == 'block') {
        exercise.style.display = 'none';
        tutorial.style.display = 'none';
        reference.style.display = 'none';
        example.style.display = 'none';
    }
    else
        exercise.style.display = 'block';
}

function close_container(e) {
    e.parentNode.remove();
}

