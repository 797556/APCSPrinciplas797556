
//  Tommy Ashworth

var nums = []



function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadNumbers();
  mySort();
  logNumber();
  findAv();
  findMedian();
}





function loadNumbers(){
  for(var i =0; i<11; i++){
    nums[i]= int(random(100))
  }

  }
function logNumber(){
  console.log(nums);
  }

function mySort(){
  for (var i=0; i<nums.length; i++){
    for(var x=0; x<nums.length; i++){
      if(nums[x]>nums[x+1]){
      swap(nums, x, x+1);

    }
  }
}
}

function swap(nums,a,b){
  var temp=nums[a]
  nums[a]=nums[b];
  nums[b]=temp;
}
function findAv(){
  sum=0
    for (var i=0; i<11; i++){
      sum=(sum+nums[i]);
    }
    console.log(sum/nums.length);
}
