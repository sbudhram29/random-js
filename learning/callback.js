const log = () => {
  console.log('finish');
};

const testCallback = (name, callback) => {
  console.log(name);
  callback();
};

testCallback('Sean', log);
