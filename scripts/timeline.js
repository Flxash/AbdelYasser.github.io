const expandButton = document.getElementById('init');
const jobPoints = document.querySelector('.job-points');

expandButton.addEventListener('click', function() {
  jobPoints.classList.toggle('job-points-visible');
});
