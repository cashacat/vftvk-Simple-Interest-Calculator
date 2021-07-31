//onclick compute function
function compute()
{   
    //"principal" must be a positive number
    var principal = document.getElementById("principal").value;
    
    if(principal == "" || principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return; //sends the user back to the "principal" input box
    }
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100

    //date needs to be a year
    var date = new Date();
    var year = parseInt(date.getFullYear()) + parseInt(years);

	//display results in <p> right before the <footer>
    var results = document.getElementById("result");
    results.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%," + "<br> you will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + " <br> in the year " + "<span class='highlight'>" + year + "</span>";
}

//update rate function for slider
function UpdateRate()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = slider.value +"%";

    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}
        
