//Storage
var victim = [];
var volunteer = [];


//victim
var victimPrompt = confirm('Are you a victim wishing to enter your information? \n' + 'If yes, click OK. \
If no, click CANCEL.');


if (victimPrompt) {
    alert('Click OK to begin Victim Form');
        while (victimPrompt) {
        
        var victimObj = {
        name: prompt('What is the victims name?'),
        phone: prompt('What is the vicitims phone number?'),
        street: prompt('What is the vicitims street name?'),
        };
    victim.push(victimObj);
    victimPrompt = confirm("Click OK if you have another victim to register, or CANCEL \n" +
"if you are finished.");
  }
}
console.log(victim);


//Volunteer

var volunteerPrompt = confirm('Are you a victim wishing to enter your information? \n' +
"If no, click CANCEL.");

if (volunteerPrompt) {
    alert('Click to begin Volunteer Form');
    while (volunteerPrompt) {
        var volunteerObj = {
            name: prompt('What is the volunteers name?'),
            phone: prompt('What is the volunteers phone number?'),
            street: prompt('What is the vicitims street name?'),
        };
    volunteer.push(volunteerObj);
    volunteerPrompt = confirm("Click OK if you have another volunteer to register, or CANCEL \n" +
"if you are finished.");
    }
}
console.log(volunteer);

var victimCount = victim.length;
var volunteerCount = volunteer.length;
var totalCount = victimCount + volunteerCount;

alert("There are " + victimCount + " vicitims in need. \n" + "There \
are " + volunteerCount + " volunteers in need. \n" + "Total enlisted = " + totalCount + '.');