var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin', 'Washington DC','Wyoming'
];
var listOfStates =  document.querySelector('ul');
var image = document.querySelector('img');

for(var i = 0;i<states.length;i++){
    var state = document.createElement('li');
    state.innerHTML = states[i];
    listOfStates.appendChild(state);
    document.body.appendChild(listOfStates);
    state.addEventListener('mouseover',function(){
        var val = 'images/'+this.innerHTML+'.png';
        image.setAttribute('src',val);
    });
    state.addEventListener('mouseout',function(){
        image.setAttribute('src','images/us%20images.png')      
    })
}
for(var i =0 ;i<states.length;i++){
    document.querySelectorAll('area')[i].onmouseover= function(){
    var val = 'images/'+this.getAttribute('data-state')+'.png';
    image.setAttribute('src',val);

};
    document.querySelectorAll('area')[i].onmouseout= function(){
    image.setAttribute('src','images/us%20images.png');

};

}

