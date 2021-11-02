let timer = 100;
let loadingAnimation = "|/-\\|/-\\|";

for (const loading of loadingAnimation) {
  setTimeout(() => {
    process.stdout.write('\r' + loading)
  }, timer += 200);
}
setTimeout(() => {
  process.stdout.write('\n'); 
}, timer);

