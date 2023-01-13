import './style.css';

const inputName = document.getElementById('name');
const inputEnRollNo = document.getElementById('enroll');
const inputDate = document.getElementById('date');
const submit = document.getElementById('push');

submit.addEventListener('click', (e) => {
  let stName = inputName.value;
  let stEnRollNo = inputEnRollNo.value;
  let stDate = inputDate.value;
  const studentag = document.querySelector('#student-details');
  // studentDetails.forEach((student) => {
  const code = `<div class="card col">
    <div class="student-name">Name : ${stName}</div>
    <div class="enroll">${stEnRollNo}</div>
    <div class="birthdate">${stDate}</div>
</div>`;
  studentag.insertAdjacentHTML('afterbegin', `${code}`);
  // });
});
