var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
 'Washington', 'West Virginia', 'Wisconsin', 'Washington DC', 'Wyoming'];

var listOfStates = document.querySelector('ul');
var image = document.querySelector('img');

for (var i = 0; i < states.length; i++) {

    var state = document.createElement('li');
    state.innerHTML = states[i];
    listOfStates.appendChild(state);
    document.body.appendChild(listOfStates);

    state.addEventListener('mouseover', function () {
        var val = 'images/' + this.innerHTML + '.png';
        image.setAttribute('src', val);
    });

    state.addEventListener('mouseout', function () {
        image.setAttribute('src', 'images/us%20images.png')
    })

}

var coordinates = ["(379,152),(412,181)", "(71,186),(117,223)", "(128,129),(164,178)",
    "(311,142),(350,168)", "(52,73),(79,145)", "(181,101),(241,133)", "(498,80),(513,82)",
    "(484,102),(494,110)", "(425,184),(473,220)", "(402,151),(442,181)", "(166,209),(215,237)",
    "(132,26),(149,86)", "(344,91),(370,132)", "(373,96),(400,117)", "(293,85),(339,109)",
    "(24,(112),(311,137)", "(375,119),(426,132)", "(316,170),(354,199)", "(509,32),(539,61)",
    "(466,104),(491,116)", "(497,72),(521,79)", "(361,51),(410,92)", "(289,39),(336,83)",
    "(354,154),(379,187)", "(302,108),(355,141)", "(148,27),(228,69)", "(239,89),(303,112)",
    "(88,80),(118,139)", "(502,54),(517,68)", "(488,87),(497,105)", "(175,132),(226,173)",
    "(449,59),(499,85)", "(421,135),(488,151)", "(234,36),(293,65)", "(397,96),(433,114)",
    "(257,138),(313,165)", "(68,36),(114,79)", "(511,78),(518,80)", "(429,145),(467,166)",
    "(231,64),(293,91)", "(360,140),(423,146)", "(231,142),(296,226)", "(140,88),(173,132)",
    "(490,55),(506,70)", "(450,115),(490,126)", "(71,15),(123,51)", "(429,111),(447,127)",
    "(328,60),(372,88)", "(473,109),(477,111)", "(169,66),(225,102)"];

for (var i = 0; i < states.length; i++) {
  
    var map = document.querySelector('map');

    var area =  document.createElement('area');
    area.setAttribute('shape', 'rect');
    area.setAttribute('coords', coordinates[i]);
    area.setAttribute('data-state', states[i]);

    map.appendChild(area);

    var stateWikiLink = 'https://en.wikipedia.org/wiki/' + area.getAttribute('data-state');
    area.setAttribute('href', stateWikiLink);
    area.setAttribute('target', '_');
	
    area.addEventListener('mouseover', function () {
        var val = 'images/' + this.getAttribute('data-state') + '.png';
        image.setAttribute('src', val);

    });

    area.addEventListener('mouseout', function () {
        image.setAttribute('src', 'images/us%20images.png');
    });

}

var imgContainer = document.querySelector('div');

imgContainer.addEventListener('wheel', function(event){
    var images = document.querySelectorAll('img');

    var rolledDirection = event.wheelDelta > 0 ? 'up' : 'down';

    if(rolledDirection == 'up'){
        var stateImage = image.getAttribute('src');
        stateImage = stateImage.replace('images/', '');
        stateImage = stateImage.replace('.png', '');

        var srcPart1 = 'https://geology.com/state-map/maps/';
        var srcPart2 = '-county-map.gif';
        
        if(stateImage != 'us%20images'){
           stateImage = stateImage.toLowerCase();
           if(/\s/.test(stateImage)){
               stateImage = stateImage.replace(' ', '-');
           }

           console.log(stateImage);
   
           images[1].setAttribute('src', srcPart1 + stateImage + srcPart2);
   
           images[0].style.display = 'none';
           images[1].style.display = 'inline';

        }
    }else if(rolledDirection = 'down'){
        if(images[1].style.display == 'inline'){
            images[0].style.display = 'inline';
            images[1].style.display = 'none';
        }
    }

});

