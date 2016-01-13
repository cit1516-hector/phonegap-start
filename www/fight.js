function main(numbergiven, target)
{
    var printer = document.getElementById(target);
    
    var generated = document.getElementById('randomnumbergenerated').value;
    if (generated != 1)
        {
			var howmuch = document.getElementById('difficulty').value;
			var until = 100;
			if (howmuch == 1)
			{
				until = 100;
			}
			else if (howmuch == 2)
			{
				until = 500;
			}
			else if (howmuch == 3)
			{
				until = 1000;
			}
			else if (howmuch == 4)
			{
				until = 5000;
			}
            var random = Math.floor((Math.random() * until) + 1);
            document.getElementById('randomnumber').value = random;
            document.getElementById('randomnumbergenerated').value = 1;
        }
    
    var numbertofind = document.getElementById('randomnumber').value;
    
    var ok = 0;
    var msg = "";
    if (numbergiven == numbertofind)
        {
            ok = 1;
            var tries = document.getElementById('tries').value;
            printer.innerHTML = "You won! The number was : " + numbertofind + " and you made it in " + tries + " tries!";
            
        }
    else if (numbergiven < numbertofind)
        {
            msg = "more"
        }
    else if (numbergiven > numbertofind)
        {
            msg = "less"
        }
    else
        {
            printer.innerHTML = "Erreur...";
        }
    
    if (ok == 0)
        {
            addone(1, 'tries');
            var tries = document.getElementById('tries').value;
			var difficultyint = document.getElementById('difficulty').value;
			var difficultystring = "";
			if (difficultyint == 1)
			{
				difficultystring = "100";
			}
			else if (difficultyint == 2)
			{
				difficultystring = "500";
			}
			else if (difficultyint == 3)
			{
				difficultystring = "1000";
			}
			else if (difficultyint == 4)
			{
				difficultystring = "5000";
			}
            printer.innerHTML = "The number to find is "+ msg +" that what you tried! Tries : " + tries + " Difficulty : " + difficultystring;
        }
}

function restart()
{
    location.reload();
}

function disable(target)
{
	document.getElementById(target).disabled = true;
}

function hide(target)
{
    if (document.getElementById(target).style.visibility == 'hidden')
        {
            document.getElementById(target).style.visibility = 'visible';
        }
    else
        {
            document.getElementById(target).style.visibility = 'hidden';
        }
}

function addone(howmuch, target)
{
    var number = document.getElementById(target).value;
    number = +number + howmuch;
    document.getElementById(target).value = number;
}