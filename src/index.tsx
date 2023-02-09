const fn = () => {
	console.log("execute done");
};

let arr = [1, 2, 3];
const item = arr.at(1);
console.log(item);

const res = arr.includes(2);
console.log(res);

let s1 = "Zero.D.Saber";
s1.replaceAll('Z', 'X');
