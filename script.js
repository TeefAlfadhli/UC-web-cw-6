function BMI(weight, height)
{

    
    let bmiResult = weight/ (height * height);

    return bmiResult;

}

bmiResult = document.getElementById('result').innerText;

console.log(BMI(55, 150));

function status(bmiResult)
{
    if(bmiResult > 18.5)
    {
        console.log("لديك نقص في الوزن ")
    } 
    else if(bmiResult >= 18.5)
    {
        console.log("وزنك صحي ")
    }
    else if(bmiResult >= 25)
    {
        console.log("لديك زيادة في الوزن ")
    }
}


function calculate()
{
  let weight = document.getElementById(weight).value;
  let height = document.getElementById(height).value;
}

