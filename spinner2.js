const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let time = 100;

for (let item of spin) {
  setTimeout(() => {
    process.stdout.write(item); 
  }, time);
  time += 200;
}
