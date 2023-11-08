const data = [
    {
        name: 'John Doe',
        job: 'Software Engineer',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit inventore nulla iusto vitae aut corporis! Ad ullam dolore voluptatum aspernatur reiciendis repudiandae quaerat explicabo obcaecati, perspiciatis tempora pariatur. Eos nihil perferendis odio, exercitationem magni commodi provident voluptas eveniet voluptatibus nesciunt.',
        img: './images/one.jpg'
    },
    {
        name: 'Albert',
        job: 'Designer',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit inventore nulla iusto vitae aut corporis! Ad ullam dolore voluptatum aspernatur reiciendis repudiandae quaerat explicabo obcaecati, perspiciatis tempora pariatur. Eos nihil perferendis odio, exercitationem magni commodi provident voluptas eveniet voluptatibus nesciunt.',
        img: './images/two.jpg'
    },
    {
        name: 'Micheal Stark',
        job: 'Web Developer',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit inventore nulla iusto vitae aut corporis! Ad ullam dolore voluptatum aspernatur reiciendis repudiandae quaerat explicabo obcaecati, perspiciatis tempora pariatur. Eos nihil perferendis odio, exercitationem magni commodi provident voluptas eveniet voluptatibus nesciunt.',
        img: './images/three.jpg'
    },
    {
        name: 'Sushan',
        job: 'UI/UX Designer',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit inventore nulla iusto vitae aut corporis! Ad ullam dolore voluptatum aspernatur reiciendis repudiandae quaerat explicabo obcaecati, perspiciatis tempora pariatur. Eos nihil perferendis odio, exercitationem magni commodi provident voluptas eveniet voluptatibus nesciunt.',
        img: './images/four.jpg'
    },
]

const slider_area = document.querySelector('.slider_area');

    display_item(data);


function display_item(item){
    let display_content = item.map(function(content){
        return `<div class="slider_item">
        <img class="image" src="${content.img}" alt="">
        <h1 class="name">${content.name}</h1>
        <p class="job">${content.job}</p>
        <p class="text">${content.text}</p>
        </div>`
    });

    display_content = display_content.join('')

    slider_area.innerHTML = display_content;


}

// .....................codes for slider starts from here.............//


const sliders = document.querySelectorAll('.slider_item');

sliders.forEach(function(slide, index){
    slide.style.left =  index*100 +'%';
})

const prev_btn = document.querySelector('.prev_btn');
const next_btn = document.querySelector('.next_btn');

let counter = 0;

prev_btn.style.visibility = 'hidden'

prev_btn.addEventListener('click', function(){
    counter--;
    slide_content();
});

next_btn.addEventListener('click', function(){
    counter++;
    slide_content()
})

function slide_content(){
    sliders.forEach(function(slide){
        slide.style.transform = ` translateX(-${counter*100}%) ` 
    })
    if(counter == 0){
        prev_btn.style.visibility = 'hidden'
    }else{
        prev_btn.style.visibility = 'visible'
    }

    if(counter == sliders.length-1){
        next_btn.style.visibility = 'hidden';
    }else{
        next_btn.style.visibility = 'visible';
    }
}


