import './base.scss';
import ProgressBar from 'progressbar.js';
import URI from 'urijs';
import './fittext.js';

let url = new URI();
let q = url.search(true);
console.log(q, url, window.location);
if(!q) {
    q = {};
}
if(!q.duration) {
    q.duration = 800;
}
else {
    q.duration = parseInt(q.duration);
}
if(!q.number) {
    q.number = '?'
}

console.log(q);


window.fitText(document.getElementById('container'), 1.2);

var progressBar = new ProgressBar.Circle('#container', {
    strokeWidth: 3,
    duration: q.duration,
    text: {
        value: q.number
    }
});

progressBar.animate(1, {
    duration: q.duration
}, function() {
    console.log('Animation has finished');
});