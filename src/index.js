import "./styles.css";

// Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);

// Output:
//"got results" [1000,5000,3000]

function myPromiseAll(taskList) {
  const arr = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((task, index) => {
      task
        .then((data) => {
          arr[index] = data;
          count++;
          if (count === taskList.length) {
            resolve(arr);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

function task2(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

const taskList2 = [task2(1000), task2(5000), task2(3000)];

//run promise.all
myPromiseAll(taskList2)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
