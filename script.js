
const name1 = prompt("Enter a name.");
const name2 = prompt("Enter another name.");
const name3 = prompt("Enter another name.");


if (name1.length > name2.length && name1.length > name3.length){
 console.log(`The longer name is ${name1}.`);

} else if (name2.length > name1.length && name2.length > name3.length){
 console.log (`The longer name is ${name2}.`);

} else if (name3.length > name1.length && name3.length > name2.length){
  console.log(`${name3} is the lonest name.`)

} else if (name1.length === name2.length && name1.length === name3.length){
  console.log(`All three names ${name1}, ${name2}, and ${name3} are the same length.`);

} else if (name1.length === name2.length){
  console.log (`${name1} and ${name2} are tied.`);

} else if (name1.length === name3.length){
  console.log (`${name1} and ${name3} are tied`);

} else if (name2.length === name3.length){
  console.log(`${name2} and ${name3} are tied.`);

} else {
  console.log('No tie')
}

