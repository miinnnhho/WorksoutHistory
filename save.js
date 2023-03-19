// 결과 출력
function saveValue() {
  let exercise = document.getElementById('exercise').value;
  let sets = document.getElementById('sets').value;
  let reps = document.getElementById('reps').value;
  let weight = document.getElementById('weight').value;

  let saveResult = (document.getElementById(
    'result'
  ).innerHTML += `${exercise}: ${sets}세트 ${reps}회 (${weight} kg)`+'<br>');

  
}


